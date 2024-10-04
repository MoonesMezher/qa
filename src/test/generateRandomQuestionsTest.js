const random = Math.random();
const length = 100;
const by = Math.floor((Math.random() * (length.toString().length - 1)));

const randomIndex = Math.floor(random * Math.pow(10, -by) * length);

console.log(randomIndex)