const printHumiditiesForecast = (arr) =>{
	let str = '';

	for(let i = 0; i < arr.length; i++){
		str += `${arr[i]}% in ${i + 1} days... `;
	}

	console.log(str)
}

let data1 = [49, 51, 63];
let data2 = [31, 29, 43, 58, 52];

printHumiditiesForecast(data1);