class Account{
	constructor(owner, currency, pin){
		this.owner = owner;
		this.currency = currency;
		this.pin = pin;
		this.transactions = [];
	}

	deposit(value){
		this.transactions.push(value);
	}

	withdraw(value){
		this.deposit(-value);
	}

	approveLoan(value){
		return true;
	}

	requestLoan(value){
		if(this.approveLoan(value)){
			this.deposit(value);
			console.log(`loan approved ${value}`);
		}
	}
}

const account1 = new Account('apsi', 'usd', 1111);
console.log(account1);
account1.deposit(10);
account1.deposit(15);
account1.deposit(19);
console.log(account1);
account1.withdraw(10);
console.log(account1);