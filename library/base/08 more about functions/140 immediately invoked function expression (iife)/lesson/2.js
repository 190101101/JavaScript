(function(){
	console.log('You will never see this function call again');
})();

(() => console.log('You will never see this function call again'))();

let getName = 'Orxan';

(function(){
	console.log(`Hello ${getName}`);
})();
