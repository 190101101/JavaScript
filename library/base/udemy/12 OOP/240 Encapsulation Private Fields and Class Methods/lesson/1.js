class Account{
	
	//public
	// transactions = [];
	
	// private
	#transactions = [];
	#pin;

	constructor(owner, currency, pin){
		this.owner = owner;
		this.currency = currency;
		this.#pin = pin;
	}

	deposit(value){
		this.#transactions.push(value);
	}

	withdraw(value){
		this.deposit(-value);
	}
	
	getTransactions(){
		return this.#transactions;
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

	setDefaultPin(){
		this.#pin = 2222;
	}

	getPin(){
		return this.#pin;
	}
}

const account1 = new Account('jack', 'USD', 1111);

account1.deposit(10);
account1.deposit(20);

console.log(account1);
console.log(account1.getTransactions());

account1.setDefaultPin();

console.log(account1.getPin());
