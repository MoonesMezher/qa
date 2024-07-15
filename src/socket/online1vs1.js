const { generateRandomBot } = require("../bot/onllineGameBot");
const Room = require("../database/models/Room");
const userJson = require("../helpers/handleUserJson");

const game1 = async (io, socket, data) => {

    socket.on('join', (item) => {
        try {
            socket.join(item.roomId);

            data.push({ socketId: socket.id, roomId: item.roomId, playerId: item.playerId });

            io.to(item.roomId).emit('join', item.roomId);
        } catch (error) {
            console.log('Error -> Join: ', error.message);            
        }
    });

    socket.on('player', async () => {
        const item = data.find(e => e.socketId === socket.id);

        try {
            const room = await Room.findById(item.roomId);

            if(room) {
                const players = room.users.sort((a, b) => b.score - a.score)

                io.to(item.roomId).emit('player', userJson(players));
            }
        } catch (error) {
            console.log('Error -> Player: ', error.message);            
        }
    })

    socket.on('startPlayer', async () => {
        const item = data.find(e => e?.socketId === socket.id);

        console.log(item);

        try {
            const room = await Room.findById(item.roomId);

            if(room) {
                const player = room.users.find(e => e.id === item.playerId);

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
    })

    socket.on('finishPlayer', async () => {
        const item = data.find(e => e.socketId === socket.id);

        try {
            const room = await Room.findById(item.roomId);

            if(room) {
                const player = room.users.find(e => e.id === item.playerId);

                player.status = 'finish';
                
                if(room.users.length == 2 && room.users[0].status === 'finish' && room.users[1].status === 'finish') {
                    room.gameState = 'finish';
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
    })

    socket.on('game', async () => {
        const item = data.find(e => e.socketId === socket.id);

        try {
            const room = await Room.findById(item.roomId);

            if(room) {
                io.to(item.roomId).emit('game', room.gameState);
            }
        } catch (error) {
            console.log('Error -> Game: ', error.message);            
        }
    });

    socket.on('score', async (score) => {
        const item = data?.find(e => e.socketId === socket.id);

        console.log(item);

        try {
            if(item) {
                const room = await Room.findById(item.roomId);
                
                if(room) {
                    const player = room.users.find(e => e.id === item.playerId);
                    
                    player.score += score.score;
                    
                    await room.save();

                    const players = room.users.sort((a, b) => b.score - a.score)
                                        
                    io.to(item.roomId).emit('player', userJson(players));
                }
            }
        } catch (error) {
            console.log('Error -> Start: ', error.message);            
        }
    });

    socket.on('leave', async () => {
        console.log('A user disconnected');

        console.log(socket.id);

        const item = data.find(e => e.socketId === socket.id);

        console.log(item);

        let room = await Room.findById(item.roomId);

        if(room) {
            if(room.users === 2) {
                room.users = room.users.filter(e => e.id !== item.playerId);

                data = data.filter(e => e.socketId !== socket.id);
                
                room.users.push(generateRandomBot([], '000000000'));

                await room.save();

                const players = room.users.sort((a, b) => b.score - a.score)
                                        
                io.to(item.roomId).emit('player', userJson(players));                
                io.to(item.roomId).emit('game', room.gameState);
            } else {
                await Room.findByIdAndDelete(item.roomId);

                data = data.filter(e => e.roomId !== item.roomId);

                io.to(item.roomId).emit('leave', 'deleted room');
            }
        }
    });

    // Handle user disconnection
    socket.on('disconnect', async () => {
        console.log('A user disconnected');
    });
}

module.exports = game1