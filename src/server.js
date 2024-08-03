require('dotenv').config();

const app = require('./app');
const mongoose = require('mongoose');

const { instrument } = require('@socket.io/admin-ui')

const game = require('./socket/online');

const server = require('http').createServer(app);
const io = require('socket.io')(server, {
    cors: {
        origin: ["https://admin.socket.io"],
        credentials: true
    }
});

const game = io.of('game1');

let data = []

game.on('connection', (socket) => {
    console.log('A user connected');

    console.log(data);

    game(game, socket, data);
});

instrument(io, {
    auth: false,
    mode: "development",
});

const PORT = process.env.PORT || 3000;

// Connect to MongoDB using Mongoose
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
.then(() => {
    console.log('Connected to MongoDB');
    server.listen(PORT,"0.0.0.0", () => {
        console.log(`Server is listening on this url http://localhost:${PORT}`);
    });
})
.catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});