const output = []
for (let i = 0; i < 100; i++) {
    const random = Math.random();
    const length = 1000000000000;
    const by = Math.floor((Math.random() * (length.toString().length - 1)));
    
    const randomIndex = Math.floor(random * Math.pow(10, -by) * length);
    output.push(randomIndex);
}

// console.log(output);