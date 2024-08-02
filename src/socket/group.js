const { generateRandomBot, onlineGameBot } = require("../bot/onllineGameBot");
const Room = require("../database/models/Room");
const userJson = require("../helpers/handleUserJson");
const userJsonToGroupGame = require("../helpers/handleUserJsonToGroupGame");
// const debounce = require('lodash.debounce');

const game2 = async (io, socket, data) => {
    socket.on('join2', (item) => {
        joinMethod(item, socket, io, data);
    });

    socket.on('player2', async (item) => {
        playerMethod(item, socket, io);
    })

    socket.on('startPlayer2', async (item) => {
        startMethod(item, socket, io);
    })

    socket.on('finishPlayer2', async (item) => {
        finishMethod(item, socket, io, data);
    })

    socket.on('game2', async (item) => {
        gameMethod(item, socket, io);
    });

    socket.on('score2', async (item) => {
        scoreMethod(item, socket, io);
    });

    socket.on('leave2', async (item) => {
        leaveMethod(item, socket, io, data);
    });

    socket.on('exit', async () => {        
        exit(data, socket);
    });

    socket.on('disconnect', async () => {        
        disconnectMethod(socket, data);
    });
}
const joinMethod = async (item, socket, io, data) => {
    if(!item) {
        return;
    }

    data.push({ playerId: item.playerId, roomId: item.roomId, socketId: socket.id, terminated: true })

    try {
        socket.join(item.roomId);

        const room = await Room.findById(item.roomId);

        if(room) {
            io.to(item.roomId).emit('player2', userJsonToGroupGame(room?.users));
            io.to(item.roomId).emit('game2', room.gameState);
        }
    } catch (error) {
        console.log('Error -> Join: ', error.message);            
    }
} 
const playerMethod = async (item, socket, io) => {     
    console.log("##me", item);
    if(!item) {
        return;
    }
    
    try {
        const room = await Room.findById(item.roomId);
        
        if(room) {
            console.log('##me',room);

            const players = room.users.sort((a, b) => b.score - a.score);

            console.log("##me",players);
            
            io.to(item.roomId).emit('player2', userJsonToGroupGame(players));
        }
    } catch (error) {
        console.log('Error -> Player: ', error.message);            
    }
}
const startMethod = async (item, socket, io) => {           
    if(!item) {
        return;
    }

    try {
        const room = await Room.findById(item.roomId);

        if(room) {            
            const player = room.users.find(e => e.id.equals(item.playerId));

            if(!player.admin || room.users.length <= 2) {
                return;
            }
                        
            room.gameState = 'start';

            await room.save();

            const players = room.users.sort((a, b) => b.score - a.score)

            io.to(item.roomId).emit('player2', userJsonToGroupGame(players));
            io.to(item.roomId).emit('game2', room.gameState);
        }
    } catch (error) {
        console.log('Error -> Start: ', error.message);            
    }
}
const finishMethod = async (item, socket, io, data) => {
    if(!item) {
        return;
    }

    try {
        const room = await Room.findById(item.roomId);

        if(room) {
            const player = room?.users.find(e => e?.id?.toString() === item?.playerId.toString());

            player.status = 'finish';
            
            await room.save();

            let count = 0;

            for (let index = 0; index < room.users.length; index++) {
                if(room.users[index].status === 'finish') {
                    count+=1;
                } else {
                    break;
                }               
            }

            if(count === room.users.length) {
                room.gameState = 'finish' ;

                await room.save();            

                await Room.findByIdAndDelete(item.roomId);

                data = data.filter(e => e.roomId !== room._id)
            }

            const players = room.users.sort((a, b) => b.score - a.score);

            io.to(item.roomId).emit('player2', userJsonToGroupGame(players));
            io.to(item.roomId).emit('game2', room.gameState);
        }
    } catch (error) {
        console.log('Error -> Start: ', error.message);            
    }
}
const gameMethod = async (item, socket, io) => {
    if(!item) {
        return;
    }

    try {
        const room = await Room.findById(item.roomId);

        if(room) {
            io.to(item.roomId).emit('game2', room.gameState);
        }
    } catch (error) {
        console.log('Error -> Game: ', error.message);            
    }
}
const scoreMethod = async (item, socket, io) => {
    if(!item) {
        return;
    }

    try {
        const room = await Room.findById(item.roomId);
        
        if(room) {
            const player = room.users.find(e => e.id.equals(item.playerId));
            
            player.score += item.score;
            
            await room.save();

            const players = room.users.sort((a, b) => b.score - a.score)
                                
            io.to(item.roomId).emit('player2', userJsonToGroupGame(players));
        }
    } catch (error) {
        console.log('Error -> Start: ', error.message);            
    }
}
const leaveMethod = async (item, socket, io, data) => {
    if(!item) {
        return;
    }

    let room = await Room.findById(item.roomId);

    try {
        if(room) {
            const theSameUser = room?.users?.find(e => e?.id?.toString() === item.playerId.toString())
        
            if(!theSameUser) {
                return;
            }
    
            if(room.gameState === 'start') {
                let newUsers = room.users.map(e => {
                    if(e?.id?.toString() === (item?.playerId?.toString())) {
                        return { id: e.id, name: e.name, image: e.image, status: 'finish', admin: e.admin, score: e.score }
                    }

                    return e;
                });

                room = await Room.updateOne({ _id: item.roomId }, { users: newUsers }, { new: true });

                let count = 0;

                for (let index = 0; index < room.users.length; index++) {
                    if(room.users[index].status === 'finish') {
                        count+=1;
                    } else {
                        break;
                    }               
                }

                if(count === room.users.length) {
                    room.gameState = 'finish' ;

                    await room.save();

                    await Room.findByIdAndDelete(room._id);

                    data = data.filter(e => e.roomId !== room._id)
                }
                                        
                io.to(item.roomId).emit('player2', userJsonToGroupGame(players));                
                io.to(item.roomId).emit('game2', room.gameState);    
                return;
            } else {
                let newUsers = room.users.filter(e => !e?.id?.equals(item?.playerId));

                room = await Room.updateOne({ _id: item.roomId }, { users: newUsers }, { new: true });

                const players = newUsers.sort((a, b) => b.score - a.score)

                io.to(item.roomId).emit('player2', userJsonToGroupGame(players));                
                io.to(item.roomId).emit('game2', room.gameState);
            }    
    
        }
    } catch (error) {
        console.log('Error -> Leave: ', error.message);
    }
    
}
const disconnectMethod = async (socket, data) => {
    console.log('user disconnected now');

    const user = data.find(e => e.socketId === socket.id);

    console.log(user);

    if(user) {
        const room = await Room.findById(user.roomId)

        if(!room || !user.terminated) {
            return;
        }

        try {
            const player = room.users.find(e => e.id.toString() === user.playerId.toString());

            if(player) {
                player.status = 'finish'

                await room.save();

                if(!room.users.find(e => e.status !== 'finish')) {
                    room.gameState = 'finish';
                    
                    await Room.findByIdAndDelete(user.roomId)
                    
                    io.to(user.roomId).emit("game", "finish")
                    io.to(user.roomId).emit("game2", "finish")
                }
            }
        } catch (error) {
            console.log('Error disconnected', error.message);
        }
    }
}

const exit = (data, socket) => {
    const player = data.find(e => e.socketId === socket.id);

    if(player) {
        player.terminated = false;
    }

    console.log('Exit: ', player);
}

module.exports = game2