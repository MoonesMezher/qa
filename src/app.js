const express = require('express');

const logger = require('morgan')
const path = require('path');
const cors = require('cors');
// const cron = require('node-cron');

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
const competitionRouter = require('./routes/competitionRoute');
const gameRouter = require('./routes/gameRoute');
const roomRouter = require('./routes/roomRoute');

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
app.use('/api/competitions', competitionRouter);
app.use('/api/games', gameRouter);
app.use('/api/rooms', roomRouter);

app.use('/api/test/deleteall', async (req, res) => {
    try {
        await Report.deleteMany({});
        await Notefication.deleteMany({});

        return res.status(200).json({state: 'success', message: 'Deleted all successfully'})
    } catch (error) {
        return res.status(400).json({state: 'failed', message: error.message})        
    }
})

app.put('/api/test/questions/section/:id',async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ state: 'failed', message: 'Invalid Id' });
    }

    let OtherId;

    const total = await Question.countDocuments({ category_ids: [] });

    const totalTheSameSection = await Question.countDocuments({ category_ids: [], section_id: id });

    const findOtherCategory = await Category.findOne({ name: 'Other', section_id: id });

    if(!findOtherCategory) {
        const createdCategory = await Category.create({ name: 'Other', section_id: id, picture: 'uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg'});

        OtherId = createdCategory._id;
    } else {
        OtherId = findOtherCategory._id;
    }

    try {
        // , { category_ids: [OtherId] }
        const qs = await Question.find({ category_ids: [], section_id: id }).limit(10);

        await Promise.all(qs.map(async e => {
            await Question.findByIdAndUpdate(e._id, { category_ids: [OtherId] });
        }));

        return res.status(200).json({ state: 'success', message: 'Updated questions successfully', total, totalTheSameSection })
    } catch (error) {
        return res.status(400).json({ state: 'failed', message: error.message });
    }
})

// Jobss
const Report = require('./database/models/Report');
const Notefication = require('./database/models/Notefication');
const User = require('./database/models/User');
const Question = require('./database/models/Question');
const Category = require('./database/models/Category');
const { default: mongoose } = require('mongoose');

module.exports = app;