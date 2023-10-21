const survey = {
	question: 'What programming language would you like to learn?',
	options: ['0: JavaScript', '1: Python', '2: Ruby', '3: Java', '4: C#'],
	answers: new Array(5).fill(0),
	logNewAnswer(){
		const answer = Number(prompt(`${this.question}\n${this.options.join('\n')}\n(Enter option number)`));
		if(typeof answer === 'number' && answer >= 0 && answer < this.answers.length){
			this.answers[answer]++;
		}
		console.log(this.answers);
	},
	printResults(type = 'array'){
		if(type === 'array'){
			console.log(this.answers);
		}else{
			console.log(`Survey results: ${this.answers.join(', ')}`);
		}
	}
};

document
	.querySelector('#survey')
	.addEventListener('click', survey.logNewAnswer.bind(survey));

document
	.querySelector('#result')
	.addEventListener('click', survey.printResults.bind(survey));

// how do this?
survey.printResults.call([{answers: [1,2,3,4]}, 'array']);
survey.printResults.call([{answers: [1,2,3,4]}, 'string']);