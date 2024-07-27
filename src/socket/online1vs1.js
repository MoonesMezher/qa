const { generateRandomBot, onlineGameBot } = require("../bot/onllineGameBot");
const Room = require("../database/models/Room");
const userJson = require("../helpers/handleUserJson");
// const debounce = require('lodash.debounce');

const game1 = async (io, socket, data) => {
    console.log("data: ",data);

    socket.on('join', (item) => {
        joinMethod(item, data, socket, io);
    });

    socket.on('player', async () => {
        playerMethod(data, socket, io);
    })

    socket.on('startPlayer', async () => {
        console.log('start');
        startMethod(data, socket, io);
    })

    socket.on('finishPlayer', async () => {
        console.log('finish');
        finishMethod(data, socket, io);
    })

    socket.on('game', async () => {
        gameMethod(data, socket, io);
    });

    socket.on('score', async (score) => {
        scoreMethod(score, data, socket, io);
    });

    socket.on('leave', async (item) => {
        console.log('leave');
        leaveMethod(item, data, socket, io);
    });

    socket.on('disconnect', async () => {
        disconnectMethod();
    });
}
const joinMethod = (item, data, socket, io) => {
    if(!item) {
        return;
    }
    try {
        socket.join(item.roomId);

        data.push({ socketId: socket.id, roomId: item.roomId, playerId: item.playerId });

        io.to(item.roomId).emit('join', item.roomId);
    } catch (error) {
        console.log('Error -> Join: ', error.message);            
    }
} 
const playerMethod = async (data, socket, io) => {   
    const item = data.find(e => e.socketId === socket.id);
    
    if(!item) {
        return;
    }
    
    try {
        const room = await Room.findById(item.roomId);
        
        if(room) {
            const players = room.users.sort((a, b) => b.score - a.score)
            
            io.to(item.roomId).emit('player', userJson(players));
        }
    } catch (error) {
        console.log('Error -> Player: ', error.message);            
    }
}
const startMethod = async (data, socket, io) => {       
    const item = data.find(e => e?.socketId === socket.id);
    
    if(!item) {
        return;
    }

    try {
        const room = await Room.findById(item.roomId);
        if(room) {
            console.log('status users:', room.users, item.playerId);
            
            const player = room.users.find(e => e.id.equals(item.playerId));
            
            console.log("status start:",player);
            
            player.status = 'start';
            
            if(room.users.length == 2 && room.users[0].status === 'start' && room.users[1].status === 'start') {
                room.gameState = 'start';
            }
            
            await room.save();
            
            const players = room.users.sort((a, b) => b.score - a.score)
            
            io.to(item.roomId).emit('player', userJson(players));
            io.to(item.roomId).emit('game', room.gameState);
        }
    } catch (error) {
        console.log('Error -> Start: ', error.message);            
    }
}
const finishMethod = async (data, socket, io) => {
    const item = data.find(e => e.socketId === socket.id);

    if(!item) {
        return;
    }

    try {
        const room = await Room.findById(item.roomId);

        if(room) {
            const player = room?.users.find(e => e?.id?.toString() === item?.playerId.toString());

            player.status = 'finish';
            
            if(room.users.length == 2 && room.users[0].status === 'finish' && room.users[1].status === 'finish') {
                room.gameState = 'finish';

                await room.save();
            }

            await room.save();            

            const players = room.users.sort((a, b) => b.score - a.score);

            if(room.gameState == 'finish') { 
                await Room.findByIdAndDelete(item.roomId);
            }
            
            io.to(item.roomId).emit('player', userJson(players));
            io.to(item.roomId).emit('game', room.gameState);
        }
    } catch (error) {
        console.log('Error -> Start: ', error.message);            
    }
}
const gameMethod = async (data, socket, io) => {
    const item = data.find(e => e.socketId === socket.id);

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
const scoreMethod = async (score, data, socket, io) => {
    const item = data?.find(e => e.socketId === socket.id);

    console.log("score: ",score);

    if(!item) {
        return;
    }

    try {
        if(item) {
            const room = await Room.findById(item.roomId);
            
            if(room) {
                const player = room.users.find(e => e.id.equals(item.playerId));
                
                player.score += score.score;
                
                await room.save();

                const players = room.users.sort((a, b) => b.score - a.score)
                                    
                io.to(item.roomId).emit('player', userJson(players));
            }
        }
    } catch (error) {
        console.log('Error -> Start: ', error.message);            
    }
}
const leaveMethod = async (item, data, socket, io) => {
    if(!item) {
        return;
    }

    let room = await Room.findById(item.roomId);
    
    if(room) {
        const theSameUser = room?.users?.find(e => e?.id?.toString() === item.playerId.toString())
    
        if(!theSameUser) {
            return;
        }
        if(room.users.length === 2) {            
            if(room.gameState === 'start') {
                let newUsers = room.users.map(e => {
                    if(e?.id?.toString() === (item?.playerId?.toString())) {
                        e.status = 'finish';
                    }
                    return e;
                });

                await Room.updateOne({ _id: item.roomId }, { users: newUsers }, { new: true });

                io.to(item.roomId).emit('player', userJson(newUsers));                

                return;
            }
            let newUsers = room.users.filter(e => !e?.id?.equals(item?.playerId));

            data = data.filter(e => e.socketId !== socket.id);

            const bot = generateRandomBot(room.questions);

            newUsers.push( { id: bot.id, name: bot.name, image: bot.image, status: 'finish', score: onlineGameBot(room.questions) } );

            await Room.updateOne({ _id: item.roomId }, { users: newUsers }, { new: true });

            const players = newUsers.sort((a, b) => b.score - a.score)
                                    
            io.to(item.roomId).emit('player', userJson(players));                
            io.to(item.roomId).emit('game', room.gameState);
        } else {
            await Room.findByIdAndDelete(item.roomId);

            data = data.filter(e => e?.roomId.toString() !== item?.roomId.toString());

            io.to(item?.roomId).emit('game', 'deleted');
        }
    }
}
const disconnectMethod = () => {
    console.log('user disconnected now');
}

module.exports = game1