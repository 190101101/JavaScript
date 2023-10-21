// Test Data:
// [7, 1, 4]
// [3, 6, 9, 2, 5, 4, 4]

const survey = {
	question: 'What programming language would you like to learn?',
	options: ['0: JavaScript', '1: Python', '2: Ruby', '3: Java', '4: C#'],
	answers: new Array(5).fill(0),
	logNewAnswer(answer){
		if(typeof answer === 'number' && this.options[answer]){
			this.answers[answer]++;
		}
	}
};

survey.logNewAnswer(1);
survey.logNewAnswer(3);
survey.logNewAnswer(3);

console.log(survey.answers);