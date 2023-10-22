const wait = (seconds) => {
	return new Promise((resolve) => {
		setTimeout(resolve, seconds * 1000);
	});
}

wait(1)
	.then(() => {
		console.log('waiting 1 second');
		return wait(1);
	})
	.then(() => {
		console.log('waiting 2 second');
		return wait(1);
	})
	.then(() => {
		console.log('waiting 3 second');
		return wait(1);
	})
	.then(() => {
		console.log('waiting 4 second');
		return wait(1);
	})

Promise.resolve('Resolved!').then(resolve => console.log(resolve));
Promise.reject(new Error('Rejected!')).catch(err => console.log(err));