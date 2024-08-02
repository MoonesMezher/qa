const { generateRandomBot, onlineGameBot } = require("../bot/onllineGameBot");
const Room = require("../database/models/Room");
const userJson = require("../helpers/handleUserJson");
// const debounce = require('lodash.debounce');

const game1 = async (io, socket, data) => {
    socket.on('join', (item) => {
        joinMethod(item, socket, io, data);
    });

    socket.on('player', async (item) => {
        playerMethod(item, socket, io);
    })

    socket.on('startPlayer', async (item) => {
        startMethod(item, socket, io);
    })

    socket.on('finishPlayer', async (item, data) => {
        finishMethod(item, socket, io, data);
    })

    socket.on('game', async (item) => {
        gameMethod(item, socket, io);
    });

    socket.on('score', async (item) => {
        scoreMethod(item, socket, io);
    });

    socket.on('leave', async (item) => {
        leaveMethod(item, socket, io, data);
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
            io.to(item.roomId).emit('player', userJson(room?.users));
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
            
            io.to(item.roomId).emit('player', userJson(players));
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
                        
            player.status = 'start';
            
            await room.save();

            if(room.users.length == 2 && room.users[0].status === 'start' && room.users[1].status === 'start') {
                room.gameState = 'start';

                await room.save();
            }
            
            const players = room.users.sort((a, b) => b.score - a.score)
            
            io.to(item.roomId).emit('player', userJson(players));
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
            
            if(room.users.length == 2 && room.users[0].status === 'finish' && room.users[1].status === 'finish') {
                room.gameState = 'finish';

                await room.save();
            }

            await room.save();            

            const players = room.users.sort((a, b) => b.score - a.score);

            if(room.gameState == 'finish') { 
                await Room.findByIdAndDelete(item.roomId);

                data = data.filter(e => e.roomId !== item.roomId)
            }
            
            io.to(item.roomId).emit('player', userJson(players));
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
                                
            io.to(item.roomId).emit('player', userJson(players));
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
    
            if(room.users.length === 2) {            
                if(room.gameState === 'start') {
                    let newUsers = room.users.map(e => {
                        if(e?.id?.toString() === (item?.playerId?.toString())) {
                            return {name: e.name, id: e.id, admin: e.admin, image: e.image,score: e.score, status: 'finish'};
                        }    
                        return e;
                    });
    
                    room = await Room.updateOne({ _id: item.roomId }, { users: newUsers }, { new: true });

                    if(room.users.length == 2 && room.users[0].status === 'finish' && room.users[1].status === 'finish') {
                        room.gameState = 'finish';
        
                        await room.save();
        
                        await Room.findByIdAndDelete(item.roomId);

                        data = data.filter(e => e.roomId !== item.roomId)
                    }
                                            
                    io.to(item.roomId).emit('player', userJson(players));                
                    io.to(item.roomId).emit('game', room.gameState);    
                    return;
                }
    
                let newUsers = room.users.filter(e => !e?.id?.equals(item?.playerId));
    
                const bot = generateRandomBot(room.questions);
    
                newUsers.push( { id: bot.id, name: bot.name, image: bot.image, status: 'finish', score: onlineGameBot(room.questions) } );
    
                room = await Room.updateOne({ _id: item.roomId }, { users: newUsers }, { new: true });
    
                const players = newUsers.sort((a, b) => b.score - a.score)
    
                if(room.users.length == 2 && room.users[0].status === 'finish' && room.users[1].status === 'finish') {
                    room.gameState = 'finish';
    
                    await room.save();
    
                    await Room.findByIdAndDelete(item.roomId);

                    data = data.filter(e => e.roomId !== item.roomId)
                }
                                        
                io.to(item.roomId).emit('player', userJson(players));                
                io.to(item.roomId).emit('game', room.gameState);
            } else {
                await Room.findByIdAndDelete(item.roomId);

                data = data.filter(e => e.roomId !== item.roomId)
    
                io.to(item?.roomId).emit('game', 'finish');
            }
        }
    } catch (error) {
        console.log('Error -> Leave: ', error.message);
    }
    
}
const disconnectMethod = () => {
    console.log('user disconnected now');
}

module.exports = game1