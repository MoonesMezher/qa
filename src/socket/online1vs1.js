const { default: mongoose } = require("mongoose");
const { generateRandomBot } = require("../bot/onllineGameBot");
const Room = require("../database/models/Room");
const userJson = require("../helpers/handleUserJson");
// const debounce = require('lodash.debounce');

const game1 = async (io, socket, data) => {

    socket.on('join', (item) => {
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
    });

    socket.on('player', async () => {
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
    })

    socket.on('startPlayer', async () => {
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
    })

    socket.on('finishPlayer', async () => {
        const item = data.find(e => e.socketId === socket.id);

        if(!item) {
            return;
        }

        try {
            const room = await Room.findById(item.roomId);

            if(room) {
                const player = room.users.find(e => e.id.equals(item.playerId));

                console.log("status:",player);

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
    });

    socket.on('score', async (score) => {
        const item = data?.find(e => e.socketId === socket.id);

        console.log('item:',item);

        if(!item) {
            return;
        }

        try {
            if(item) {
                const room = await Room.findById(item.roomId);

                console.log('room:',room);
                
                if(room) {
                    const player = room.users.find(e => e.id.equals(item.playerId));
                    
                    player.score += score.score;
                    
                    await room.save();

                    const players = room.users.sort((a, b) => b.score - a.score)

                    console.log('xxx:', userJson(players));
                                        
                    io.to(item.roomId).emit('player', userJson(players));
                }
            }
        } catch (error) {
            console.log('Error -> Start: ', error.message);            
        }
    });

    socket.on('leave', async (item) => {
        leaveMethod(item, data, socket, io);
    });

    // Handle user disconnection
    socket.on('disconnect', async () => {
        disconnectMethod();
    });
}

const leaveMethod = async (item, data, socket, io) => {
    console.log("leave:",item);

    if(!item) {
        console.log('No item found in leave event');
        return;
    }

    let room = await Room.findById(item.roomId);

    console.log("leave:",room?.users);
    
    if(room) {
        const theSameUser = room?.users?.find(e => e?.id?.toString() === item.playerId.toString())
    
        if(!theSameUser) {
            return;
        }
        if(room.users.length === 2) {            
            let newUsers = room.users.filter(e => !e?.id?.equals(item?.playerId));

            data = data.filter(e => e.socketId !== socket.id);

            const bot = generateRandomBot(room.questions);

            newUsers.push( { id: bot.id, name: bot.name, image: bot.image, status: 'start' } );

            await Room.updateOne({ _id: item.roomId }, { users: newUsers });

            const players = room.users.sort((a, b) => b.score - a.score)
                                    
            io.to(item.roomId).emit('player', userJson(players));                
            io.to(item.roomId).emit('game', room.gameState);
        } else {
            await Room.findByIdAndDelete(item.roomId);

            data = data.filter(e => e?.roomId.toString() !== item?.roomId.toString());

            io.to(item?.roomId).emit('game', 'delete');
        }
    }
}

const disconnectMethod = () => {
    console.log('user disconnected now');
}

module.exports = game1