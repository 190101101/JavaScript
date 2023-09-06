const account = {
	owner: 'kuki',
	transactions: [300, 500, -100, 600],

	LastTreansaction(){
		return this.transactions.slice(-1).pop();
	},
};

console.log(account.LastTreansaction());
