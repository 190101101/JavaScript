'use strict'

const question = new Map([
	['question', 'which programming language is better?'],
	[1, 'JavaScript'],
	[2, 'Python'],
	[3, 'Java'],
	['correctAnswer', 1],
	[true, 'correct answer'],
	[false, 'incorrect answer'],
]);

//Quiz app
console.log(question.get('question'))

for(const [key, value] of question){
	if(typeof key == 'number'){
		console.log(value);
	}
}

const userAnswer = 1;
console.log(question.get(question.get('correctAnswer') === userAnswer));