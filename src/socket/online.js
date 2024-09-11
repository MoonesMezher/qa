const { generateRandomBot, onlineGameBot } = require("../bot/onllineGameBot");
const Room = require("../database/models/Room");
const userJson = require("../helpers/handleUserJson");
const userJsonToGroupGame = require("../helpers/handleUserJsonToGroupGame");
// const debounce = require('lodash.debounce');

let rooms = [];

const joinToRoom = async (player, roomId) => {
    const isExist = rooms.find(e => e.roomId === roomId);

    console.log("#############JOIN##############")

    console.log(isExist)

    const room = await Room.findById(roomId);

    console.log(room, roomId)

    if(room) {
        const newPlayer = room.users.find(e => e.id.toString() === player)

        console.log(newPlayer)

        if(newPlayer) {
            if(isExist) {
                isExist.players.push({ id: player, status: 'ready', admin: false, score: 0, image: newPlayer.image, name: newPlayer.name });
            } else {
                rooms.push({roomId: roomId, gameState: 'waiting' ,players:[{ id: player, status: 'ready', admin: true, score: 0, image: newPlayer.image, name: newPlayer.name }]});
            }
        }
    }
}

const leaveRoom = (player, roomId) => {
    const isExist = rooms.find(e => e.roomId === roomId);

    if(isExist) {
        isExist.players = isExist.players.filter(e => e.id !== player);
    }
}

const removeRoom = (roomId) => {
    rooms = rooms.filter(e => e.roomId !== roomId);
}

const editScore = (player, roomId, score) => {
    const isExist = rooms.find(e => e.roomId === roomId);

    if(isExist) {
        const playerr = isExist.players.find(e => e.id === player);

        if(playerr) {
            playerr.score += score;
        }
    }
}

const finishPlayer = (player, roomId) => {
    const isExist = rooms.find(e => e.roomId === roomId);

    if(isExist) {
        const playerr = isExist.players.find(e => e.id === player);

        if(playerr) {
            playerr.status = 'finish';
        }
    }

    if(!isExist.players.find(e => e.status !== 'finish')) {
        isExist.gameState = 'finish'

        setTimeout(() => {
            removeRoom(roomId)
        }, 30000)
    }
}

const startGame = (roomId) => {
    const isExist = rooms.find(e => e.roomId === roomId);

    if(isExist) {
        isExist.gameState = 'start'
    }
}

const getRoomGameState = (roomId) => {
    const room = rooms.find(e => e.roomId === roomId);

    console.log(rooms, room)

    if(room) {
        if(room.gameState === 'finish') {
            setTimeout(() => {
                removeRoom(roomId)
            }, 30000)
        }
        return room.gameState;
    } else {
        return "remove"
    }
}

const getRoomPlayers = (roomId) => {
    const room = rooms.find(e => e.roomId === roomId);

    if(room) {
        const players = room.players.sort((a, b) => b.score - a.score);

        return userJsonToGroupGame(players);
    }
}

