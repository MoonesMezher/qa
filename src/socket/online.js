const { generateRandomBot, onlineGameBot } = require("../bot/onllineGameBot");
const Room = require("../database/models/Room");
const userJson = require("../helpers/handleUserJson");
const userJsonToGroupGame = require("../helpers/handleUserJsonToGroupGame");
// const debounce = require('lodash.debounce');

const game = async (io, socket, data) => {
    socket.on('join', (item) => {
        console.log("join");
        
        joinMethod(item, socket, io, data);
    });

    socket.on('player', async (item) => {
        console.log("player");

        playerMethod(item, socket, io);
    })

    socket.on('startPlayer', async (item) => {
        console.log("start");

        startMethod(item, socket, io);
    })

    socket.on('finishPlayer', async (item) => {
        console.log("finish");

        finishMethod(item, socket, io, data);
    })

    socket.on('game', async (item) => {
        console.log("game");

        gameMethod(item, socket, io);
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

    socket.on('player2', async (item) => {
        console.log("player2");
        playerMethod2(item, socket, io);
    })

    socket.on('startPlayer2', async (item) => {
        console.log("startPlayer2");
        startMethod2(item, socket, io);
    })

    socket.on('finishPlayer2', async (item) => {
        console.log("finishPlayer2");
        finishMethod2(item, socket, io, data);
    })

    socket.on('game2', async (item) => {
        console.log("game2")
        gameMethod2(item, socket, io);
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
        console.log("disconnect")
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

                            io.to(item.roomId).emit('game', 'finish');
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

                        io.to(item.roomId).emit('game', 'finish')
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
            
            const players = room.users.sort((a, b) => b.score - a.score)
            
            io.to(item.roomId).emit('player', userJson(players));
            io.to(item.roomId).emit('game', room? room.gameState: 'remove');
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

            const players = room.users.sort((a, b) => b.score - a.score);

            if(room.gameState == 'finish') { 
                setTimeout(async () => {
                    await Room.findByIdAndDelete(item.roomId);
                }, 10000);
            }
            
            io.to(item.roomId).emit('player', userJson(players));
            io.to(item.roomId).emit('game', room? room.gameState: 'remove');
        } else {
            io.to(item.roomId).emit('game', 'remove');
        }
    } catch (error) {
        console.log('Error -> Finish: ', error.message);            
    }
}
const gameMethod = async (item, socket, io) => {
    if(!item) {
        return;
    }

    try {
        const room = await Room.findById(item.roomId);

        if(room) {
            io.to(item.roomId).emit('game', room?.gameState);
        } else {
            io.to(item.roomId).emit('game', 'remove');
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
            
            player.score += item?.score;
            
            await room.save();

            const players = room.users.sort((a, b) => b.score - a.score)
                                
            io.to(item.roomId).emit('player', userJson(players));            
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
    
            if(room.users.length === 2) {            
                if(room.gameState === 'start') {
                    let newUsers = room.users.map(e => {
                        if(e?.id?.toString() === (item?.playerId?.toString())) {
                            return {name: e.name, id: e.id, admin: e.admin, image: e.image,score: e.score, status: 'finish'};
                        }    
                        return e;
                    });
    
                    room = await Room.updateOne({ _id: item.roomId }, { users: newUsers }, { new: true });

                    if(newUsers.length == 2 && newUsers[0].status === 'finish' && newUsers[1].status === 'finish') {
                        room.gameState = 'finish';
        
                        await room.save();

                        setTimeout(async () => {
                            await Room.findByIdAndDelete(item.roomId);
                        }, 10000)
                    }
                                            
                    io.to(item.roomId).emit('player', userJson(players));                
                    io.to(item.roomId).emit('game', room? room.gameState: 'remove');
                    return;
                }
    
                let newUsers = room.users.filter(e => !e?.id?.equals(item?.playerId));
    
                const bot = generateRandomBot(room.questions);
    
                newUsers.push( { id: bot.id, name: bot.name, image: bot.image, status: 'finish', score: onlineGameBot(room.questions) } );
    
                room = await Room.updateOne({ _id: item.roomId }, { users: newUsers }, { new: true });
    
                const players = newUsers.sort((a, b) => b.score - a.score)
    
                if((room.users.length == 2 && room.users[0].status === 'finish' && room.users[1].status === 'finish') ||
                    (newUsers.length == 2 && newUsers[0].status === 'finish' && newUsers[1].status === 'finish')) {
                    room.gameState = 'finish';
    
                    await room.save();

                    setTimeout(async () => {
                        await Room.findByIdAndDelete(item.roomId);
                    }, 10000);
                }
                                        
                io.to(item.roomId).emit('player', userJson(players));                
                io.to(item.roomId).emit('game', room? room.gameState: 'remove');
            } else {
                await Room.findByIdAndUpdate(item.roomId, { gameState: 'finish' });

                setTimeout(async () => {
                    await Room.findByIdAndDelete(item.roomId);
                }, 10000)
    
                io.to(item?.roomId).emit('game', 'finish');
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
        socket.join(item.roomId);

        socket.data.roomId = item.roomId;

        const room = await Room.findById(socket.data.roomId);

        if(room) {
            io.to(socket.data.roomId).emit('player2', userJsonToGroupGame(room?.users));
            io.to(socket.data.roomId).emit('game2', room?.gameState);
        } else {
            io.to(socket.id).emit('game2', 'remove');
        }
    } catch (error) {
        console.log('Error -> Join: ', error.message);            
    }
} 
const playerMethod2 = async (item, socket, io) => {     
    if(!item) {
        return;
    }
    
    try {
        const room = await Room.findById(socket.data.roomId);
        
        if(room) {
            const players = room.users.sort((a, b) => b.score - a.score);
            
            io.to(socket.data.roomId).emit('player2', userJsonToGroupGame(players));
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
        const room = await Room.findById(socket.data.roomId);

        if(room) {            
            const player = room.users.find(e => e.id.equals(item.playerId));

            if(!player.admin || room.users.length <= 2) {
                return;
            }
            
            room.gameState = 'start';
            
            await room.save();
            
            const players = room.users.sort((a, b) => b.score - a.score)
            
            io.to(socket.data.roomId).emit('player2', userJsonToGroupGame(players));
            io.to(socket.data.roomId).emit('game2', room.gameState);

            const finishGame = async () => {
                if(room) {
                    await Room.findByIdAndUpdate(socket.data.roomId, { gameState: 'finish' }, { new: true });

                    io.to(socket.data.roomId).emit('game2', 'finish')
                    // console.log('finished now');
                }
            };

            const deleteRoom = async () => {
                if(room) {
                    await Room.findByIdAndDelete(socket.data.roomId);
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
    if(!item) {
        return;
    }

    try {
        const room = await Room.findById(socket.data.roomId);

        if(room) {
            const player = room?.users.find(e => e?.id?.toString() === item?.playerId.toString());

            player.status = 'finish';
            
            await room.save();

            if(!room.users.find(e => e.status !== 'finish')) {                
                room.gameState = 'finish';

                await room.save();            

                io.to(socket.data.roomId).emit('game2', 'finish');

                setTimeout(async () => {
                    await Room.findByIdAndDelete(socket.data.roomId);
                }, (1.5 * 60 * 1000));
            }

            await room.save();            

            const players = room.users.sort((a, b) => b.score - a.score);

            io.to(socket.data.roomId).emit('player2', userJsonToGroupGame(players));
        }
    } catch (error) {
        console.log('Error -> Start: ', error.message);            
    }
}
const gameMethod2 = async (item, socket, io) => {
    if(!item) {
        return;
    }

    try {
        const room = await Room.findById(socket.data.roomId);

        if(room) {
            console.log('GAME: ',room.gameState);

            io.to(socket.data.roomId).emit('game2', room.gameState);

            // setInterval(async () => {
            //     if(!room) {
            //         io.to(item.roomId).emit('game2', 'remove');
            //         return;
            //     }

            //     if(!room.users.find(e => e.status !== 'finish')) {                
            //         room.gameState = 'finish';
    
            //         await room.save();            
    
            //         io.to(item.roomId).emit('game2', 'finish');
    
            //         setTimeout(async () => {
            //             await Room.findByIdAndDelete(item.roomId);
            //         }, 2000);
            //     }
            // }, 5000);
        }
    } catch (error) {
        console.log('Error -> Game: ', error.message);            
    }
}
const scoreMethod2 = async (item, socket, io) => {
    if(!item) {
        return;
    }

    try {
        const room = await Room.findById(socket.data.roomId);
        
        if(room) {
            const player = room.users.find(e => e.id.toString() === item.playerId.toString());
            
            player.score += item.score;
            
            await room.save();

            const players = room.users.sort((a, b) => b.score - a.score)
                                
            io.to(socket.data.roomId).emit('player2', userJsonToGroupGame(players));
            io.to(socket.data.roomId).emit('game2', room?.gameState);
        }
    } catch (error) {
        console.log('Error -> Start: ', error.message);            
    }
}
const leaveMethod2 = async (item, socket, io, data) => {
    if(!item) {
        return;
    }

    let room = await Room.findById(socket.data.roomId);

    try {
        if(room) {
            const theSameUser = room?.users?.find(e => e?.id?.toString() === item.playerId.toString())
        
            if(!theSameUser) {
                return;
            }
    
            if(room.gameState === 'start') {
                let newUsers = room.users.map(e => {
                    if(e?.id?.toString() === (item?.playerId?.toString())) {
                        return { id: e.id, name: e.name, image: e.image, status: 'finish', admin: e.admin, score: e.score }
                    }

                    return e;
                });

                room = await Room.updateOne({ _id: socket.data.roomId }, { users: newUsers }, { new: true });

                let count = 0;

                for (let index = 0; index < room.users.length; index++) {
                    if(room.users[index].status === 'finish') {
                        count+=1;
                    } else {
                        break;
                    }               
                }

                if(count === room.users?.length) {
                    room.gameState = 'finish' ;

                    await room.save();

                    setTimeout(async () => {
                        await Room.findByIdAndDelete(socket.data.roomId);
                    }, 2000);
                }
                                        
                io.to(socket.data.roomId).emit('player2', userJsonToGroupGame(players));                
                io.to(socket.data.roomId).emit('game2', room.gameState);    
                socket.leave(socket.data.roomId);
                return;
            } else {
                let newUsers = room.users.filter(e => !e?.id?.equals(item?.playerId));

                room = await Room.updateOne({ _id: socket.data.roomId }, { users: newUsers }, { new: true });

                const players = newUsers.sort((a, b) => b.score - a.score)

                
                io.to(socket.data.roomId).emit('player2', userJsonToGroupGame(players));                
                io.to(socket.data.roomId).emit('game2', room.gameState);
                socket.leave(socket.data.roomId);
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