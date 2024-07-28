const { generateRandomBot, onlineGameBot } = require("../bot/onllineGameBot");
const Room = require("../database/models/Room");
const userJsonToGroupGame = require("../helpers/handleUserJsonToGroupGame");
// const debounce = require('lodash.debounce');

const game2 = async (io, socket) => {
    socket.on('join', (item) => {
        joinMethod(item, socket, io);
    });

    socket.on('player', async (item) => {
        playerMethod(item, socket, io);
    })

    socket.on('startPlayer', async (item) => {
        console.log('start');
        startMethod(item, socket, io);
    })

    socket.on('finishPlayer', async (item) => {
        console.log('finish');
        finishMethod(item, socket, io);
    })

    socket.on('game', async (item) => {
        gameMethod(item, socket, io);
    });

    socket.on('score', async (item) => {
        scoreMethod(item, socket, io);
    });

    socket.on('leave', async (item) => {
        console.log('leave');
        leaveMethod(item, socket, io);
    });

    socket.on('disconnect', async () => {
        disconnectMethod();
    });
}
const joinMethod = async (item, socket, io) => {
    if(!item) {
        return;
    }

    try {
        socket.join(item.roomId);

        const room = await Room.findById(item.roomId);

        if(room) {
            io.to(item.roomId).emit('player', userJsonToGroupGame(room?.users));
            io.to(item.roomId).emit('game', room.gameState);
        }
    } catch (error) {
        console.log('Error -> Join: ', error.message);            
    }
} 
const playerMethod = async (item, socket, io) => {       
    if(!item) {
        return;
    }
    
    try {
        const room = await Room.findById(item.roomId);
        
        if(room) {
            const players = room.users.sort((a, b) => b.score - a.score);
            
            io.to(item.roomId).emit('player', userJsonToGroupGame(players));
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

            io.to(item.roomId).emit('player', userJsonToGroupGame(players));
            io.to(item.roomId).emit('game', room.gameState);
        }
    } catch (error) {
        console.log('Error -> Start: ', error.message);            
    }
}
const finishMethod = async (item, socket, io) => {
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
            }

            const players = room.users.sort((a, b) => b.score - a.score);

            io.to(item.roomId).emit('player', userJsonToGroupGame(players));
            io.to(item.roomId).emit('game', room.gameState);
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
            io.to(item.roomId).emit('game', room.gameState);
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
                                
            io.to(item.roomId).emit('player', userJsonToGroupGame(players));
        }
    } catch (error) {
        console.log('Error -> Start: ', error.message);            
    }
}
const leaveMethod = async (item, socket, io) => {
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
                }
                                        
                io.to(item.roomId).emit('player', userJsonToGroupGame(players));                
                io.to(item.roomId).emit('game', room.gameState);    
                return;
            } else {
                let newUsers = room.users.filter(e => !e?.id?.equals(item?.playerId));

                room = await Room.updateOne({ _id: item.roomId }, { users: newUsers }, { new: true });

                const players = newUsers.sort((a, b) => b.score - a.score)

                io.to(item.roomId).emit('player', userJsonToGroupGame(players));                
                io.to(item.roomId).emit('game', room.gameState);
            }    
    
        }
    } catch (error) {
        console.log('Error -> Leave: ', error.message);
    }
    
}
const disconnectMethod = () => {
    console.log('user disconnected now');
}

module.exports = game2