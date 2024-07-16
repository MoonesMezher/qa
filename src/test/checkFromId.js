const { default: mongoose } = require("mongoose");

const id = new mongoose.Types.ObjectId('66964f23a12d123bb8dcce6a');

const id2 = '66964f23a12d123bb8dcce6a';
console.log(id.equals(id2));