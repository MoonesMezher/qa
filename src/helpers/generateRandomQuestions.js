const CacheQuestions = require("../database/models/CacheQuestions");
const Question = require("../database/models/Question");
const Section = require("../database/models/Section");

const generateRandomQuestions = async (userId, type, limit, typeQuestion) => {
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
                        "answer": 'خطأ',
                        "state": question.answers[0].state? false: true,
                    },
                    {
                        "answer": 'صح',
                        "state": question.answers[0].state? true: false,
                    }
                ]
            }
        }));
    }

    let finalLimit = limit;

    let cacheQuestions = await CacheQuestions.findOne({user_id: userId, type_id: type.id});

    let flatQuestions = [].concat(...questions);

    if(cacheQuestions && (flatQuestions.length - cacheQuestions.questions.length) <= limit) {
        await CacheQuestions.findByIdAndDelete(cacheQuestions._id)
    } else {
        if(cacheQuestions) {
            for(let i = 0; i < cacheQuestions.questions.length; i++) {
                flatQuestions = flatQuestions.filter(e => e._id.toString() !== cacheQuestions.questions[i].toString())
            }
        }
    }

    if(limit > flatQuestions.length) {
        finalLimit = flatQuestions.length;
    }

    const selectedQuestions = new Set();
    
    while (selectedQuestions.size < finalLimit) {
        const random = Math.random();
        const length = flatQuestions.length;
        const by = Math.floor((Math.random() * (length.toString().length - 1)));
        
        const randomIndex = Math.floor(random * Math.pow(10, -by) * length);
        
        const question = flatQuestions[randomIndex];
        
        if (!selectedQuestions.has(question._id)) {
            if(!cacheQuestions) {
                cacheQuestions = await CacheQuestions.create({user_id: userId, type_id: type.id, questions: [question._id]});
            } else {
                // console.log(question._id, [...cacheQuestions.questions, question._id])

                await CacheQuestions.findByIdAndUpdate(cacheQuestions._id, {questions: [...cacheQuestions.questions, question._id]});
            }

            selectedQuestions.add(question._id);
        }
    }

    return Array.from(selectedQuestions).map((id) => flatQuestions.find((q) => q._id === id));
}

const generateRandomQuestionsForSpeedGame = async (type, userId) => {
    const limit = 100;
    
    const q1 = await generateRandomQuestions(userId, type, limit, 'true-false');

    const q2 = await generateRandomQuestions(userId, type, limit, 'normal');

    let result = [];

    for (let index = 0; index < limit; index++) {
        result.push(q1[index]);        
        result.push(q2[index]);        
    }

    result = result.filter(e => e != null);

    return result;
}

const generateRandomQuestionsForChainGame = async (type, userId) => {
    const limit = 100;
    
    const q1 = await generateRandomQuestions(userId, type, limit, 'true-false');

    const q2 = await generateRandomQuestions(userId, type, limit, 'normal');

    let result = [];

    for (let index = 0; index < limit; index++) {
        result.push(q1[index]);        
        result.push(q2[index]);        
    }

    result = result.filter(e => e != null);

    return result;
}

const generateRandomQuestionsForOnlineGame = async (type, userId) => {
    // const limit = 10;
    
    const q1 = await generateRandomQuestions(userId, type, 4, 'true-false');

    const q2 = await generateRandomQuestions(userId, type, 5, 'normal');

    const q3 = await generateRandomQuestions(userId, type, 2, 'multipale');

    let result = [...q1, ...q2, ...q3];

    result = result.filter(e => e != null);

    return result;
}

const generateRandomQuestionsForCompetion = async (typeId, userId) => {
    const limit = 100;

    let type = { id: typeId, type: 'section' }

    const section = await Section.findById(typeId);

    if(!section) {
        type.type = 'category'
    }
    
    const q1 = await generateRandomQuestions(userId, type, limit, 'true-false');

    const q2 = await generateRandomQuestions(userId, type, limit, 'normal');

    let result = [];

    for (let index = 0; index < limit; index++) {
        result.push(q1[index]);        
        result.push(q2[index]);        
    }

    result = result.filter(e => e != null);

    return result;
}

module.exports = {
    generateRandomQuestionsForSpeedGame,
    generateRandomQuestionsForChainGame,
    generateRandomQuestionsForOnlineGame,
    generateRandomQuestionsForCompetion
};