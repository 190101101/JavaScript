let result,weight,height;

weight = prompt('your weight ?');
height = prompt('your height ?');
result = weight / Math.pow(height, 2);

if(result < 18.5)
{
	alert(`Underweight : ${result}`);
}

if(result < 24.9){
	alert(`Normal weight: ${result}`);
}

if(result > 25){
	alert(`Overweight: ${result}`);
}
