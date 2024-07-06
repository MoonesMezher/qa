const { default: mongoose } = require("mongoose");
const Category = require("../database/models/Category");
const Question = require("../database/models/Question");
const User = require("../database/models/User");
const normalizePath = require("../helpers/normalizePathName");
const { deleteImages } = require("../middlewares/checkFromImageMiddleware");

const limit = 50;

const showQuestion = async (req, res) => {
    const { id } = req.params;

    const question = await Question.findById(id);

    if(!question) {
        return res.status(400).send({ state: 'failed', message: 'This question doesnot exist' });
    }

    return res.status(200).send({ state: 'success', message: 'Get question successfully', question: question });
}

const showQuestions = async (req, res) => {
    const { page } = req.params;

    try {
        const count = await Question.countDocuments({});

        const questions = await Question.find({}).sort({ createdAt: -1 }).skip((page - 1) * limit).limit(limit);

        return res.status(200).send({ state: 'success', message: 'Get questions successfully', questions: questions, total: count });
    } catch (error) {
        return res.status(400).send({ state: 'failed', message: error.message });        
    }
}

const showDataEntryQuestions = async (req, res) => {
    const { page } = req.params;

    const user_id = req.user;

    try {
        const count = await Question.countDocuments({ user_ids: { $in: user_id } });

        const questions = await Question.find({ user_ids: { $in: user_id } }).sort({ createdAt: -1 }).skip((page - 1) * limit).limit(limit);

        return res.status(200).send({ state: 'success', message: 'Get questions successfully', questions: questions, total: count });
    } catch (error) {
        return res.status(400).send({ state: 'failed', message: error.message });        
    }
}

const showQuestionsByType = async (req, res) => {
    const { page, type } = req.params;

    if(!type) {
        return res.status(400).send({ state: 'failed', message: `You should insert a type to filter questions` });
    }

    if(typeof type !== 'string') {
        return res.status(400).send({ state: 'failed', message: `Type as attribute must be a string` });
    }

    if(!(type == 'true-false' || type == 'normal' || type == 'multipale')) {
        return res.status(400).send({ state: 'failed', message: `This Type doesnot exist in the system`});
    }

    try {
        const count = await Question.countDocuments({ type: type });

        const questions = await Question.find({ type: type }).sort({ createdAt: -1 }).skip((page - 1) * limit).limit(limit);

        return res.status(200).send({ state: 'success', message: `Get ${type} questions successfully`, questions: questions, total: count });
    } catch (error) {
        return res.status(400).send({ state: 'failed', message: error.message });        
    }
}

const showQuestionsByTypeForOneUser = async (req, res) => {
    const { id, page, type } = req.params;

    if(!type) {
        return res.status(400).send({ state: 'failed', message: `You should insert a type to filter questions` });
    }

    if(typeof type !== 'string') {
        return res.status(400).send({ state: 'failed', message: `Type as attribute must be a string` });
    }

    if(!(type == 'true-false' || type == 'normal' || type == 'multipale')) {
        return res.status(400).send({ state: 'failed', message: `This Type doesnot exist in the system`});
    }

    try {
        const count = await Question.countDocuments({ user_ids: { $in: id }, type: type });

        const questions = await Question.find({ user_ids: { $in: id }, type: type }).sort({ createdAt: -1 }).skip((page - 1) * limit).limit(limit);

        return res.status(200).send({ state: 'success', message: `Get ${type} questions for user has id ${id} successfully`, questions: questions, total: count });
    } catch (error) {
        return res.status(400).send({ state: 'failed', message: error.message });        
    }
}

const showQuestionsByTypeForOneUserWithFilter = async (req, res) => {
    const { id, page, type, word } = req.params;

    if(!type) {
        return res.status(400).send({ state: 'failed', message: `You should insert a type to filter questions` });
    }

    if(typeof type !== 'string') {
        return res.status(400).send({ state: 'failed', message: `Type as attribute must be a string` });
    }

    if(typeof word !== 'string') {
        return res.status(400).send({ state: 'failed', message: `Word as attribute must be a string` });
    }

    if(!(type == 'true-false' || type == 'normal' || type == 'multipale')) {
        return res.status(400).send({ state: 'failed', message: `This Type doesnot exist in the system`});
    }

    try {
        const regex = new RegExp(`.*${word}.*`, "i");
        
        const count = await Question.countDocuments({ user_ids: { $in: id }, type: type, text: { $regex: regex } });

        const questions = await Question.find({ user_ids: { $in: id }, type: type, text: { $regex: regex } }).sort({ createdAt: -1 }).skip((page - 1) * limit).limit(limit);

        return res.status(200).send({ state: 'success', message: `Get ${type} questions has ${word} for user has id ${id} successfully`, questions: questions, total: count });
    } catch (error) {
        return res.status(400).send({ state: 'failed', message: error.message });        
    }
}

