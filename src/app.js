const express = require('express');
const logger = require('morgan')

const userRouter = require('./routes/userRoute');
const profileRouter = require('./routes/profileRoute');
const uploadRouter = require('./routes/uploadRoute');

const app = express();

app.use(logger('dev'));
app.use(express.json());

app.use('/api/upload',uploadRouter);
app.use('/api/users',userRouter);
app.use('/api/profile',profileRouter);

module.exports = app;