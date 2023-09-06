const survey = {
    question: 'What programming language would you like to learn?',
    options: ['0: JavaScript', '1: Python', '2: Ruby', '3: Java', '4: C#'],
    answers: new Array(5).fill(0),
    vote(answer){
        if(typeof answer === 'number' && answer < this.answers.length && answer >= 0){
            this.answers[answer]++;
        }
    }
};


console.log(survey.question);
console.log(survey.options.join('\n'));


survey.vote(1);
survey.vote(4);
survey.vote(2);
survey.vote(3);
survey.vote(3);
survey.vote(3);
console.log(survey.answers);