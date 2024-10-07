const { generateRandomBot, onlineGameBot } = require("../bot/onllineGameBot");
const Room = require("../database/models/Room");
const userJson = require("../helpers/handleUserJson");
const userJsonToGroupGame = require("../helpers/handleUserJsonToGroupGame");
// const debounce = require('lodash.debounce');

let rooms = [];

const joinToRoom = async (player, roomId) => {
    const isExist = rooms.find(e => e.roomId === roomId);

    // console.log("#############JOIN##############", roomId);

    const room = await Room.findOne({code: roomId});

    if(room) {
        const newPlayer = room.users.find(e => e.id.toString() === player)

        // console.log("######PLAYER#######", newPlayer)

        if(newPlayer) {
            if(isExist) {
                if(isExist.players.find(e => e.id === player)) {
                    return;
                }
                isExist.players.push({ id: player, status: 'ready', admin: false, score: 0, image: newPlayer.image, name: newPlayer.name });
            } else {
                rooms.push({roomId: roomId, gameState: 'waiting' ,players:[{ id: player, status: 'ready', admin: true, score: 0, image: newPlayer.image, name: newPlayer.name }]});
            }
        }
    }
}

const leaveRoom = async (player, roomId, io, socket) => {
    const isExist = rooms.find(e => e.roomId === roomId);

    // console.log("###########LEAVE###############", isExist, 'roomId', roomId);

    if(isExist) {
        const playerr = isExist.players.find(e => e.id === player);

        // console.log('########PLAYER########', playerr);

        if(playerr) {
            playerr.status = 'finish'
    
            if(playerr.admin && isExist.gameState === 'waiting') {
                isExist.gameState = 'remove';
                removeRoom(roomId);
                await Room.deleteOne({code:roomId});
                socket.leave(roomId);
                io.to(roomId).emit('game2-waiting', 'remove');          
            }

            // console.log("########AFTER LEAVE#######",isExist)
        }
    }
}

const removeRoom = (roomId) => {
    // console.log("BEFORE",rooms)
    rooms = rooms.filter(e => e.roomId !== roomId);
    // console.log("AFTER",rooms)
}

const editScore = (player, roomId, score) => {
    const isExist = rooms.find(e => e.roomId === roomId);

    // console.log('#############SCORE################', isExist, 'roomId:',roomId);

    if(isExist) {
        const playerr = isExist.players.find(e => e.id === player);

        if(playerr) {
            playerr.score += score;
        }
    }
}

