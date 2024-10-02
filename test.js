const random = Math.random();
const length = 17000000;
const by = Math.floor((Math.random() * length.toString().length));

console.log(Math.floor(random * Math.pow(10, -by) * length));

console.log(random, by, random * Math.pow(10, -by));