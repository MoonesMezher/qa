require('dotenv').config();

const app = require('./app');
const mongoose = require('mongoose');

const server = require('http').createServer(app);
const io = require('socket.io')(server);

io.on('connection', (socket) => {
    console.log('A user connected');

    // Handle user disconnection
    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

const PORT = process.env.PORT || 3000;

// Connect to MongoDB using Mongoose
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
.then(() => {
    console.log('Connected to MongoDB');
    server.listen(PORT, () => {
        console.log(`Server is listening on this url http://localhost:${PORT}`);
    });
})
.catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});
