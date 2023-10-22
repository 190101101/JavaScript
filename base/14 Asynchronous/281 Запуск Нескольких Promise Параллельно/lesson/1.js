'use stric';

const getCountryData = async (countryName) => {
	try{
		const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
		const data = await response.json();
		displayCountry(data[0]);
		return `You are in ${data[0].name.common}`;

	}catch(err){
		displayError(`Something wrong: ${err}`);
		throw err;
	}
}

const getDataAndConvertToJSON = (url, errorMessage = `Something wrong!`) => {
	return fetch(url).then(response => {
		if(!response.ok)
			throw new Error(`${errorMessage} ${response.status}`);
		return response.json();		
	});
}

const print3CountriesCapitals = async (c1, c2, c3) => {
	try{
		const [country1Data] = 
			await getDataAndConvertToJSON(`https://restcountries.com/v3.1/name/${c1}`);
		const [country2Data] = 
			await getDataAndConvertToJSON(`https://restcountries.com/v3.1/name/${c2}`);
		const [country3Data] = 
			await getDataAndConvertToJSON(`https://restcountries.com/v3.1/name/${c3}`);
			console.log([country1Data.capital, country2Data.capital, country3Data.capital]);

	} catch(e){
		console.log(e);
	}
}

print3CountriesCapitals('USA', 'Russia', 'Japan');