const showQuestionsForOneUserWithFilter = async (req, res) => {
    const { id, page, word } = req.params;


    if(typeof word !== 'string') {
        return res.status(400).send({ state: 'failed', message: `Word as attribute must be a string` });
    }

    try {
        const regex = new RegExp(`.*${word}.*`, "i");
        
        const count = await Question.countDocuments({ user_ids: { $in: id }, text: { $regex: regex } });

        const questions = await Question.find({ user_ids: { $in: id }, text: { $regex: regex } }).sort({ createdAt: -1 }).skip((page - 1) * limit).limit(limit);

        return res.status(200).send({ state: 'success', message: `Get questions has ${word} for user has id ${id} successfully`, questions: questions, total: count });
    } catch (error) {
        return res.status(400).send({ state: 'failed', message: error.message });        
    }
}

const showQuestionsByWord = async (req, res) => {
    const { word, page } = req.params;

    if(!word) {
        return res.status(400).send({ state: 'failed', message: `You should insert a word to filter questions` });
    }

    if(typeof word !== 'string') {
        return res.status(400).send({ state: 'failed', message: `Word must be a string` });
    }

    const nameRegex = new RegExp(`.*${word}.*`, 'i');

    try {
        const count = await Question.countDocuments({ text: { $regex: nameRegex } });

        const questions = await Question.find({ text: { $regex: nameRegex } }).sort({ createdAt: -1 }).skip((page - 1) * limit).limit(limit);

        return res.status(200).send({ state: 'success', message: `Get questions have '${word}' word successfully`, questions: questions, total: count });
    } catch (error) {
        return res.status(400).send({ state: 'failed', message: error.message });        
    }
}

const showQuestionsByUser = async (req, res) => {
    const { id, page } = req.params;

    try {
        const count = await Question.countDocuments({ user_ids: { $in: id }});

        const questions = await Question.find({ user_ids: { $in: id }}).sort({ createdAt: -1 }).skip((page - 1) * limit).limit(limit);

        return res.status(200).send({ state: 'success', message: `Get questions have user id: '${id}' successfully`, questions: questions, total: count });
    } catch (error) {
        return res.status(400).send({ state: 'failed', message: error.message });        
    }
}

