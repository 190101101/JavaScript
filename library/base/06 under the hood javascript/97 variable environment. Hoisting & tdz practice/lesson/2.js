console.log(declSum(11, 13));
// console.log(exprSum(11, 13)); // Cannot access 'exprSum' before initialization
// console.log(arrSum(11, 13)); // Cannot access 'arrSum' before initialization

function declSum(a, b){
	return a + b;
}

const exprSum = function(a, b){
	return a + b;
}

const arrSum = (a, b) => a + b;
