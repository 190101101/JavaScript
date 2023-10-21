const humidities1 = [32, 45, 29, 19, 'error', 58, 71, 47, 33, 42, 51, 49];
const humidities2 = [11, 22, 33, 44, 55, 66, 77, 88, 99];

const calculateHumiditiesAmplitudeTwoArrays = (arr1, arr2) => {
	let humidities = arr1.concat(arr2);
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

console.log(calculateHumiditiesAmplitudeTwoArrays(humidities1, humidities2));
