class Account{
	constructor(owner, currency, pin){
		this.owner = owner;
		this.currency = currency;
		this._pin = pin;
		// protected property
		this._transactions = [];
		
		// this.local = navigator.language;
	}

	deposit(value){
		this._transactions.push(value);
	}

	withdraw(value){
		this.deposit(-value);
	}
	
	//protected methd with _
	_approveLoan(value){
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
