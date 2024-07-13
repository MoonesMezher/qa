const Room = require("../database/models/Room");
const userJson = require("../helpers/handleUserJson");

const game1 = async (io, socket) => {
    socket.on('join', (roomId) => {
        try {
            socket.join(roomId);

            io.to(roomId).emit('joined', roomId);
        } catch (error) {
            console.log('Error -> Join: ', error.message);            
        }
    })

    socket.on('player', async (playerId, roomId, state) => {
        // item = JSON.parse(item);

        try {
            const room = await Room.findById(roomId);

            if(room) {
                const player = room.users.find(e => e.id === playerId);

                player.status = state;

                await room.save();

                const players = userJson(room.users);

                io.to(roomId).emit('players', players);
            }
        } catch (error) {
            console.log('Error -> Start: ', error.message);            
        }
    })

    socket.on('game', async (roomId, state) => {
        // item = JSON.parse(item);

        try {
            const room = await Room.findById(roomId);

            if(room) {
                await room.save();

                io.to(roomId).emit('gameState', room.gameState);
            }
        } catch (error) {
            console.log('Error -> Start: ', error.message);            
        }
    })

    // Handle user disconnection
    socket.on('disconnect', () => {
        console.log('A user disconnected');

        // let room = rooms?.find(e => e.users[0].id === socket.id || e.users[1].id === socket.id)

        // room.users = room?.users.filter(e => e.id !== socket.id);

        // if(room?.users.length === 2) {
        //     rooms = rooms.filter(e => e !== room);
        // } 

        // io.to(room.guid).emit('userDisconnected', room);
    });
}

module.exports = game1