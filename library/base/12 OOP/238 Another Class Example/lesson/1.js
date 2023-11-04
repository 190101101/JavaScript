class Account{
	constructor(owner, currency, pin){
		this.owner = owner;
		this.currency = currency;
		this.pin = pin;
		this.transactions = [];
		// this.local = navigator.language;
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

const account1 = new Account('jack', 'USD', 1111);

account1.deposit(500);
account1.withdraw(100);

console.log(account1);
account1.requestLoan(10000);
console.log(account1);
