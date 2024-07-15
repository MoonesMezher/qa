const generateGuid = require("../helpers/generateRandomGuid");
const randomInts = require("../helpers/generateRandomNumbersToUsernames");

const onlineGameBot = async (questions, value = 0.7) => {
    const answers = [];

    questions.forEach((question) => {
        const answer = solveQuestionBot(question, value);
        answers.push(answer);
    });

    return answers;
}

function solveQuestionBot(question, value) {
    const correctAnswer = question.answers.find((answer) => answer.state === true);
    const incorrectAnswers = question.answers.filter((answer) => answer.state === false);

    const randomNum = Math.random();

    if (randomNum < value) {
        return correctAnswer;
    } else {
      return incorrectAnswers[Math.floor(Math.random() * incorrectAnswers.length)];
    }
}

const generateRandomBot = async (questions, id) => {
    const bot = {
        id: id,
        score: 100,
        username: generateRandomUserName(),
        picture: 'uploads/profile/profileDefault.jpeg',
        status: 'start'
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

    let result = usernames[Math.floor(Math.random() * usernames.length)] +"."+ generateGuid().slice(0, 3);

    return result;
}

module.exports = {
    onlineGameBot,
    generateRandomBot
}