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

joinToRoom("p1", "room1");
joinToRoom("p2", "room1");
joinToRoom("p3", "room1");
joinToRoom("p11", "room2");
// leaveRoom("p2", "room1");
// leaveRoom("p3", "room1");
// removeRoom("room1");
editScore("p1", "room1", 10);
editScore("p1", "room1", 30);
editScore("p1", "room1", 20);
editScore("p1", "room1", -10);
editScore("p2", "room1", -10);
editScore("p2", "room1", -10);
finishPlayer("p1", "room1")
finishPlayer("p2", "room1")
finishPlayer("p3", "room1")
startGame("room1")
console.log(rooms[0].state, rooms[0]?.players)