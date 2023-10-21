const getName = (name) => { return name};
console.log(getName('cookie'));

/*-----------------*/
const getInfo = (name, age) => { 
	return `my name is ${name} and me ${age}`;
};
console.log(getInfo('cookie', 6));

/*-----------------*/
const getAgeDiff = (age1, age2) => age1 - age2;
console.log(getAgeDiff(31, 6));

/*-----------------*/
const getAgeDiff2 = (age1) => age1;
console.log(getAgeDiff2(31));
