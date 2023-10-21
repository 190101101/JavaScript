const calculateTips = bill => bill < 20 ? bill * 0.2 : 0.15; 

const calculateAverage = (arr) => {
	let sum = false;
	for(i = 0; i < arr.length; i++) sum += arr[i];
	return sum / arr.length;
};

const bills = [31, 95, 276, 540, 27, 205, 11, 1180, 96, 57];
let tips = [];
let totalBills = [];
let average = calculateAverage(bills);

for(i = 0; i < bills.length; i++){
	tip = calculateTips(bills[i]);
	tips.push(bills[i]);
	totalBills.push(bills[i] + tip);
}

console.log(tips);
console.log(totalBills);
console.log(average);
