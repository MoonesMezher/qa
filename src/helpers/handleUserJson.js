const userJson = (users) => {
    let players = {}

    users.map((e,i) => {
        const player = 'player'+(i+1);

        players[player] = {
            id: e.id,
            name: e.name,
            image: e.image,
            result: {
                score: e.score,
                status: e.status
            }
        } }
    )

    return players;
}

module.exports = userJson;