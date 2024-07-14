'use stric';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////////////////////////////

const request = new XMLHttpRequest();

request.open('GET', 'https://restcountries.com/v3.1/name/Azerbaijan');

request.send();

request.addEventListener('load', function() {
	const json = JSON.parse(this.responseText);
	console.log(json);
});