const finishPlayer = (player, roomId, io) => {
    const isExist = rooms.find(e => e.roomId === roomId);
    
    // console.log("#########FINISH PLAYER########", isExist, "roomId:", roomId);

    if(isExist) {
        const playerr = isExist.players.find(e => e.id === player);

        if(playerr) {
            playerr.status = 'finish';
        }
        
        if(!isExist.players.find(e => e.status !== 'finish')) {
            isExist.gameState = 'finish'
    
            // io.to(roomId).emit('game2-finish', 'finish');
    
            setTimeout(() => {
                removeRoom(roomId)
            }, 10000)
        }
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

    // console.log("###############AFTER GET GAMESTATE################",room)

    if(room) {
        if(room.gameState === 'finish') {
            setTimeout(() => {
                removeRoom(roomId)
            }, 10000)
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

const checkFromBalance = (roomId) => {
    const isExist = rooms.find(e => e.roomId === roomId);

    if(isExist) {
        if(isExist?.players && isExist?.players.length > 0) {
            const newPlayers = []

            isExist.players.map((e, i) => {
                if(newPlayers.find(p => p.score === e.score)) {
                    let value = 1;
                    while(newPlayers.find(p => p.score === (e.score + value))) {
                        value++;
                    }
                    e.score = e.score + value;
                }
                newPlayers.push(e)
            })

            isExist.players = newPlayers;
        }
    }
}

const game = async (io, socket, data) => {
    socket.on('join', (item) => {        
        joinMethod(item, socket, io, data);
    });

    socket.on('player-waiting', async (item) => {
        playerMethod(item, socket, io, 'player-waiting');
    })

    socket.on('player-start', async (item) => {
        playerMethod(item, socket, io, 'player-start');
    })

    socket.on('player-finish', async (item) => {
        playerMethod(item, socket, io, 'player-finish');
    })

    socket.on('startPlayer', async (item) => {
        startMethod(item, socket, io);
    })

    socket.on('finishPlayer', async (item) => {
        finishMethod(item, socket, io, data);
    })

    socket.on('game-waiting', async (item) => {
        gameMethod(item, socket, io, 'game-waiting');
    });

    socket.on('game-start', async (item) => {
        gameMethod(item, socket, io, 'game-start');
    });

    socket.on('game-finish', async (item) => {
        gameMethod(item, socket, io, 'game-finish');
    });

    socket.on('score', async (item) => {
        scoreMethod(item, socket, io);
    });

    socket.on('leave', async (item) => {
        leaveMethod(item, socket, io, data);
    });

    // GROUP

    socket.on('join2', async (item) => {        
        console.log("join2");
        await joinMethod2(item, socket, io, data);
    });

    socket.on('player2-waiting', async (item) => {
        console.log("player2-waiting");

        playerMethod2(item, socket, io, 'player2-waiting');
    })

    socket.on('player2-start', async (item) => {
        console.log("player2-start");

        playerMethod2(item, socket, io, 'player2-start');
    })

    socket.on('player2-finish', async (item) => {
        console.log("player2-finish");

        playerMethod2(item, socket, io, 'player2-finish');
    })

    socket.on('startPlayer2', async (item) => {
        console.log("startPlayer2");

        startMethod2(item, socket, io);
    })

    socket.on('finishPlayer2', async (item) => {
        console.log("finishPlayer2");

        finishMethod2(item, socket, io, data);
    })

    socket.on('game2-waiting', async (item) => {
        console.log("game2-waiting")
        gameMethod2(item, socket, io, 'game2-waiting');
    });

    socket.on('game2-start', async (item) => {
        console.log("game2-start")
        gameMethod2(item, socket, io, 'game2-start');
    });

    socket.on('game2-finish', async (item) => {
        console.log("game2-finish")
        gameMethod2(item, socket, io, 'game2-finish');
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

        const room = await Room.findOne({code: item?.roomId});

        if(room) {            
            if(room.gameState === 'ready') {
                // console.log('check now');
                
                const finishPlayer = async () => {
                    let thisRoom = await Room.findOne({code:item.roomId});

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
                            await Room.deleteOne({code: item.roomId})

                            return;
                        }
                        
                        const bot = generateRandomBot(thisRoom.questions);
                        
                        newUsers.push( { id: bot.id, name: bot.name, image: bot.image, status: 'finish', score: onlineGameBot(thisRoom.questions) } );
                        
                        await Room.updateOne({code:item.roomId}, { users: newUsers });
                        
                        const players = newUsers.sort((a, b) => b.score - a.score)
                        
                        io.to(item.roomId).emit('player', userJson(players));

                        if(newUsers.length === 2 && newUsers[0].status === 'finish' && newUsers[1].status === 'finish') {
                            // console.log('check now 3');
                            await Room.deleteOne({code: item.roomId})

                            io.to(item.roomId).emit('game-waiting', 'finish');
                        }
                    }
                };

                setTimeout(finishPlayer, 25000)
            }

            setTimeout(async () => {
                const thisRoom2 = await Room.findOne({code: item.roomId});
                
                if(!thisRoom2) {
                    // console.log("@#", 1);
                    return;
                }

                console.log(thisRoom2.gameState, thisRoom2);

                if(thisRoom2.gameState !== 'waiting') {
                    // console.log("@#", 2)
                    return;
                }

                if(thisRoom2.users.length !== 1) {
                    // console.log("@#", 3)
                    return;
                }

                // console.log("@#", 4)

                let newUsers = thisRoom2.users;
                
                const bot = generateRandomBot(thisRoom2.questions);
                
                newUsers.push( { id: bot.id, name: bot.name, image: bot.image, status: 'finish', score: onlineGameBot(thisRoom2.questions) } );
                
                await Room.updateOne({code:item.roomId}, { users: newUsers, gameState: 'start' });

                newUsers[0].status = 'start';
                
                const players = newUsers.sort((a, b) => b.score - a.score)

                // console.log("@#", 5, players, item.roomId)

                io.to(item.roomId).emit('game-waiting', 'start');
                io.to(item.roomId).emit('player-waiting', userJson(players));
            },30000)
        } else {
            // io.to(socket.id).emit('game', 'remove');
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
        const room = await Room.findOne({code: item.roomId});
        
        if(room) {
            const players = room.users.sort((a, b) => b.score - a.score);

            if(event === 'player-finish' && (players[0].score === players[1].score)) {
                players[0].score = players[0].score + 1;

                await room.save()
            }
            
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
        const room = await Room.findOne({code: item.roomId});

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
                        await Room.updateOne({code: item.roomId}, { gameState: 'finish' }, { new: true });

                        io.to(item.roomId).emit('game-finish', 'finish')
                        // console.log('finished now');
                    }
                };
                const deleteRoom = async () => {
                    if(room) {
                        await Room.deleteOne({code: item.roomId});
                        // console.log('deleted now');
                    }
                }
                
                const threeMinAndHalf = (5 * 60 * 1000);
                
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
        const room = await Room.findOne({code: item.roomId});

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
                    await Room.deleteOne({code: item.roomId});
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
        const room = await Room.findOne({code: item.roomId});

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
        const room = await Room.findOne({code: item.roomId});
        
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

    let room = await Room.findOne({code: item.roomId});

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
    
                    room = await Room.updateOne({ code: item.roomId }, { users: newUsers }, { new: true });

                    // console.log("LLLLEAVE:", newUsers);

                    if(newUsers?.length == 2 && newUsers[0].status === 'finish' && newUsers[1].status === 'finish') {
                        room.gameState = 'finish';
        
                        await room.save();

                        setTimeout(async () => {
                            await Room.deleteOne({code: item.roomId});
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
    
                room = await Room.updateOne({ code: item.roomId }, { users: newUsers }, { new: true });
    
                // const players = newUsers?.sort((a, b) => b.score - a.score)

                // console.log("LLLLEAVE: 3", newUsers);
    
                if((room.users.length == 2 && room.users[0].status === 'finish' && room.users[1].status === 'finish') ||
                    (newUsers.length == 2 && newUsers[0].status === 'finish' && newUsers[1].status === 'finish')) {
                    room.gameState = 'finish';
    
                    await room.save();

                    setTimeout(async () => {
                        await Room.deleteOne({code: item.roomId});
                    }, 10000);
                }
                                        
                // io.to(item.roomId).emit('player', userJson(players));                
                // io.to(item.roomId).emit('game', room? room.gameState: 'remove');
            } else {
                await Room.updateOne({code: item.roomId}, { gameState: 'finish' });

                setTimeout(async () => {
                    await Room.deleteOne({code: item.roomId});
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
        if(event === 'player2-finish') {
            checkFromBalance(item.roomId);
        }        
        
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
        // console.log("Start ->#", item.roomId);
        startGame(item.roomId);

        io.to(item.roomId).emit('roomId2', item?.roomId);        
        
        const finishGame = async () => {
            io.to(item.roomId).emit('game2-finish', 'finish')
        };

        const threeMinAndHalf = (5 * 60 * 1000);

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
        finishPlayer(item.playerId,item.roomId, io)
    } catch (error) {
        console.log('Error -> Finish: ', error.message);            
    }
}
const gameMethod2 = async (item, socket, io, event) => {
    // console.log("GAME-ITEM",item);
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
        console.log('Error -> Score: ', error.message);            
    }
}
const leaveMethod2 = async (item, socket, io, data) => {
    if(!item) {
        return;
    }

    
    try {
        leaveRoom(item.playerId, item.roomId, io, socket)
    } catch (error) {
        console.log('Error -> Leave: ', error.message);
    }
}
const disconnectMethod = async (socket, data, io) => {
    console.log('user disconnected now');

    socket.leave(socket.data.roomId)
}

module.exports = game