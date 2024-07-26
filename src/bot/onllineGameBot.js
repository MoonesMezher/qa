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

    console.log(answers);

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

    const bot = {
        id: userId,
        score: 100,
        name: generateRandomUserName(),
        image: `uploads/profile/profileDefault${Math.floor(Math.random() * 9) + 1}.webp`,
        status: 'start',
    }

    return bot
}

const generateRandomUserName = () => {
    const usernames = [
        "salama",
        "rama",
        "rami",
        "doaa",
        "mohammed",
        "salam",
        "karam",
        "kareem",
        "tawfeek",
        "tarek",
        "farah",
        "mais",
        "zina",
        "roaa",
        "sidra",
        "ghenwa",
        "fares",
        "danyal",
        "naell",
        "marwan",
        "anas",
        "ayham",
        "yamen",
        "omar",
        "amer",
        "waseem",
        "sameer",
        "laith",
        "raeed",
        "jneed",
        "sami",
        "sara",,
        "lana",
        "aya",
        "ali",
        'qamar',
        'odai',
        "dani",
        "mahmmoud",
        "komai",
        "maged",
        "mjd",
        "mera",
        "sommia",
        "sonia",
        "kenaz",
        "moones",
        "batoul",
        "faihaa",
        "tala",
        "cristena",
        "gaith",
        "habib",
        "habeb",
        "ammar",
        "yousef",
        "youssef",
        "hazzar",
        "louna",
        'bissan',
        "bessan",
        "darween",
        "david",
        "joly",
        "joaa",
        "martin",
        "obaida",
        "obada",
        "meriana",
        "soso",
        "soze",
        "ward",
        "ross",
        "carmen",
        "Karmen",
        "dena",
        "diana",
        "taleeb",
        "ahmad",
        "ahmed",
        "fouaz",
        "ibrahim",
        "ibrahem",
        "ibraheem",
        "kenana",
        "boushra",
        "taima",
        "toleen",
        "dana",
        "aseel",
        "candi",
        "fareed",
        "khaled",
        "sameh",
        "sammeh",
        "katia",
        "saly",
        "lougain",
        "logain",
        "hammed",
        "hadi",
        "shadi",
        "shady"
    ]

    let result = usernames[Math.floor(Math.random() * usernames.length - 1)] +"."+ generateGuid().slice(0, Math.ceil(Math.random() * 5));

    return result;
}

module.exports = {
    onlineGameBot,
    generateRandomBot
}