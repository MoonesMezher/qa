let rooms = [{roomId: 1, state: 'waiting' ,players:[
    { playerId: 1, state: 'ready', admin: true, score: 100 },
    { playerId: 1, state: 'ready', admin: false, score: 200 },
    { playerId: 1, state: 'ready', admin: false, score: 200 },
    { playerId: 1, state: 'ready', admin: false, score: 200 },
    { playerId: 1, state: 'ready', admin: false, score: 200 },
    { playerId: 1, state: 'ready', admin: false, score: 200 },
    { playerId: 1, state: 'ready', admin: false, score: 200 },
    { playerId: 1, state: 'ready', admin: false, score: 300 },
    { playerId: 1, state: 'ready', admin: false, score: 300 },
    { playerId: 1, state: 'ready', admin: false, score: 300 },
    { playerId: 1, state: 'ready', admin: false, score: 300 },
    { playerId: 1, state: 'ready', admin: false, score: 400 },
    { playerId: 1, state: 'ready', admin: false, score: 100 },
    { playerId: 1, state: 'ready', admin: false, score: 100 },
    { playerId: 1, state: 'ready', admin: false, score: 100 },
    { playerId: 1, state: 'ready', admin: false, score: 100 },
    { playerId: 1, state: 'ready', admin: false, score: 200 },
    { playerId: 1, state: 'ready', admin: false, score: 300 },
    { playerId: 1, state: 'ready', admin: false, score: 400 },
    { playerId: 1, state: 'ready', admin: false, score: 150 },
    { playerId: 1, state: 'ready', admin: false, score: 120 },
    { playerId: 1, state: 'ready', admin: false, score: 190 },
    { playerId: 1, state: 'ready', admin: false, score: 190 },
    { playerId: 1, state: 'ready', admin: false, score: 190 },
    { playerId: 1, state: 'ready', admin: false, score: 190 },
]}];

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

    if(isExist) {
        isExist.players = isExist.players.filter(e => e.playerId.toString() !== player.toString());
    }
}

const removeRoom = (roomId) => {
    rooms = rooms.filter(e => e.roomId.toString() !== roomId.toString());
}

const editScore = (player, roomId, score) => {
    const isExist = rooms.find(e => e.roomId === roomId);

    if(isExist) {
        const playerr = isExist.players.find(e => e.playerId.toString() === player.toString());

        if(playerr) {
            playerr.score += score;
        }
    }
}

const finishPlayer = (player, roomId) => {
    const isExist = rooms.find(e => e.roomId === roomId);

    if(isExist) {
        const playerr = isExist.players.find(e => e.playerId.toString() === player.toString());

        if(playerr) {
            playerr.state = 'finish';
        }
    }



    if(!isExist.players.find(e => e.state !== 'finish')) {
        isExist.state = 'finish'
    }
}

const startGame = (roomId) => {
    const isExist = rooms.find(e => e.roomId === roomId);

    if(isExist) {
        isExist.state = 'start'
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

// joinToRoom("p1", "room1");
// joinToRoom("p2", "room1");
// joinToRoom("p3", "room1");
// joinToRoom("p11", "room2");
// // leaveRoom("p2", "room1");
// // leaveRoom("p3", "room1");
// // removeRoom("room1");
// editScore("p1", "room1", 10);
// editScore("p1", "room1", 30);
// editScore("p1", "room1", 20);
// editScore("p1", "room1", -10);
// editScore("p2", "room1", -10);
// editScore("p2", "room1", -10);
// finishPlayer("p1", "room1")
// finishPlayer("p2", "room1")
// finishPlayer("p3", "room1")
// startGame("room1")
// console.log(rooms[0].state, rooms[0]?.players)
checkFromBalance(1);
console.log(rooms[0].players);