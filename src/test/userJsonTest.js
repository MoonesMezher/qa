const userJson = require("../helpers/handleUserJson")


const users = [
    {
        "id": "668d4233098627bccab95249",
        "name": "moones2",
        "score": 0,
        "status": "ready",
        "_id": "6692a0377dced7184b4f7a1a"
    },
    {
        "id": "668d4233098627bccab95249",
        "name": "moones2",
        "score": 0,
        "status": "ready",
        "_id": "6692a06b7dced7184b4f7ac3"
    }
]

console.log(userJson(users));