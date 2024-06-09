const Question = require("../database/models/Question");

const generateRandomQuestions = async (categories, section, limit) => {
    const questionsPromises = categories.map(async (category) => {
            return Question.find({ category_ids: { $in: category }, section_id: section, active: true });
    });
    
    const questions = await Promise.all(questionsPromises);

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
    // const latestQuestions = [];

    // categories.forEach(async (category) => {
    //     const questions = await Question.find( { category_ids: { $in: category }, section_id: section, active: true } );
    //     latestQuestions.push(...questions);
    // })

    // const outputQuestions = [];

    // for (const i = 0; i < limit; i++) {
    //     const questionIndex = Math.floor(Math.random() * latestQuestions.length);

    //     outputQuestions.push(latestQuestions[questionIndex]);
    // }

    // return outputQuestions;
}

module.exports = generateRandomQuestions;