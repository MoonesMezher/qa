const express = require('express');
const logger = require('morgan')

// Routes
const userRouter = require('./routes/userRoute');
const profileRouter = require('./routes/profileRoute');
const uploadRouter = require('./routes/uploadRoute');
const sectionRouter = require('./routes/sectionRoute');
const categoryRouter = require('./routes/categoryRoute');
const questionRouter = require('./routes/questionRoute');

const app = express();

app.use(logger('dev'));
app.use(express.json());

app.use('/api/upload',uploadRouter);
app.use('/api/users',userRouter);
app.use('/api/profile',profileRouter);
app.use('/api/sections',sectionRouter);
app.use('/api/categories',categoryRouter);
app.use('/api/questions',questionRouter);

module.exports = app;