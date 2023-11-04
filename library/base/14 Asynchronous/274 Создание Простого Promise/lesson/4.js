const wait = (seconds) => {
	return new Promise((resolve) => {
		setTimeout(resolve, seconds * 1000);
	})
}

wait(1)
	.then(() => {
		console.log('waiting 1 seconds');
		return wait(1);
	})
	.then(() => {
		console.log('waiting 2 seconds');
		return wait(1);
	})
	.then(() => {
		console.log('waiting 3 seconds');
		return wait(1);
	})
	.then(() => {
		console.log('waiting 4 seconds');
		return wait(1);
	});