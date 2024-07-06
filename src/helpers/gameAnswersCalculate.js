const Profile = require("../database/models/Profile");

const answerCalculate = async (question, index, answer) => {
    let exp = 0;
    let tokens = 0;
    let state = false;
    let score = 0;

    if(answer.state) {
        exp = 1;
        tokens = 1;
        score = 1;
        state = true;
    }

    return { question, exp, tokens, score, index, state }
}

const answersCalculate = async (user_id, array) => {
    const result = [];

    let finalExp = 0;
    let finalTokens = 0;
    let finalScore = 0;

    for (let index = 0; index < array.length; index++) {
        const cal = answerCalculate(array[index].question, array[index].index, array[index].answer);

        finalExp += cal.exp;
        finalTokens += cal.tokens;
        finalScore += cal.score;

        result.push({question: cal.question, index: cal.index, state: cal.state});
    }

    const user = await Profile.findById(user_id);

    user.exp += +finalExp;
    user.tokens += +finalTokens;

    await user.save();

    return result;
}

module.exports = {
    answersCalculate
}