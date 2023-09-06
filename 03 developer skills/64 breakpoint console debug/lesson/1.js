const celciusToKelvin = () => {
	const measurement = {
		type: 'temp',
		unit: 'celcius',
		value: Number(prompt('temperature in celcius: '))
	}

	console.table(measurement);

	const kelvin = measurement.value + 273;
	return kelvin;
}

console.log(celciusToKelvin());