const createQuestion = async (req, res) => {
    let { category_ids, type, text, answers, picture, section_id } = req.body;

    const inputsWrong = [];

    if(!section_id) {
        inputsWrong.push("section_id");
        return res.status(400).send({ state: 'failed', message: `Section Id cannot be empty`, inputsWrong: inputsWrong});
    }

    if(!mongoose.Types.ObjectId.isValid(section_id)) {
        inputsWrong.push("section_id");
        return res.status(400).send({ state: 'failed', message: `Section Id does not valid`, inputsWrong: inputsWrong});
    }

    if(!picture) {
        inputsWrong.push('picture');
    }

    if(!type) {
        inputsWrong.push('type');
    }

    if(!answers) {
        inputsWrong.push('answers');
    }

    if(!text) {
        inputsWrong.push('text');
    }

    if(inputsWrong.length > 0) {
        return res.status(400).send({ state: 'failed', message: `Type & Text & Answers must have a value`, inputsWrong: inputsWrong});
    }
    
    if(typeof picture !== 'string') {
        inputsWrong.push('picture');
    }

    if(typeof type !== 'string') {
        inputsWrong.push('type');
    }

    if(typeof text !== 'string') {
        inputsWrong.push('text');
    }

    if(inputsWrong.length > 0) {
        return res.status(400).send({ state: 'failed', message: 'Type & Text must be a string', inputsWrong: inputsWrong });
    }

    if (!Array.isArray(answers)) {
        inputsWrong.push('answers');
        return res.status(400).send({ state: 'failed', message: 'Answers must be an array', inputsWrong: inputsWrong });
    }
    
    for (const answer of answers) {
        if (typeof answer !== 'object') {
            inputsWrong.push('answers');
            return res.status(400).send({ state: 'failed', message: 'Answers is not an array of objects', inputsWrong: inputsWrong});
        }
    }

    if(!category_ids || category_ids.length === 0) {
        let otherCategory = await Category.findOne({ name: 'Other', section_id: section_id });
    
        if(!otherCategory) {
            otherCategory = await Category.create({ name: 'Other', section_id: section_id, picture: 'uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg'});
        }

        category_ids = [otherCategory._id];        
    }

    if (category_ids && !Array.isArray(category_ids)) {
        inputsWrong.push('category_ids');
        return res.status(400).send({ state: 'failed', message: 'Category Ids must be an array', inputsWrong: inputsWrong });
    }

    if(!(type == 'true-false' || type == 'normal' || type == 'multipale')) {
        inputsWrong.push('type');
        return res.status(400).send({ state: 'failed', message: `This Type doesnot exist in the system`, inputsWrong: inputsWrong});
    }

    if(type === 'normal') {
        if(answers.length != 4) {
            inputsWrong.push('answers');
            return res.status(400).send({ state: 'failed', message: 'Normal question accept 4 answers only', inputsWrong: inputsWrong});
        }

        let trueAnswers = 0;
        
        for (const answer of answers) {
            if(!answer.answer) {
                inputsWrong.push('answers');
                return res.status(400).send({ state: 'failed', message: 'Each answer in Normal question must have an answer field', inputsWrong: inputsWrong});
            }
            if(typeof answer.answer !== 'string') {
                inputsWrong.push('answers');
                return res.status(400).send({ state: 'failed', message: 'Answer field in answers must be a string', inputsWrong: inputsWrong});
            }

            answer.state = Boolean(answer.state);

            if(typeof answer.state !== 'boolean') {
                answer.state = false;
            }
            if(answer.state) {
                trueAnswers+=1;
            }
        }
        if(trueAnswers != 1) {
            inputsWrong.push('answers');
            return res.status(400).send({ state: 'failed', message: 'Normal question accept one right answer only', inputsWrong: inputsWrong});
        }
    }

    if(type === 'true-false') {
        if(answers.length != 1) {
            inputsWrong.push('answers');
            return res.status(400).send({ state: 'failed', message: 'True and False question accept 2 answers only', inputsWrong: inputsWrong});
        }
        
        for (const answer of answers) {
            if(!answer.answer) {
                answer.answer = " ";
            }
            if(typeof answer.answer !== 'string') {
                inputsWrong.push('answers');
                return res.status(400).send({ state: 'failed', message: 'Answer field in answers must be a string', inputsWrong: inputsWrong});
            }

            answer.state = Boolean(answer.state);
            
            if(typeof answer.state !== 'boolean') {
                inputsWrong.push('answers');
                return res.status(400).send({ state: 'failed', message: 'Answer state must be boolean', inputsWrong: inputsWrong});
            }
        }
    }

    if(type === 'multipale') {
        if(answers.length != 12) {
            inputsWrong.push('answers');
            return res.status(400).send({ state: 'failed', message: 'Multipale question accept 12 answers only', inputsWrong: inputsWrong});
        }

        for (const answer of answers) {
            if(!answer.answer) {
                inputsWrong.push('answers');
                return res.status(400).send({ state: 'failed', message: 'Each answer in Multipale question must have an answer field', inputsWrong: inputsWrong});
            }
            if(typeof answer.answer !== 'string') {
                inputsWrong.push('answers');
                return res.status(400).send({ state: 'failed', message: 'Answer field in answers must be a string', inputsWrong: inputsWrong});
            }

            answer.state = Boolean(answer.state);

            if(typeof answer.state !== 'boolean') {
                answer.state = false;
            }
        }
    }

    try {
        await Question.create({ category_ids, type, text, answers, picture, section_id, user_ids: [req.user._id]});

        if(type == 'true-false') {
            await User.findByIdAndUpdate(req.user._id, { $inc: { totalQuestions: 1, countTrueFalseQuestions: 1 }});
        } else if(type == 'normal') {
            await User.findByIdAndUpdate(req.user._id, { $inc: { totalQuestions: 1, countNormalQuestions: 1 }})
        } else {
            await User.findByIdAndUpdate(req.user._id, { $inc: { totalQuestions: 1 , countMultipleQuestions: 1 }});
        }

        return res.status(200).send({ state: 'success', message: `Created question successfully`});
    } catch (error) {
        return res.status(400).send({ state: 'failed', message: error.message });        
    }
}

