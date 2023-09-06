'use strict'

const question = new Map([
    ['question', 'What is the most popular programming language for front-end?'],
    [1, 'JavaScript'],
    [2, 'Java'],
    [3, 'Python'],
    ['correctAnswer', 1],
    [true, 'Correct Answer :)'],
    [false, 'Uncorrect Answer :('],
]);

console.log([...question]);
console.log(question.entries());
console.log(question.keys());
console.log(question.values());
console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);