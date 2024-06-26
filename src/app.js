const express = require('express');

const logger = require('morgan')
const path = require('path');
const cors = require('cors');
const cron = require('node-cron');

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

app.use('/api/test/deleteall', async (req, res) => {
    try {
        await Report.deleteMany({});
        await Notefication.deleteMany({});

        return res.status(200).json({state: 'success', message: 'Deleted all successfully'})
    } catch (error) {
        return res.status(400).json({state: 'failed', message: error.message})        
    }
})

// Jobss
const checkFromReadedReports = require('./jobs/checkFromReadedReportsJob');
const Report = require('./database/models/Report');
const Notefication = require('./database/models/Notefication');

cron.schedule('0 */2 * * *', checkFromReadedReports);

module.exports = app;