const game = async (io, socket, data) => {
    socket.on('join', (item) => {
        console.log("join");
        
        joinMethod(item, socket, io, data);
    });

    socket.on('player-waiting', async (item) => {
        console.log("player");

        playerMethod(item, socket, io, 'player-waiting');
    })

    socket.on('player-start', async (item) => {
        console.log("player");

        playerMethod(item, socket, io, 'player-start');
    })

    socket.on('player-finish', async (item) => {
        console.log("player");

        playerMethod(item, socket, io, 'player-finish');
    })

    socket.on('startPlayer', async (item) => {
        console.log("start");

        startMethod(item, socket, io);
    })

    socket.on('finishPlayer', async (item) => {
        console.log("finish");

        finishMethod(item, socket, io, data);
    })

    socket.on('game-waiting', async (item) => {
        console.log("game-waiting");

        gameMethod(item, socket, io, 'game-waiting');
    });

    socket.on('game-start', async (item) => {
        console.log("game-start");

        gameMethod(item, socket, io, 'game-start');
    });

    socket.on('game-finish', async (item) => {
        console.log("game-finish");

        gameMethod(item, socket, io, 'game-finish');
    });

    socket.on('score', async (item) => {
        console.log("score");

        scoreMethod(item, socket, io);
    });

    socket.on('leave', async (item) => {
        console.log("leave");

        leaveMethod(item, socket, io, data);
    });

    // GROUP

    socket.on('join2', (item) => {        
        console.log("join2");
        joinMethod2(item, socket, io, data);
    });

    socket.on('player2-waiting', async (item) => {
        console.log("player2-waiting");
        await playerMethod2(item, socket, io, 'player2-waiting');
    })

    socket.on('player2-start', async (item) => {
        console.log("player2-start");
        await playerMethod2(item, socket, io, 'player2-start');
    })

    socket.on('player2-finish', async (item) => {
        console.log("player2-finish");
        await playerMethod2(item, socket, io, 'player2-finish');
    })

    socket.on('startPlayer2', async (item) => {
        console.log("startPlayer2");
        startMethod2(item, socket, io);
    })

    socket.on('finishPlayer2', async (item) => {
        console.log("finishPlayer2");
        await finishMethod2(item, socket, io, data);
    })

    socket.on('game2-waiting', async (item) => {
        console.log("game2-waiting")
        await gameMethod2(item, socket, io, 'game2-waiting');
    });

    socket.on('game2-start', async (item) => {
        console.log("game2-start")
        await gameMethod2(item, socket, io, 'game2-start');
    });

    socket.on('game2-finish', async (item) => {
        console.log("game2-finish")
        await gameMethod2(item, socket, io, 'game2-finish');
    });

    socket.on('score2', async (item) => {
        console.log("score2")
        scoreMethod2(item, socket, io);
    });

    socket.on('leave2', async (item) => {
        console.log("leave2")
        leaveMethod2(item, socket, io, data);
    });

    socket.on('disconnect', async () => {        
        disconnectMethod(socket, data, io);
    });
}
const joinMethod = async (item, socket, io, data) => {
    if(!item) {
        return;
    }    

    try {
        socket.join(item?.roomId);

        socket.data.roomId = item.roomId;
        socket.data.playerId = item.playerId;

        const room = await Room.findById(item?.roomId);

        if(room) {            
            if(room.gameState === 'ready') {
                // console.log('check now');
                
                const finishPlayer = async () => {
                    let thisRoom = await Room.findById(item.roomId);

                    // console.log('check now', item.playerId);

                    if(!thisRoom) {
                        return;
                    }

                    const players = thisRoom.users;

                    if(!players) {
                        return;
                    }

                    // console.log('check now:', players);

                    if(players[0].status !== 'ready' && players[1].status !== 'ready') {
                        // console.log('check now 1');
                        return;
                    } else {   
                        // console.log('check now 2');
                        let newUsers = thisRoom.users.filter(e => e.status !== 'ready');

                        if(newUsers.length === 0) {
                            await Room.findByIdAndDelete(thisRoom._id);

                            return;
                        }
                        
                        const bot = generateRandomBot(thisRoom.questions);
                        
                        newUsers.push( { id: bot.id, name: bot.name, image: bot.image, status: 'finish', score: onlineGameBot(thisRoom.questions) } );
                        
                        await Room.findByIdAndUpdate(item.roomId, { users: newUsers });
                        
                        const players = newUsers.sort((a, b) => b.score - a.score)
                        
                        io.to(item.roomId).emit('player', userJson(players));

                        if(newUsers.length === 2 && newUsers[0].status === 'finish' && newUsers[1].status === 'finish') {
                            // console.log('check now 3');
                            await Room.findByIdAndDelete(item.roomId)

                            io.to(item.roomId).emit('game-waiting', 'finish');
                        }
                    }
                };

                setTimeout(finishPlayer, 10000)
            }
        } else {
            io.to(socket.id).emit('game', 'remove');
        }
    } catch (error) {
        console.log('Error -> Join: ', error.message);            
    }
} 
const playerMethod = async (item, socket, io, event) => {       
    if(!item) {
        return;
    }
    
    try {
        const room = await Room.findById(item.roomId);
        
        if(room) {
            const players = room.users.sort((a, b) => b.score - a.score);
            
            io.to(item.roomId).emit(event, userJson(players));
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
            if(room.users.length !== 2) {
                return;
            }

            const player = room.users.find(e => e.id.equals(item.playerId));
                        
            player.status = 'start';
            
            await room.save();

            if(room.users.length == 2 && room.users[0].status === 'start' && room.users[1].status === 'start') {
                room.gameState = 'start';

                await room.save();

                const finishGame = async () => {
                    if(room) {
                        await Room.findByIdAndUpdate(item.roomId, { gameState: 'finish' }, { new: true });

                        io.to(item.roomId).emit('game-finish', 'finish')
                        // console.log('finished now');
                    }
                };
                const deleteRoom = async () => {
                    if(room) {
                        await Room.findByIdAndDelete(item.roomId);
                        // console.log('deleted now');
                    }
                }
                
                const threeMinAndHalf = (3 * 60 * 1000) + 40000;
                
                setTimeout(finishGame,threeMinAndHalf); 
                setTimeout(deleteRoom, (threeMinAndHalf) + (60 * 1000)); 
            }
            
            // const players = room.users.sort((a, b) => b.score - a.score)
            
            // io.to(item.roomId).emit('player', userJson(players));
            // io.to(item.roomId).emit('game', room? room.gameState: 'remove');
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
            
            const player = room?.users.find(e => e?.id?.toString() === socket.data?.playerId.toString());

            if(player.status === 'finish') {
                return;
            }

            player.status = 'finish';

            await room.save();                        
            
            if(room.users.length === 2 && room.users[0].status === 'finish' && room.users[1].status === 'finish') {
                room.gameState = 'finish';

                await room.save();
            }

            // const players = room.users.sort((a, b) => b.score - a.score);

            if(room.gameState == 'finish') { 
                setTimeout(async () => {
                    await Room.findByIdAndDelete(item.roomId);
                }, 10000);
            }
            
            // io.to(item.roomId).emit('player', userJson(players));
            // io.to(item.roomId).emit('game', room? room.gameState: 'remove');
        } else {
            // io.to(item.roomId).emit('game', 'remove');
        }
    } catch (error) {
        console.log('Error -> Finish: ', error.message);            
    }
}
const gameMethod = async (item, socket, io, event) => {
    if(!item) {
        return;
    }

    try {
        const room = await Room.findById(item.roomId);

        if(room) {
            io.to(item.roomId).emit(event, room?.gameState);
        } else {
            io.to(item.roomId).emit(event, 'remove');
        }
    } catch (error) {
        console.log(`Error -> ${event}:`, error.message);            
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
            
            player.score += item?.score;
            
            await room.save();

            // const players = room.users.sort((a, b) => b.score - a.score)
                                
            // io.to(item.roomId).emit('player', userJson(players));            
        }
    } catch (error) {
        console.log('Error -> Score: ', error.message);            
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
    
            if(room.users?.length === 2) {            
                if(room.gameState === 'start') {
                    let newUsers = room.users.map(e => {
                        if(e?.id?.toString() === (item?.playerId?.toString())) {
                            return {name: e.name, id: e.id, admin: e.admin, image: e.image,score: e.score, status: 'finish'};
                        }    
                        return e;
                    });                    
    
                    room = await Room.updateOne({ _id: item.roomId }, { users: newUsers }, { new: true });

                    // console.log("LLLLEAVE:", newUsers);

                    if(newUsers?.length == 2 && newUsers[0].status === 'finish' && newUsers[1].status === 'finish') {
                        room.gameState = 'finish';
        
                        await room.save();

                        setTimeout(async () => {
                            await Room.findByIdAndDelete(item.roomId);
                        }, 10000)
                    }
                                            
                    // io.to(item.roomId).emit('player', userJson(players));                
                    // io.to(item.roomId).emit('game', room? room.gameState: 'remove');
                    return;
                }
    
                let newUsers = room.users.filter(e => !e?.id?.equals(item?.playerId));

                // console.log("LLLLEAVE: 2", newUsers);
    
                const bot = generateRandomBot(room.questions);
    
                newUsers.push( { id: bot.id, name: bot.name, image: bot.image, status: 'finish', score: onlineGameBot(room.questions) } );
    
                room = await Room.updateOne({ _id: item.roomId }, { users: newUsers }, { new: true });
    
                // const players = newUsers?.sort((a, b) => b.score - a.score)

                // console.log("LLLLEAVE: 3", newUsers);
    
                if((room.users.length == 2 && room.users[0].status === 'finish' && room.users[1].status === 'finish') ||
                    (newUsers.length == 2 && newUsers[0].status === 'finish' && newUsers[1].status === 'finish')) {
                    room.gameState = 'finish';
    
                    await room.save();

                    setTimeout(async () => {
                        await Room.findByIdAndDelete(item.roomId);
                    }, 10000);
                }
                                        
                // io.to(item.roomId).emit('player', userJson(players));                
                // io.to(item.roomId).emit('game', room? room.gameState: 'remove');
            } else {
                await Room.findByIdAndUpdate(item.roomId, { gameState: 'finish' });

                setTimeout(async () => {
                    await Room.findByIdAndDelete(item.roomId);
                }, 10000)
    
                // io.to(item?.roomId).emit('game', 'finish');
            }
        }
    } catch (error) {
        console.log('Error -> Leave: ', error.message);
    }
}
const joinMethod2 = async (item, socket, io, data) => {
    if(!item) {
        return;
    }

    try {
        socket.join(item?.roomId);

        socket.data.roomId = item.roomId;
        socket.data.playerId = item.playerId;

        await joinToRoom(item.playerId, item.roomId);
    } catch (error) {
        console.log('Error -> Join: ', error.message);            
    }
} 
const playerMethod2 = async (item, socket, io, event) => {     
    if(!item) {
        return;
    }
    
    try {                    
        io.to(item.roomId).emit(event, getRoomPlayers(item.roomId));
    } catch (error) {
        console.log('Error -> Player: ', error.message);            
    }
}
const startMethod2 = async (item, socket, io) => {           
    if(!item) {
        return;
    }

    try {
        startGame(item.roomId)
        
        const finishGame = async () => {
            io.to(item.roomId).emit('game2-finish', 'finish')
        };

        const threeMinAndHalf = (3 * 60 * 1000) + 40000;

        setTimeout(finishGame,threeMinAndHalf); 
    } catch (error) {
        console.log('Error -> Start: ', error.message);            
    }
}
const finishMethod2 = async (item, socket, io, data) => {
    if(!item) {
        return;
    }

    try {
        finishPlayer(item.playerId,item.roomId)
    } catch (error) {
        console.log('Error -> Start: ', error.message);            
    }
}
const gameMethod2 = async (item, socket, io, event) => {
    console.log("GAME-ITEM",item);
    if(!item) {
        return;
    }

    try {
        io.to(item.roomId).emit(event, getRoomGameState(item.roomId));
    } catch (error) {
        console.log('Error -> Game: ', error.message);            
    }
}
const scoreMethod2 = async (item, socket, io) => {
    if(!item) {
        return;
    }

    try {
        editScore(item.playerId,item.roomId,item.score)
    } catch (error) {
        console.log('Error -> Start: ', error.message);            
    }
}
const leaveMethod2 = async (item, socket, io, data) => {
    if(!item) {
        return;
    }

    
    try {
        leaveRoom(item.playerId, item.roomId)

        socket.leave(item.roomId);
    } catch (error) {
        console.log('Error -> Leave: ', error.message);
    }
}
const disconnectMethod = async (socket, data, io) => {
    console.log('user disconnected now');

    socket.leave(socket.data.roomId)
}

module.exports = game