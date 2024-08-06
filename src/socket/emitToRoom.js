const emitToRoom = (io, socket, event, data) => {
    const room = [];
    
    io.sockets.forEach((e) => {
        if (e.roomId === socket.roomId) {
            room.push(e)
        }
    });

    io.to(room).emit(event, data)
}

module.exports = emitToRoom;