'use stric';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////////////////////////////

const getCountryData = function(countryName){

	const request = new XMLHttpRequest();

	request.open('GET', `https://restcountries.com/v3.1/name/${countryName}`);

	request.send();

	request.addEventListener('load', function() {
		const [data] = JSON.parse(this.responseText);
		console.log(data);

		const currencies = data.currencies;
		const currencyName = Object.values(currencies)[0].name;
		const currencySumbol = Object.values(currencies)[0].symbol;

		const languages = data.languages;
		const firstLanguage = Object.values(languages)[0];

		const html = `
			<article class="country">
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

	});
}

// getCountryData('Ukraine');


/////////////////////////////////////////////////////////////////////////
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

getCountryAndBorderCountries('Qatar');

// Callback hell
setTimeout(() => {
	console.log('1 seconds have passed');
	setTimeout(() => {
		console.log('2 seconds have passed');
		setTimeout(() => {
			console.log('3 seconds have passed');
		}, 1000);
	}, 1000);
}, 1000);
