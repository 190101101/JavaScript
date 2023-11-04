'use stric';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////////////////////////////

const request = new XMLHttpRequest();

request.open('GET', 'https://restcountries.com/v3.1/name/Azerbaijan');

request.send();

request.addEventListener('load', function() {
	const [data] = JSON.parse(this.responseText);
	console.log(data);

	const html = `
		<article class="country">
			<img class="country__img" src="${data.flags.png}">
			<div class="country__data">
				<h3 class="country__name">${data.name.common}</h3>
				<h4 class="country__region">${data.region}</h4>
				<p class="country__row">population: <span>${(+data.population / 1000000).toFixed(2)} million</span></p>
				<p class="country__row">languages: <span>${data.languages.aze}</span></p>
				<p class="country__row">currencies: <span>${data.currencies.AZN.symbol}</span></p>
			</div>
		</article>
	`;

	countriesContainer.insertAdjacentHTML('beforeend', html);
	countriesContainer.style.opacity = 1;

});
