const jack = {
	name: 'jack',
	weight: 79,
	height: 1.79,
	calcBmi: function(){
		this.bmi = (this.weight / Math.pow(this.height, 2)).toPrecision(4);
		return this.bmi;
	}
}

const mike = {
	name: 'mike',
	weight: 93,
	height: 1.93,
	calcBmi: function(){
		this.bmi = (this.weight / Math.pow(this.height, 2)).toPrecision(4);
		return this.bmi;
	}
}

jack.calcBmi();
mike.calcBmi();

if(jack.bmi > mike.bmi){
	console.log(`${jack.name} Bmi ${jack.bmi} is higher than ${mike.name} ${mike.bmi}`)
}
else if(jack.bmi < mike.bmi)
{
	console.log(`${jack.bmi} Bmi ${jack.name} is higher than ${jack.name} ${jack.bmi}`)
}else{
	console.log('bmi equal');
}

