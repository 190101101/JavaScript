const getAverage = (x,y,z) => (x + y + z) / 3;

const dept1AverSales1 = getAverage(35467, 29842, 38501);
const dept2AverSales1 = getAverage(70533, 50121, 33889);
// console.log(dept1AverSales1, dept2AverSales1);

const dept1AverSales2 = getAverage(50301, 21984, 19207);
const dept2AverSales2 = getAverage(72381, 41562, 29465);
// console.log(dept1AverSales2, dept2AverSales2);

const printBonus = function(dept1AverSales, dept2AverSales){
	if(dept1AverSales > dept2AverSales && dept1AverSales >= 1.3 * dept2AverSales){
		const diff = dept1AverSales - dept2AverSales;
		const percent = diff / dept2AverSales * 100;
		if(percent >= 30){
			console.log(`Dept 1 will get a bonus of ${percent}%`);
		}

	} else if(dept2AverSales > dept1AverSales && dept2AverSales >= 1.3 * dept1AverSales){
		const diff = dept2AverSales - dept1AverSales;
		const percent = diff / dept1AverSales * 100;
		if(percent >= 30){
			console.log(`Dept 2 will get a bonus of ${percent}%`);
		}
	} else {
		console.log(`No bonus in this quarter`);
	}
}

printBonus(dept1AverSales1, dept2AverSales1);
printBonus(dept1AverSales2, dept2AverSales2);