const updateQuestion = async (req, res) => { 
    const { id } = req.params;

    const user_id = req.user;

    const user = await User.findById(user_id);

    const question = await Question.findById(id);

    const { category_ids, type, text, answers, section_id, picture } = req.body;

    const inputsWrong = [];

    if(!section_id) {
        inputsWrong.push("section_id");
        return res.status(400).send({ state: 'failed', message: `Section Id cannot be empty`, inputsWrong: inputsWrong });
    }

    if(!mongoose.Types.ObjectId.isValid(section_id)) {
        inputsWrong.push("section_id");
        return res.status(400).send({ state: 'failed', message: `Section Id does not valid`, inputsWrong: inputsWrong});
    }

    if(!type) {
        inputsWrong.push('type');
    }

    if(!answers) {
        inputsWrong.push('answers');
    }

    if(!text) {
        inputsWrong.push('text');
    }

    if(inputsWrong.length > 0) {
        return res.status(400).send({ state: 'failed', message: `Type & Text & Answers must have a value`, inputsWrong: inputsWrong});
    }
    
    if(picture && typeof picture !== 'string') {
        inputsWrong.push('picture');
    }

    if(typeof type !== 'string') {
        inputsWrong.push('type');
    }

    if(typeof text !== 'string') {
        inputsWrong.push('text');
    }

    if(inputsWrong.length > 0) {
        return res.status(400).send({ state: 'failed', message: 'Type & Text must be a string', inputsWrong: inputsWrong });
    }

    if(!category_ids || category_ids.length === 0) {
        let otherCategory = await Category.findOne({ name: 'Other', section_id: section_id });

        if(!otherCategory) {
            otherCategory = await Category.create({ name: 'Other', section_id: section_id});
        }
        category_ids = [otherCategory._id];        
    }

    if (category_ids && !Array.isArray(category_ids)) {
        inputsWrong.push('category_ids');
        return res.status(400).send({ state: 'failed', message: 'Category Ids must be an array', inputsWrong: inputsWrong });
    }

    if (!Array.isArray(answers)) {
        inputsWrong.push('answers');
        return res.status(400).send({ state: 'failed', message: 'Answers must be an array', inputsWrong: inputsWrong });
    }
    
    for (const answer of answers) {
        if (typeof answer !== 'object') {
            inputsWrong.push('answers');
            return res.status(400).send({ state: 'failed', message: 'Answers is not an array of objects', inputsWrong: inputsWrong});
        }
    }

    if(!(type == 'true-false' || type == 'normal' || type == 'multipale')) {
        inputsWrong.push('type');
        return res.status(400).send({ state: 'failed', message: `This Type doesnot exist in the system`, inputsWrong: inputsWrong});
    }

    if(type === 'normal') {
        if(answers.length != 4) {
            inputsWrong.push('answers');
            return res.status(400).send({ state: 'failed', message: 'Normal question accept 4 answers only', inputsWrong: inputsWrong});
        }

        let trueAnswers = 0;
        
        for (const answer of answers) {
            if(!answer.answer) {
                inputsWrong.push('answers');
                return res.status(400).send({ state: 'failed', message: 'Each answer in Normal question must have an answer field', inputsWrong: inputsWrong});
            }
            if(typeof answer.answer !== 'string') {
                inputsWrong.push('answers');
                return res.status(400).send({ state: 'failed', message: 'Answer field in answers must be a string', inputsWrong: inputsWrong});
            }
            if(typeof answer.state !== 'boolean') {
                answer.state = false;
            }
            if(answer.state) {
                trueAnswers+=1;
            }
        }

        if(trueAnswers != 1) {
            inputsWrong.push('answers');
            return res.status(400).send({ state: 'failed', message: 'Normal question accept one right answer only', inputsWrong: inputsWrong});
        }
    }

    if(type === 'true-false') {
        if(answers.length != 1) {
            inputsWrong.push('answers');
            return res.status(400).send({ state: 'failed', message: 'True an False question accept 1 answers only', inputsWrong: inputsWrong});
        }
        
        for (const answer of answers) {
            if(!answer.answer) {
                inputsWrong.push('answers');
                return res.status(400).send({ state: 'failed', message: 'Each answer in True & False question must have an answer field', inputsWrong: inputsWrong});
            }
            if(typeof answer.answer !== 'string') {
                inputsWrong.push('answers');
                return res.status(400).send({ state: 'failed', message: 'Answer field in answers must be a string', inputsWrong: inputsWrong});
            }
            if(typeof answer.state !== 'boolean') {
                answer.state = false;
            }
        }
    }

    if(type === 'multipale') {
        if(answers.length != 12) {
            inputsWrong.push('answers');
            return res.status(400).send({ state: 'failed', message: 'Multipale question accept 12 answers only', inputsWrong: inputsWrong});
        }

        for (const answer of answers) {
            if(!answer.answer) {
                inputsWrong.push('answers');
                return res.status(400).send({ state: 'failed', message: 'Each answer in Multipale question must have an answer field', inputsWrong: inputsWrong});
            }
            if(typeof answer.answer !== 'string') {
                inputsWrong.push('answers');
                return res.status(400).send({ state: 'failed', message: 'Answer field in answers must be a string', inputsWrong: inputsWrong});
            }
            if(typeof answer.state !== 'boolean') {
                answer.state = false;
            }
        }
    }

    try {
        let question;
        if(picture) {
            question = await Question.findByIdAndUpdate(id ,{ section_id, category_ids, type, text, answers, picture}, { new: true });
        } else {
            question = await Question.findByIdAndUpdate(id ,{ section_id, category_ids, type, text, answers}, { new: true });
        }

        return res.status(200).send({ state: 'success', message: `Updated question successfully`, question});
    } catch (error) {
        return res.status(400).send({ state: 'failed', message: error.message });        
    }
}

