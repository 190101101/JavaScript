let arr = [Number, Boolean, String, Symbol(), Function, Object, NaN, null, undefined];

let newArr = [];
for (let i = 1; i < arr.length; i++){
	newArr[i] = typeof arr[i];
}
console.log(newArr)