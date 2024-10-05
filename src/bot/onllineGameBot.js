const { default: mongoose } = require("mongoose");
const generateGuid = require("../helpers/generateRandomGuid");
const randomInts = require("../helpers/generateRandomNumbersToUsernames");

const onlineGameBot = (questions, value = .7) => {
    const answers = [];

    questions.forEach((question) => {
        let score = 0;
        if(question.type === "multipale") {
            score = solveMultipaleQuestionBot(question);
        } else {
            score = solveQuestionBot(value);
        }
        answers.push(score);
    });

    // console.log(answers);

    return answers.reduce((acc, cur) => +acc + +cur);
}

const solveMultipaleQuestionBot = (question) => {
    const numberOfAnswers = Math.floor(Math.random() * 12);

    const answersOfBot = [];

    let index = 0;

    while(index < numberOfAnswers) {
        const randomIndex = Math.floor(Math.random() * 11) + 1;
        if(!answersOfBot.find(e => e === randomIndex)) {
            answersOfBot.push(randomIndex);
            index++;
        } 
    }

    let score = 0;

    for (let index = 0; index < answersOfBot.length; index++) {
        if(question.answers[answersOfBot[index]].state === true) {
            score = score + 6;
        } else {
            score = score - 1;
        }       
    }

    return score;
}

function solveQuestionBot(value) {
    const randomNum = Math.random();

    if (randomNum < value) {
        return Math.floor(Math.random() * 9) + 1;
    }

    return 0;
}


const generateRandomBot = (questions) => {
    const userId = new mongoose.Types.ObjectId();

    const details = generateRandomUserName();

    const bot = {
        id: userId,
        score: 100,
        name: details,
        image: `uploads/avatars/${details}.webp`,
        status: 'start',
    }

    return bot
}

const generateRandomUserName = () => {
    const usernames = [
        "Abood",
        "Farah",
        "Ahmad",
        "Hadi",
        "Reem",
        "Lana",
        "Joury",
        "Mohammed",
        "Nada",
        "Omar",
        "Rami",
        "Sawsan"
    ]

    // console.log()

    let result = usernames[Math.floor(Math.random() * (usernames.length - 1))];

    return result;
}

// console.log(generateRandomBot())

module.exports = {
    onlineGameBot,
    generateRandomBot
}