const deleteQuestion = async (req, res) => {
    const { id } = req.params;

    const user_id = req.user;

    const user = await User.findById(user_id);

    const question = await Question.findById(id);

    if(!question) {
        return res.status(400).send({ state: 'failed', message: 'This question is already not exist'});
    }

    try {
        const deletedQuestion = await Question.findByIdAndDelete(id);

        deletedQuestion.user_ids.forEach(async (userId) => {
            if (deletedQuestion.type === 'true-false') {
                await User.findByIdAndUpdate(userId, { $inc: { totalQuestions: -1, countTrueFalseQuestions: -1 } });
            } else if (deletedQuestion.type === 'normal') {
                await User.findByIdAndUpdate(userId, { $inc: { totalQuestions: -1, countNormalQuestions: -1 } });
            } else {
                await User.findByIdAndUpdate(userId, { $inc: { totalQuestions: -1, countMultipleQuestions: -1 } });
            }
        });

        deleteImages('questions', question.picture);

        return res.status(200).send({ state: 'success', message: 'Deleted question successfully'});        
    } catch (error) {
        return res.status(400).send({ state: 'failed', message: error.message});       
    }
}

const showAllActiveQuestions = async (req, res) => {
    const { page } = req.params;

    const count = await Question.countDocuments({});

    const questions = await Question.find({ active: true }).sort({ createdAt: -1 }).skip((page - 1) * limit).limit(limit);

    if(!questions) {
        return res.status(400).send({ state: 'failed', message: 'You dont have any active question' });
    }

    return res.status(200).send({ state: 'success', message: 'Get active questions successfully', questions: questions, total: count });
}

const showAllNotActiveQuestions = async (req, res) => {
    const { page } = req.params;

    const count = await Question.countDocuments({});

    const questions = await Question.find({ active: false }).sort({ createdAt: -1 }).skip((page - 1) * limit).limit(limit);

    if(!questions) {
        return res.status(400).send({ state: 'failed', message: 'You dont have any none active question' });
    }

    return res.status(200).send({ state: 'success', message: 'Get not active questions successfully', questions: questions, total: count });
}

const activateQuestion = async (req, res) => {
    const { id } = req.params;

    const question = await Question.findById(id);

    if(!question) {
        return res.status(400).send({ state: 'failed', message: 'This question doesnot exist' });
    }

    if(question.active) {
        return res.status(400).send({ state: 'failed', message: 'This question already is active' });
    }

    try {
        await Question.findByIdAndUpdate(id, { active: true });

        return res.status(200).send({ state: 'success', message: 'Activated question successfully' });
    } catch (error) {
        return res.status(400).send({ state: 'failed', message: error.message });        
    }
}

const disactivateQuestion = async (req, res) => {
    const { id } = req.params;

    const question = await Question.findById(id);

    if(!question) {
        return res.status(400).send({ state: 'failed', message: 'This question doesnot exist' });
    }

    if(!question.active) {
        return res.status(400).send({ state: 'failed', message: 'This question already is not active' });
    }

    try {
        await Question.findByIdAndUpdate(id, { active: false });

        return res.status(200).send({ state: 'success', message: 'Disactivated question successfully' });
    } catch (error) {
        return res.status(400).send({ state: 'failed', message: error.message });        
    }
}

module.exports = {
    showQuestion,
    showQuestions,
    showDataEntryQuestions,
    showQuestionsByType,
    showQuestionsByWord,
    showQuestionsByUser,
    showAllActiveQuestions,
    showAllNotActiveQuestions,
    createQuestion,
    deleteQuestion,
    updateQuestion,
    activateQuestion,
    disactivateQuestion,
    showQuestionsByTypeForOneUser,
    showQuestionsByTypeForOneUserWithFilter,
    showQuestionsForOneUserWithFilter
}