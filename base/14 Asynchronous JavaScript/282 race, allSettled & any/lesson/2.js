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

Promise.allSettled([
	Promise.resolve('resolve'),
	Promise.reject('reject'),
	Promise.resolve('resolve'),
]).then(data => console.log(data));

//
Promise.all([
	Promise.resolve('resolve'),
	Promise.reject('reject'),
	Promise.resolve('resolve'),
])
.then(data => console.log(data))
.catch(e => console.log(e));

//
Promise.any([
	Promise.reject('1 reject'),
	Promise.resolve('2 resolve'),
	Promise.resolve('3 resolve'),
]).then(data => console.log(data));
