console.log('start test');

setTimeout(() => {
	console.log('taymer 0 sec');
}, 0);

Promise.resolve('promise 1').then(result => console.log(result));
Promise.resolve('promise 2').then(result => {
	for(let i = 0; i < 1000000000; i++){}
	console.log(result);
});

console.log('end test');
