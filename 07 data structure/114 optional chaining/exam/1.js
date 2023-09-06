const weekdays = [
    'mon',
    'tue',
    'wed',
    'thu',
    'fri',
    'sat',
    'sun',
];

const workingHours = {
    [weekdays[2]]: { open: 10, close: 23 },
    [weekdays[4]]: { open: 10, close: 23 },
    [weekdays[5]]: { open: 0, close: 24 },
    [weekdays[6]]: { open: 12, close: 0 },
};

const obj = {
	text: 'some text',
	language: 'JavaScript',
	type: 'front-end',
	colors: ['red', 'green', 'yellow'],
	color: 'red',
	workingHours,
	weekday(){
		return `today is wednesday`;
	}
};

// 1
console.log(obj?.color);
console.log(obj.colors?.[0]);

// 2
for(const [day, {open, close}] of Object.entries(obj.workingHours)){
	console.log(`Work day: ${day} - opens: ${open} closes: ${close}`);
}

// 3
for(const day of weekdays){
	open = obj.workingHours?.[day]?.open ?? 'never'
	console.log(`${day} : ${open}`);
}

// 4
console.log(obj.weekday?.());

// 5
console.log(obj.workingHours?.sat?.open);
