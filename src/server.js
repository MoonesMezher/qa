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

const online1vs1 = io.of('game1');

// const onlineGroup = io.of('game2');

online1vs1.on('connection', (socket) => {
    console.log('A user connected');

    game1(online1vs1, socket);

    game2(onlineGroup, socket);
});

// onlineGroup.on('connection', (socket) => {
//     console.log('A user connected: (group)');
    
// });


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