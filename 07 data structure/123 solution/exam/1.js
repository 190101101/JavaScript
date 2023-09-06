const question = new Map([
    ['question', 'most popular programming language?'],
    [1, 'JavaScript'],
    [2, 'Python'],
    [3, 'PHP'],
    [4, 'C#'],
    ['correctAnswer', 1],
    [true, 'correct answer :)'],
    [false, 'incorrect answer :('],
]);


console.log(question.get('question'));

for(const [option, name] of question.entries()){
    if(typeof option == 'number'){
        console.log(`${option}: ${name}`);
    }
}

const userAnswer = 1;

console.log(question.get(userAnswer == question.get('correctAnswer')));
console.log(question.get(question.get('correctAnswer')));
