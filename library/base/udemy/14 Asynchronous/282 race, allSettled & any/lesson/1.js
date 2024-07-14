'use stric';

const getDataAndConvertToJSON = (url, errorMessage = `Something wrong!`) => {
	return fetch(url).then(response => {
		if(!response.ok)
			throw new Error(`${errorMessage} ${response.status}`);
		return response.json();		
	});
}

const print3CountriesCapitals = async (c1, c2, c3) => {
	try{
		const countriesData = await Promise.all([
			getDataAndConvertToJSON(`https://restcountries.com/v3.1/name/${c1}`),
			getDataAndConvertToJSON(`https://restcountries.com/v3.1/name/${c2}`),
			getDataAndConvertToJSON(`https://restcountries.com/v3.1/name/${c3}`),
		]);
		console.log(countriesData.map(countryData => countryData[0].capital));

	} catch(e){
		console.log(e);
	}
}


//race, allSettled, any

(async () => {
	const response = await Promise.race([
		getDataAndConvertToJSON(`https://restcountries.com/v3.1/name/USA`),
		getDataAndConvertToJSON(`https://restcountries.com/v3.1/name/Japan`),
		getDataAndConvertToJSON(`https://restcountries.com/v3.1/name/Spain`),
	]);
	console.log(response[0]);
})()

/////////
const timeout = (seconds) => {
	return new Promise((_, reject) => {
		setTimeout(() => {
			reject(new Error(`time problem`));
		}, seconds * 1000);
	})
}

Promise.race([
	getDataAndConvertToJSON(`https://restcountries.com/v3.1/name/USA`),
	getDataAndConvertToJSON(`https://restcountries.com/v3.1/name/Japan`),
	getDataAndConvertToJSON(`https://restcountries.com/v3.1/name/Spain`),
	timeout(1)
])
.then(data => console.log(data))
.catch(e => console.log(e));
