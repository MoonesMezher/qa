const express = require('express');

const logger = require('morgan');
const path = require('path');
const cors = require('cors');

// Routes
const testRouter = require('./routes/testRoute');
const userRouter = require('./routes/userRoute');
const profileRouter = require('./routes/profileRoute');
const sectionRouter = require('./routes/sectionRoute');
const categoryRouter = require('./routes/categoryRoute');
const questionRouter = require('./routes/questionRoute');
const offerRouter = require('./routes/offerRoute');
const reportRouter = require('./routes/reportRoute');
const uploadRouter = require('./routes/uploadRoute');
const noteficationRouter = require('./routes/noteficationRoute');
const competitionRouter = require('./routes/competitionRoute');
const gameRouter = require('./routes/gameRoute');
const roomRouter = require('./routes/roomRoute');
const friendRouter = require('./routes/friendRoute');
const inviteRouter = require('./routes/inviteRoute');
const otpRouter = require('./routes/otpRoute');
const paymentRouter = require('./routes/paymentRoute');

const app = express();

app.use(logger('dev'));
app.use(express.json());

app.use(cors());

app.use(express.static(path.join(__dirname, "dist")));
app.use('/game/uploads', express.static('src/uploads'));

// routes
app.use('/game/api/test', testRouter);
app.use('/game/api/upload', uploadRouter);
app.use('/game/api/users',userRouter);
app.use('/game/api/profile',profileRouter);
app.use('/game/api/sections',sectionRouter);
app.use('/game/api/categories',categoryRouter);
app.use('/game/api/questions',questionRouter);
app.use('/game/api/offers',offerRouter);
app.use('/game/api/reports',reportRouter);
app.use('/game/api/notefications', noteficationRouter);
app.use('/game/api/competitions', competitionRouter);
app.use('/game/api/games', gameRouter);
app.use('/game/api/rooms', roomRouter);
app.use('/game/api/friends', friendRouter);
app.use('/game/api/invites', inviteRouter);
app.use('/game/api/otp', otpRouter);
app.use('/game/api/payments', paymentRouter);
app.use('*', (req, res) => res.status(400).json({state: 'failed', 'message': 'This API does not exist'}))

module.exports = app;