const Question = require("../database/models/Question");

const generateRandomQuestions = async (type, limit, typeQuestion) => {
    let questions;

    if(type.type === 'section') {
        questions = await Question.find({ section_id: type.id, active: true, type: typeQuestion });
    } else {
        questions = await Question.find({ category_ids: { $in: type.id }, active: true, type: typeQuestion });
    }

    if(typeQuestion === 'true-false') {
        questions = await Promise.all(questions.map(async (question) => {
            return {
            "_id": question?._id,
            "section_id": question?.section_id,
            "category_ids": question?.category_ids,
            "user_ids": question?.user_ids,
            "picture": question?.picture,
            "type": question?.type,
            "text": question?.text,
            "answers": [
                    {
                        "answer": question.answers[0].state? 'صح': 'خطأ',
                        "state": true,
                    },
                    {
                        "answer": !question.answers[0].state? 'صح': 'خطأ',
                        "state": false,
                    }
                ]
            }
        }));
    }

    let finalLimit = limit;

    if(limit > questions.length) {
        finalLimit = questions.length;
    }

    const flatQuestions = [].concat(...questions);

    const selectedQuestions = new Set();
    
    while (selectedQuestions.size < finalLimit) {
        const randomIndex = Math.floor(Math.random() * flatQuestions.length);

        const question = flatQuestions[randomIndex];

        if (!selectedQuestions.has(question._id)) {
            selectedQuestions.add(question._id);
        }
    }

    return Array.from(selectedQuestions).map((id) => flatQuestions.find((q) => q._id === id));
}

const generateRandomQuestionsForSpeedGame = async (type) => {
    const limit = 50;
    
    const q1 = await generateRandomQuestions(type, limit, 'true-false');

    const q2 = await generateRandomQuestions(type, limit, 'normal');

    let result = [];

    for (let index = 0; index < limit; index++) {
        result.push(q1[index]);        
        result.push(q2[index]);        
    }

    result = result.filter(e => e != null);

    return result;
}

const generateRandomQuestionsForChainGame = async (type) => {
    const limit = 50;
    
    const q1 = await generateRandomQuestions(type, limit, 'true-false');

    const q2 = await generateRandomQuestions(type, limit, 'normal');

    let result = [];

    for (let index = 0; index < limit; index++) {
        result.push(q1[index]);        
        result.push(q2[index]);        
    }

    result = result.filter(e => e != null);

    return result;
}

const generateRandomQuestionsForOnlineGame = async (type) => {
    // const limit = 10;
    
    const q1 = await generateRandomQuestions(type, 4, 'true-false');

    const q2 = await generateRandomQuestions(type, 5, 'normal');

    const q3 = await generateRandomQuestions(type, 2, 'multipale');

    let result = [...q1, ...q2, ...q3];

    result = result.filter(e => e != null);

    return result;
    
}

module.exports = {
    generateRandomQuestionsForSpeedGame,
    generateRandomQuestionsForChainGame,
    generateRandomQuestionsForOnlineGame
};