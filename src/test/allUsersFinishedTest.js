const checkFinishGame = (arr) => {
    console.log(room.users.filter(e => e.status === 'finish').length)
    if(room.users.filter(e => e.status === 'finish').length === room.users.length) {
        console.log('finish')
    }
}

const room = {
    users: [
        {
            status: 'finish',
        },
        {
            status: 'finish',
        },
        {
            status: 'finish',
        },
        {
            status: 'finish',
        },
    ]
}

checkFinishGame(room);