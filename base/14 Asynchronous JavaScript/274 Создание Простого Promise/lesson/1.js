const lotteryPromise = new Promise((resolve, reject) => {
	console.log('lottery games');
	setTimeout(() => {
		if(Math.random() > 0.5){
		resolve('you win');
		}else{
			reject(new Error('you loss'));
		}
	}, 2000)
})

lotteryPromise
.then(resolve => console.log(resolve))
.catch(err => console.log(err));



