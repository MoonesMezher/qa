let cache = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
    // 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33,
    // 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68
];

const cacheTest = (questions) => {
    const output = [];

    let flatQuestions = [].concat(...questions);

    console.log("B", flatQuestions.length, cache.length);

    if((flatQuestions.length - cache.length) <= 20) {
        console.log("2")
        cache = []
    } else {
        for(let i = 0; i < cache.length; i++) {
            flatQuestions = flatQuestions.filter(e => e !== cache[i])
        }
    }

    console.log("A", flatQuestions.length)

    let finalLimit = 20;

    if(20 > flatQuestions.length) {
        finalLimit = flatQuestions.length;
    }

    console.log(finalLimit)

    while(output.length < finalLimit) {
        const random = Math.random();
        const length = flatQuestions.length;
        const by = Math.floor((Math.random() * (length.toString().length - 1)));
    
        const randomIndex = flatQuestions[Math.floor(random * Math.pow(10, -by) * length)];

        if(!output.find(e => e === randomIndex)) {
            output.push(randomIndex);

            cache.push(randomIndex)
        }
    }

    console.log(cache);

    return output;
}

const questions = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
    18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33,
    34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68,
    69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100
]

console.log(cacheTest(questions))

