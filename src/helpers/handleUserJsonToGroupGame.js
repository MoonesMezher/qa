const userJsonToGroupGame = (users) => {
    let players = []

    users.map((e,i) => {
        players.push({
            id: e.id,
            name: e.name,
            image: e.image,
            result: {
                score: e.score,
                status: e.status
            }
        })
    })

    return players;
}

module.exports = userJsonToGroupGame;