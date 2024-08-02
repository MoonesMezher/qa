require('dotenv').config();

const app = require('./app');
const mongoose = require('mongoose');

const { instrument } = require('@socket.io/admin-ui')

const game1 = require('./socket/online1vs1');
const game2 = require('./socket/group');

const server = require('http').createServer(app);
const io = require('socket.io')(server, {
    cors: {
        origin: ["https://admin.socket.io"],
        credentials: true
    }
});

const game = io.of('game1');

const data = []

game.on('connection', (socket) => {
    console.log('A user connected');

    game1(game, socket, data);

    game2(game, socket, data);
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