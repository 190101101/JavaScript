
const account = {
	owner: 'kuki',
	transactions: [300, 500, -100, 600],

	get lastTreansaction(){
		return this.transactions.slice(-1).pop();
	},

	set lastTreansaction(trans){
		this.transactions.push(trans);
	},
};

account.lastTreansaction = 101;
console.log(account.lastTreansaction);