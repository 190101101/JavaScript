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

console.log(question);

//Quiz app
console.log(question.get('question'));

for (const [key, value] of question){
	if(typeof key == 'number'){
		console.log(key, value);
	}
}

const userAnswer = 1;
console.log(question.get(question.get('correctAnswer') === userAnswer));