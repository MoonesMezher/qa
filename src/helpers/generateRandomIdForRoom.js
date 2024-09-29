const Room = require("../database/models/Room");

const genrateRoomId = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';
    
    for (let i = 0; i < 6; i++) {
        code += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    
    return code;
}

module.exports = genrateRoomId

// console.log(genrateRoomId());