const { default: mongoose } = require("mongoose");
const { generateRandomQuestionsForSpeedGame, generateRandomQuestionsForChainGame } = require("../helpers/generateRandomQuestions");

const getQuestionsToSpeedGame = async (req, res) => {
    const { id, type } = req.body;

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
        const questions = await generateRandomQuestionsForSpeedGame({ id, type });

        const total = questions.length;

        return res.status(200).json({ state: 'success', message: 'Generate all questions for speed game successfully', questions, total })        
    } catch (err) {
        return res.status(400).json({ state: 'failed', message: err.message})        
    }
}

const getQuestionsToChainGame = async (req, res) => {
    const { id, type } = req.body;

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

        return res.status(200).json({ state: 'success', message: 'Generate all questions for speed game successfully', questions, total })        
    } catch (err) {
        return res.status(400).json({ state: 'failed', message: err.message})        
    }
}

module.exports = {
    getQuestionsToSpeedGame,
    getQuestionsToChainGame
}