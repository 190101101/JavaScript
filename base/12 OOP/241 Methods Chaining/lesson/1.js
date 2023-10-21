class Account{

	#transactions = [];
	#pin;

	constructor(owner, currency, pin){
		this.owner = owner;
		this.currency = currency;
		this.#pin = pin;
	}

	deposit(value){
		this.#transactions.push(value);
		return this;
	}

	withdraw(value){
		this.deposit(-value);
		return this;
	}
	
	getTransactions(){
		return this.#transactions;
	}

	#approveLoan(value){
		return true;
	}

	requestLoan(value){
		if(this.#approveLoan(value)){
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

	static greet(){
		console.log('welcome to bank');
	}
}

const account1 = new Account('jack', 'USD', 1111);

console.log(account1.deposit(10).deposit(20).withdraw(5).getTransactions());
