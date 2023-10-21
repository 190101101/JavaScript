const airline1 = {}

//
airline1.airplanes = 200;
airline1.purchaseAirplane = function(){
	this.airplanes++;
	console.log(this);
	console.log(this.airplanes);
}

// airline1.purchaseAirplane();

document
	.querySelector('#purchase')
	.addEventListener('click', airline1.purchaseAirplane.bind(airline1));
