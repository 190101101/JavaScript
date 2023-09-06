'use strict';

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--temp');
const inputElevation = document.querySelector('.form__input--climb');


// console.log('https://www.google.com/maps/@40.4672919,49.8439513,16z?entry=ttu');

if(navigator.geoLocation){
	navigator.geoLocation.getCurrentPozition(
		function(pozition){
			const {latitude} = position.coords;
			const {longitude} = position.coords;
			console.log(`https://www.google.com/maps/@${latitude},${longitude},16z`);
		},

		function(){
			alert('nope');
		}
	);
}


