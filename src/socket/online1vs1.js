const Room = require("../database/models/Room");
const userJson = require("../helpers/handleUserJson");

const game1 = async (io, socket, data) => {

    socket.on('join', (item) => {
        console.log(item);

        item = JSON.parse(item);

        console.log(item);
        try {
            socket.join(item.roomId);

            data.push({ socketId: socket.id, roomId: item.roomId, playerId: item.playerId });

            io.to(item.roomId).emit('joined', item.roomId);
        } catch (error) {
            console.log('Error -> Join: ', error.message);            
        }
    })

    socket.on('player', async () => {
        const { roomId, playerId, socketId } = data.find(e => e.socketId === socket.id);

        try {
            const room = await Room.findById(roomId);

            if(room) {
                const player = [room.users.find(e => e.id !== playerId)];

                const player2 = userJson(player);

                io.to(socketId).emit('player', JSON.stringify(player2));
            }
        } catch (error) {
            console.log('Error -> Player: ', error.message);            
        }
    })

    socket.on('startPlayer', async () => {
        const { roomId, playerId, socketId } = data.find(e => e.socketId === socket.id);

        try {
            const room = await Room.findById(roomId);

            if(room) {
                const player = room.users.find(e => e.id === playerId);

                player.status = 'start';
                
                if(room.users.length == 2 && room.users[0].status === 'start' && room.users[1].status === 'start') {
                    room.gameState = 'start';
                }

                await room.save();

                const player1 = userJson([player]);
                
                io.to(socketId).emit('player1', JSON.stringify(player1));
            }
        } catch (error) {
            console.log('Error -> Start: ', error.message);            
        }
    })

    socket.on('game', async () => {
        console.log('game');

        const { roomId } = data.find(e => e.socketId === socket.id);

        console.log(data, socket.id);

        try {
            const room = await Room.findById(roomId);

            if(room) {
                io.to(roomId).emit('game', room.gameState);
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

    // Handle user disconnection
    socket.on('disconnect', async () => {
        console.log('A user disconnected');

        const { roomId, playerId } = data.find(e => e.socketId === socket.id);

        let room = await Room.findById(roomId);

        if(room) {
            if(room.users === 2) {
                room.users = room.users.filter(e => e.id !== playerId);

                await room.save();

                data = data.filter(e => e.socketId !== socket.id);

                if(room.users[0].status === 'start' || room.users[0].status === 'ready') {
                    io.to(roomId).emit('userDisconnected', 'bot info');
                } else {

                }
            } else {
                await Room.findByIdAndDelete(roomId);

                data = data.filter(e => e.roomId !== roomId);

                io.to(roomId).emit('userDisconnected', 'deleted room');
            }
        }

        // let room = rooms?.find(e => e.users[0].id === socket.id || e.users[1].id === socket.id)

        // room.users = room?.users.filter(e => e.id !== socket.id);

        // if(room?.users.length === 2) {
        //     rooms = rooms.filter(e => e !== room);
        // } 

        // io.to(room.guid).emit('userDisconnected', room);
    });
}

module.exports = game1