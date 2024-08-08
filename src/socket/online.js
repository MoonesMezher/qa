const { generateRandomBot, onlineGameBot } = require("../bot/onllineGameBot");
const Room = require("../database/models/Room");
const userJson = require("../helpers/handleUserJson");
const userJsonToGroupGame = require("../helpers/handleUserJsonToGroupGame");
// const debounce = require('lodash.debounce');

const game = async (io, socket, data) => {
    socket.on('join', (item) => {
        joinMethod(item, socket, io, data);
    });

    socket.on('player', async (item) => {
        playerMethod(item, socket, io);
    })

    socket.on('startPlayer', async (item) => {
        startMethod(item, socket, io);
    })

    socket.on('finishPlayer', async (item) => {
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

    socket.on('join2', (item) => {        
        joinMethod2(item, socket, io, data);
    });

    socket.on('player2', async (item) => {
        playerMethod2(item, socket, io);
    })

    socket.on('startPlayer2', async (item) => {
        startMethod2(item, socket, io);
    })

    socket.on('finishPlayer2', async (item) => {
        finishMethod2(item, socket, io, data);
    })

    socket.on('game2', async (item) => {
        gameMethod2(item, socket, io);
    });

    socket.on('score2', async (item) => {
        scoreMethod2(item, socket, io);
    });

    socket.on('leave2', async (item) => {
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

        const room = await Room.findById(item?.roomId);

        if(room) {            
            const player = room.users.find(e => e.id.toString() === item.playerId.toString());

            if(player && room.gameState === 'ready') {
                console.log('check now');
                
                const finishPlayer = async () => {
                    let thisRoom = await Room.findById(item.roomId);

                    console.log('check now', item.playerId);

                    if(!thisRoom) {
                        return;
                    }

                    const players = thisRoom.users;

                    if(!players) {
                        return;
                    }

                    console.log('check now:', players);

                    if(players[0].status !== 'ready' && players[1].status !== 'ready') {
                        console.log('check now 1');
                        return;
                    } else {   
                        console.log('check now 2');
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
                            console.log('check now 3');
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
                        room.users[0].status = 'finish';
                        room.users[1].status = 'finish';
                        room.gameState = 'finish'

                        await room.save();

                        // await Room.findByIdAndUpdate(item.roomId, { gameState: 'finish' });

                        io.to(item.roomId).emit('game', 'finish')
                        // console.log('finished now');
                    }
                };
                const deleteRoom = async () => {
                    if(room) {
                        await Room.findByIdAndDelete(item.roomId)
                        // console.log('deleted now');
                    }
                }
                
                const threeMinAndHalf = (3 * 60 * 1000) + 40000;
                
                setTimeout(finishGame,threeMinAndHalf); 
                setTimeout(deleteRoom, (threeMinAndHalf) + 2000); 
            }
            
            const players = room.users.sort((a, b) => b.score - a.score)
            
            io.to(item.roomId).emit('player', userJson(players));
            io.to(item.roomId).emit('game', room.gameState);
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
            const player = room?.users.find(e => e?.id?.toString() === item?.playerId.toString());

            player.status = 'finish';

            await room.save();            

            console.log("@#", room.users);
            
            
            if(room.users.length === 2 && room.users[0].status === 'finish' && room.users[1].status === 'finish') {
                room.gameState = 'finish';

                await room.save();
            }

            const players = room.users.sort((a, b) => b.score - a.score);

            if(room.gameState == 'finish') { 
                setTimeout(async () => {
                    await Room.findByIdAndDelete(item.roomId);
                }, 2000);
            }
            
            io.to(item.roomId).emit('player', userJson(players));
            io.to(item.roomId).emit('game', room?.gameState);
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
            io.to(item.roomId).emit('game', room.gameState);
        }
    } catch (error) {
        console.log('Error -> Score: ', error.message);            
    }
}
const leaveMethod = async (item, socket, io, data) => {
    console.log('leave');
    
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
                        }, 5000)
                    }
                                            
                    io.to(item.roomId).emit('player', userJson(players));                
                    io.to(item.roomId).emit('game', room?.gameState);    
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
                    }, 2000)
                }
                                        
                io.to(item.roomId).emit('player', userJson(players));                
                io.to(item.roomId).emit('game', room.gameState);
            } else {
                await Room.findByIdAndUpdate(item.roomId, { gameState: 'finish' });

                setTimeout(async () => {
                    await Room.findByIdAndDelete(item.roomId);
                }, 2000)
    
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

    data.push({ playerId: item.playerId, roomId: item.roomId, socketId: socket.id, terminated: true })

    try {
        socket.join(item.roomId);

        const room = await Room.findById(item.roomId);

        if(room) {
            io.to(item.roomId).emit('player2', userJsonToGroupGame(room?.users));
            io.to(item.roomId).emit('game2', room.gameState);
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
        const room = await Room.findById(item.roomId);
        
        if(room) {
            const players = room.users.sort((a, b) => b.score - a.score);
            
            io.to(item.roomId).emit('player2', userJsonToGroupGame(players));
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
            
            io.to(item.roomId).emit('player2', userJsonToGroupGame(players));
            io.to(item.roomId).emit('game2', room.gameState);
            const finishGame = async () => {
                const thisRoom = await Room.findById(item.roomId);

                if(thisRoom) {
                    await Room.findByIdAndUpdate(thisRoom._id, { gameState: 'finish' });

                    console.log(item.roomId, thisRoom._id, room._id);

                    io.to(item.roomId).emit('game2', 'finish');

                    console.log('finished now');
                }
            };
            const deleteRoom = async () => {
                if(room) {
                    await Room.findByIdAndDelete(room.id)
                    console.log('deleted now');
                }
            }
            
            const threeMinAndHalf = (3 * 60 * 1000) + 40000;
            
            setTimeout(finishGame,threeMinAndHalf); 
            setTimeout(deleteRoom, (threeMinAndHalf) + 30000);
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
        const room = await Room.findById(item.roomId);

        if(room) {
            const player = room?.users.find(e => e?.id?.toString() === item?.playerId.toString());

            player.status = 'finish';
            
            await room.save();

            let count = 0;

            for (let index = 0; index < room.users.length; index++) {
                if(room.users[index].status === 'finish') {
                    count+=1;
                } else {
                    break;
                }               
            }

            if(count === room.users.length) {
                room.gameState = 'finish';

                await room.save();            

                setTimeout(async () => {
                    await Room.findByIdAndDelete(item.roomId);
                }, 5000);

                data = data.filter(e => e.roomId !== room._id)

                io.to(item.roomId).emit('game2', 'finish');
            }

            await room.save();            

            const players = room.users.sort((a, b) => b.score - a.score);

            io.to(item.roomId).emit('player2', userJsonToGroupGame(players));
        } else {
            io.to(item.roomId).emit('game2', 'remove');
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
        const room = await Room.findById(item.roomId);

        if(room) {
            io.to(item.roomId).emit('game2', room.gameState);
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
        const room = await Room.findById(item.roomId);
        
        if(room) {
            const player = room.users.find(e => e.id.equals(item.playerId));
            
            player.score += item.score;
            
            await room.save();

            const players = room.users.sort((a, b) => b.score - a.score)
                                
            io.to(item.roomId).emit('player2', userJsonToGroupGame(players));
        }
    } catch (error) {
        console.log('Error -> Start: ', error.message);            
    }
}
const leaveMethod2 = async (item, socket, io, data) => {
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
    
            if(room.gameState === 'start') {
                let newUsers = room.users.map(e => {
                    if(e?.id?.toString() === (item?.playerId?.toString())) {
                        return { id: e.id, name: e.name, image: e.image, status: 'finish', admin: e.admin, score: e.score }
                    }

                    return e;
                });

                room = await Room.updateOne({ _id: item.roomId }, { users: newUsers }, { new: true });

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
                        await Room.findByIdAndDelete(item.roomId);
                    }, 5000);

                    data = data.filter(e => e.roomId !== room._id)
                }
                                        
                io.to(item.roomId).emit('player2', userJsonToGroupGame(players));                
                io.to(item.roomId).emit('game2', room.gameState);    
                return;
            } else {
                let newUsers = room.users.filter(e => !e?.id?.equals(item?.playerId));

                room = await Room.updateOne({ _id: item.roomId }, { users: newUsers }, { new: true });

                const players = newUsers.sort((a, b) => b.score - a.score)

                io.to(item.roomId).emit('player2', userJsonToGroupGame(players));                
                io.to(item.roomId).emit('game2', room.gameState);
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