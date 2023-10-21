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

console.log([...question]);
console.log(question.entries());
console.log(question.keys());
console.log(question.values());