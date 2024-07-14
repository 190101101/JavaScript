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

getCountryData('USA')
	.then(place => console.log(place))
	.catch(e => console.log(e));


/*
(async () => {
	try{
		const place = await getCountryData();
		console.log(`2 ${place}`);
	}catch(err){
		console.error(`2 ${err.message}`);
	}
	console.log(`3 get location`);
})();
*/
