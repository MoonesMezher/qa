const { generateRandomBot, onlineGameBot } = require("../bot/onllineGameBot");
const Room = require("../database/models/Room");
const userJson = require("../helpers/handleUserJson");
const userJsonToGroupGame = require("../helpers/handleUserJsonToGroupGame");
// const debounce = require('lodash.debounce');

let rooms = [];

const joinToRoom = (player, roomId) => {
    const isExist = rooms.find(e => e.roomId === roomId);

    if(isExist) {
        isExist.players.push({ playerId: player, state: 'ready', admin: false, score: 0 });
    } else {
        rooms.push({roomId: roomId, state: 'waiting' ,players:[{ playerId: player, state: 'ready', admin: true, score: 0 }]});
    }
}

const leaveRoom = (player, roomId) => {
    const isExist = rooms.find(e => e.roomId === roomId);

    isExist.players = isExist.players.filter(e => e.playerId.toString() !== player.toString());
}

const removeRoom = (roomId) => {
    rooms = rooms.filter(e => e.roomId.toString() !== roomId.toString());
}

const editScore = (player, roomId, score) => {
    const isExist = rooms.find(e => e.roomId === roomId);

    const player = isExist.players.find(e => e.playerId.toString() === player.toString());

    player.score += score;
}

const finishPlayer = (player, roomId) => {
    const isExist = rooms.find(e => e.roomId === roomId);

    const player = isExist.players.find(e => e.playerId.toString() === player.toString());

    player.state = 'finish';

    if(isExist.players.find(e => e.state !== 'finish')) {
        isExist.state = 'finish'
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

        // const room = await Room.findById(item?.roomId);

        // if(room) {            
        //     // io.to(item.roomId).emit('player2', userJsonToGroupGame(room?.users));
        //     // io.to(item.roomId).emit('game2', room?.gameState);
        // } else {
        //     // io.to(socket.id).emit('game2', 'remove');
        // }
    } catch (error) {
        console.log('Error -> Join: ', error.message);            
    }
} 
const playerMethod2 = async (item, socket, io, event) => {     
    if(!item) {
        return;
    }
    
    try {
        const room = await Room.findById(item.roomId);
        
        if(room) {
            const players = room.users.sort((a, b) => b.score - a.score);
            
            io.to(item.roomId).emit(event, userJsonToGroupGame(players));
        }
    } catch (error) {
        console.log('Error -> Player: ', error.message);            
    }
}
const startMethod2 = async (item, socket, io) => {           
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

            console.log("START-GAME:",room.gameState);
            
            // io.to(item.roomId).emit('player2', userJsonToGroupGame(players));
            // io.to(item.roomId).emit('game2', room.gameState);

            const finishGame = async () => {
                if(room) {
                    await Room.findByIdAndUpdate(item.roomId, { gameState: 'finish' }, { new: true });

                    io.to(item.roomId).emit('game2-finish', 'finish')
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
    } catch (error) {
        console.log('Error -> Start: ', error.message);            
    }
}
const finishMethod2 = async (item, socket, io, data) => {
    // console.log("FINISH-ITEM",item);
    
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

            // console.log("#@#:", room.users, socket.data.roomId)

            // console.log();

            if(!room.users.find(e => e.status !== 'finish')) {                
                room.gameState = 'finish';

                await room.save();            

                // io.to(socket.data.roomId).emit('game2-finish', 'finish');
                io.to(socket.data.roomId).emit('game2-finish', 'finish');
                
                setTimeout(async () => {
                    await Room.findByIdAndDelete(socket.data.roomId);
                }, (1.5 * 60 * 1000));
            }
            
            // const players = room.users.sort((a, b) => b.score - a.score);
            // await room.save();            
            // io.to(socket.data.roomId).emit('player2-finish', userJsonToGroupGame(players));
        }
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
        const room = await Room.findById(item.roomId);

        setTimeout(() => {
            if(room) {    
                io.to(item.roomId).emit(event, room?.gameState);
            } else {
                io.to(item.roomId).emit(event, 'remove');
            }
        }, 1000)

    } catch (error) {
        console.log('Error -> Game: ', error.message);            
    }
}
const scoreMethod2 = async (item, socket, io) => {
    // console.log("SCORE-ITEM",item);

    if(!item) {
        return;
    }

    try {
        const room = await Room.findById(item.roomId);
        
        if(room) {
            const player = room.users.find(e => e.id.toString() === item.playerId.toString());
            
            player.score += item.score;
            
            await room.save();

            // const players = room.users.sort((a, b) => b.score - a.score)

            // console.log("SCORE-GAME:",room.gameState);
                                
            // io.to(item.roomId).emit('player2', userJsonToGroupGame(players));
            // io.to(socket.data.roomId).emit('game2', room?.gameState);
        }
    } catch (error) {
        console.log('Error -> Start: ', error.message);            
    }
}
const leaveMethod2 = async (item, socket, io, data) => {
    if(!item) {
        return;
    }

    socket.leave(item.roomId);

    let room = await Room.findById(item.roomId);

    try {
        if(room) {
            const theSameUser = room?.users?.find(e => e?.id?.toString() === item.playerId.toString())
        
            if(!theSameUser) {
                return;
            }
    
            if(room.gameState === 'start') {
                let newUsers = room.users.map(e => {
                    if(e?.id?.toString() === (item?.playerId.toString())) {
                        return { id: e.id, name: e.name, image: e.image, status: 'finish', admin: e.admin, score: e.score }
                    }

                    return e;
                });

                room = await Room.updateOne({ _id: item.roomId }, { users: newUsers }, { new: true });

                // console.log('LLLL,', room.users);

                if(room.users.filter(e => e.status === 'finish').length === room.users?.length) {
                    room.gameState = 'finish' ;

                    await room.save();

                    // setTimeout(async () => {
                    //     await Room.findByIdAndDelete(item.roomId);
                    // }, 2000);
                }
                                        
                // io.to(item.roomId).emit('player2', userJsonToGroupGame(players));                
                // io.to(item.roomId).emit('game2', room.gameState);    
                return;
            } else {
                let newUsers = room.users.filter(e => !e?.id?.equals(item?.playerId));

                room = await Room.updateOne({ _id: item.roomId }, { users: newUsers }, { new: true });

                // const players = newUsers.sort((a, b) => b.score - a.score);

                // io.to(item.roomId).emit('player2', userJsonToGroupGame(players));                
                // io.to(item.roomId).emit('game2', room.gameState);
            }    
        }
    } catch (error) {
        console.log('Error -> Leave: ', error.message);
    }
}
const disconnectMethod = async (socket, data, io) => {
    console.log('user disconnected now');

    socket.leave(socket.data.roomId)
}

module.exports = game