const express = require('express');

const logger = require('morgan')
const path = require('path');
const cors = require('cors');

// Routes
const userRouter = require('./routes/userRoute');
const profileRouter = require('./routes/profileRoute');
const sectionRouter = require('./routes/sectionRoute');
const categoryRouter = require('./routes/categoryRoute');
const questionRouter = require('./routes/questionRoute');
const offerRouter = require('./routes/offerRoute');
const reportRouter = require('./routes/reportRoute');
const uploadRouter = require('./routes/uploadRoute');
const noteficationRouter = require('./routes/noteficationRoute');

const app = express();

app.use(logger('dev'));
app.use(express.json());

app.use(cors());

app.use(express.static(path.join(__dirname, "dist")));
app.use('/uploads', express.static('src/uploads'));

// routes
app.use("/api/upload", uploadRouter);
app.use('/api/users',userRouter);
app.use('/api/profile',profileRouter);
app.use('/api/sections',sectionRouter);
app.use('/api/categories',categoryRouter);
app.use('/api/questions',questionRouter);
app.use('/api/offers',offerRouter);
app.use('/api/reports',reportRouter);
app.use('/api/notefications', noteficationRouter);

module.exports = app;