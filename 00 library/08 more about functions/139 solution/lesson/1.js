// Test Data:
// [7, 1, 4]
// [3, 6, 9, 2, 5, 4, 4]

const survey = {
	question: 'What programming language would you like to learn?',
	options: ['0: JavaScript', '1: Python', '2: Ruby', '3: Java', '4: C#'],
	answers: new Array(5).fill(0),
	logNewAnswer(){
		const answer = Number(prompt(`${this.question}\n${this.options.join('\n')}\n(Enter option number)`));

		if(typeof answer === 'number' && answer >= 0 && answer < this.answers.length){
			this.answers[answer]++;
		}
	},
	printResults(type = 'array'){
		if(type === 'array'){
			console.log(this.answers);
		} else if(type === 'string'){
			console.log(`Surver results: ${this.answers.join(', ')}`)
		}
	},
};

// survey.printResults('array');
// survey.printResults('string');

document
	.querySelector('#survey')
	.addEventListener('click', survey.logNewAnswer.bind(survey));

document
	.querySelector('#result')
	.addEventListener('click', survey.printResults.bind(survey, 'string'));


/*
survey.printResults.call({answers: survey.answers }, 'array');
survey.printResults.call({answers: survey.answers }, 'string');
*/
