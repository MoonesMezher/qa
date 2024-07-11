const { default: mongoose } = require("mongoose");
const { generateRandomQuestionsForSpeedGame, generateRandomQuestionsForChainGame } = require("../helpers/generateRandomQuestions");

const getQuestionsToSpeedGame = async (req, res) => {
    const { id, type } = req.params;

    if(!type || !id) {
        return res.status(400).json({ state: 'failed', message: 'You must choose section or category to play this game' })
    }

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ state: 'failed', message: 'Invalid id'})
    }

    if(typeof type !== 'string') {
        return res.status(400).json({ state: 'failed', message: 'Type must be a string'})
    }

    if(type !== 'section' && type !== 'category') {
        return res.status(400).json({ state: 'failed', message: 'Type value must be a section or category'})
    }

    try {
        const questions = await generateRandomQuestionsForSpeedGame({ id, type });

        const total = questions.length;

        if(total === 0) {
            return res.status(400).json({ state: 'failed', message: 'عذرا! لايوجد أسئلة تناسب اختيارك'})
        }

        return res.status(200).json({ state: 'success', message: 'تم توليد جميع الأسئلة بنجاح', questions, total })        
    } catch (err) {
        return res.status(400).json({ state: 'failed', message: err.message})        
    }
}

const getQuestionsToChainGame = async (req, res) => {
    const { id, type } = req.params;

    if(!type || !id) {
        return res.status(400).json({ state: 'failed', message: 'You must choose section or category to play this game' })
    }

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ state: 'failed', message: 'Invalid id'})
    }

    if(typeof type !== 'string') {
        return res.status(400).json({ state: 'failed', message: 'Type must be a string'})
    }

    try {
        const questions = await generateRandomQuestionsForChainGame({ id, type });

        const total = questions.length;

        if(total === 0) {
            return res.status(400).json({ state: 'failed', message: 'عذرا! لايوجد أسئلة تناسب اختيارك'})
        }

        return res.status(200).json({ state: 'success', message: 'تم توليد جميع الأسئلة بنجاح', questions, total })        
    } catch (err) {
        return res.status(400).json({ state: 'failed', message: err.message})        
    }
}

module.exports = {
    getQuestionsToSpeedGame,
    getQuestionsToChainGame
}