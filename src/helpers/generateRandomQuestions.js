const Question = require("../database/models/Question");

const generateRandomQuestions = async (type, limit, typeQuestion) => {
    let questions;

    if(type.type === 'section') {
        questions = await Question.find({ section_id: type._id, active: true, type: typeQuestion });
    } else {
        questions = await Question.find({ category_ids: { $in: type._id }, active: true, type: typeQuestion });
    }

    const flatQuestions = [].concat(...questions);

    const selectedQuestions = new Set();
    
    while (selectedQuestions.size < limit) {
        const randomIndex = Math.floor(Math.random() * flatQuestions.length);

        const question = flatQuestions[randomIndex];

        if (!selectedQuestions.has(question._id)) {
            selectedQuestions.add(question._id);
        }
    }

    return Array.from(selectedQuestions).map((id) => flatQuestions.find((q) => q._id === id));
}

const generateRandomQuestionsForSpeedGame = async (type) => {
    const limit = 100;
    
    const q1 = await generateRandomQuestions(type, limit, 'multipale');

    const q2 = await generateRandomQuestions(type, limit, 'true-false');

    const result = [];

    for (let index = 0; index < limit; index++) {
        result.push(q1[index]);        
        result.push(q2[index]);        
    }

    return result;
}

module.exports = {
    generateRandomQuestionsForSpeedGame
};