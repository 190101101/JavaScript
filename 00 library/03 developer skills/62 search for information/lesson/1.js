const humidities = [32, 45, 29, 19, 'error', 58, 71, 47, 33, 42, 51, 49];
console.log(humidities)

const calculateHumiditiesAmplitude = (humidities) => {
	let max = humidities[0];
	let min = humidities[0];

	for(let i = 0; i < humidities.length; i++){
		const currentHimidity = humidities[i];
		if(typeof currentHimidity !== 'number') continue;
		if(currentHimidity > max) max = currentHimidity;
		if(currentHimidity < min) min = currentHimidity;
	}
	return max - min;
}


console.log(calculateHumiditiesAmplitude(humidities));
