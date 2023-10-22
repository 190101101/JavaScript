'use stric';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');


const displayError = (message) => {
	countriesContainer.insertAdjacentText('beforeend', message);
	countriesContainer.style.opacity = 1;
}

const displayCountry = function(data, className = '') {

	const currencies = data.currencies;
	const currencyName = Object.values(currencies)[0].name;
	const currencySumbol = Object.values(currencies)[0].symbol;

	const languages = data.languages;
	const firstLanguage = Object.values(languages)[0];

	const html = `
		<article class="country ${className}">
			<img class="country__img" src="${data.flags.png}">
			<div class="country__data">
				<h3 class="country__name">${data.name.common}</h3>
				<h4 class="country__region">${data.region}</h4>
				<p class="country__row"><span>${(+data.population / 1000000).toFixed(2)} million</span></p>
				<p class="country__row"><span>${firstLanguage}</span></p>
				<p class="country__row"><span>${currencySumbol} ${currencyName}</span></p>
			</div>
		</article>
	`;

	countriesContainer.insertAdjacentHTML('beforeend', html);
	countriesContainer.style.opacity = 1;
}

const getCountryAndBorderCountries = function(countryName){

	const request1 = new XMLHttpRequest();
	request1.open('GET', `https://restcountries.com/v3.1/name/${countryName}`);
	request1.send();

	request1.addEventListener('load', function() {
		const [data1] = JSON.parse(this.responseText);
		displayCountry(data1);

		const [firstNeighbour] = data1.borders;

		if(!firstNeighbour) return;

		//Neighbour
		const request2 = new XMLHttpRequest();
		request2.open('GET', `https://restcountries.com/v3.1/alpha/${firstNeighbour}`);
		request2.send();

		request2.addEventListener('load', function() {
			const [data2] = JSON.parse(this.responseText);
			displayCountry(data2, 'neighbour');
		});
	});
}

const getDataAndConvertToJSON = (url, errorMessage = `Something wrong!`) => {
	return fetch(url).then(response => {
		if(!response.ok)
			throw new Error(`${errorMessage} ${response.status}`);
		return response.json();		
	});
}

const getCountryData = function (countryName){
	getDataAndConvertToJSON(`https://restcountries.com/v3.1/name/${countryName}`)
	.then(data => {
		displayCountry(data[0]);
		console.log(data[0]);

		if(!data[0].borders)
			throw new Error(`neighbour not found`);

		const firstNeighbour = data[0].borders[0];

		return getDataAndConvertToJSON(`https://restcountries.com/v3.1/alpha/${firstNeighbour}`, 'country not found');
	})
	.then(data => displayCountry(data[0], 'neighbour'))
	.catch(e => {
		displayError(`Something error: ${e.message}`);
	}).finally(() => {
		countriesContainer.style.opacity = 1;
	});
};

/*
btn.addEventListener('click', () => {
	getCountryData('Ukraine');
})
*/

const getUserPosition = () => {
	return new Promise((resolve, reject) => {
		navigator.geolocation.getCurrentPosition(
			position => resolve(position), 
			e => console.log(e)
		);
	})
}

getUserPosition();