const questions = new Map([
	['name', 'Whats your name'],
	['age', 'how old are you'],
	['job', 'what are you doing?'],
]);

const answers = {
	name: undefined,
	age: undefined,
	job: undefined,
}

for(const [key, question] of questions){
	const answer = prompt(question);
	if (typeof key !== undefined){
		answers[key] = answer;
	}
}

console.log(answers);