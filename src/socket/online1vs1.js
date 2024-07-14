const Room = require("../database/models/Room");
const userJson = require("../helpers/handleUserJson");

const game1 = async (io, socket, data) => {

    socket.on('join', (item) => {
        console.log('join 1:',item);

        item = JSON.parse(item);

        console.log('join 2:',item);
        try {
            socket.join(item.roomId);

            data.push({ socketId: socket.id, roomId: item.roomId, playerId: item.playerId });

            io.to(item.roomId).emit('joined', item.roomId);
        } catch (error) {
            console.log('Error -> Join: ', error.message);            
        }
    })

    socket.on('player', async () => {
        const item = data.find(e => e.socketId === socket.id);

        try {
            const room = await Room.findById(item.roomId);

            if(room) {
                const player = [room.users.find(e => e.id !== item.playerId)];

                const player2 = userJson(player);

                io.to(item.socketId).emit('player', JSON.stringify(player2));
            }
        } catch (error) {
            console.log('Error -> Player: ', error.message);            
        }
    })

    socket.on('startPlayer', async () => {
        const item = data.find(e => e.socketId === socket.id);

        try {
            const room = await Room.findById(item.roomId);

            if(room) {
                const player = room.users.find(e => e.id === item.playerId);

                player.status = 'start';
                
                if(room.users.length == 2 && room.users[0].status === 'start' && room.users[1].status === 'start') {
                    room.gameState = 'start';
                }

                await room.save();

                const player1 = userJson([player]);
                
                io.to(item.socketId).emit('player1', JSON.stringify(player1));
            }
        } catch (error) {
            console.log('Error -> Start: ', error.message);            
        }
    })

    socket.on('game', async () => {
        console.log('game');

        const item = data.find(e => e.socketId === socket.id);

        console.log(item, socket.id);

        try {
            const room = await Room.findById(item.roomId);

            if(room) {
                io.to(item.roomId).emit('game', room.gameState);
            }

            console.log("Game:", room.gameState, room.users);
        } catch (error) {
            console.log('Error -> Start: ', error.message);            
        }
    });

    socket.on('changeGame', async (item) => {
        item = JSON.parse(item);

        try {
            const room = await Room.findById(item.id);

            if(room) {
                room.gameState = item.state;

                await room.save();

                io.to(item.id).emit('changeGame', room.gameState);
            }

            console.log("Game:", room.gameState, room.players);
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

                await room.save();

                data = data.filter(e => e.socketId !== socket.id);

                if(room.users[0].status === 'start' || room.users[0].status === 'ready') {
                    io.to(item.roomId).emit('leave', 'bot info');
                } else {

                }
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