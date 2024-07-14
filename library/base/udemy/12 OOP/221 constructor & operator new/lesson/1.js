'use strict';

const Person = function(name, year){
	this.name = name;
	this.year = year;
}

const kuki = new Person('kuki', 2015);
const apsi = new Person('apsi', 2009);

console.log(kuki.name);
console.log(kuki.year);

console.log(apsi.name);
console.log(apsi.year);

// 1. создается новый пустов объект 
// 2. вызывается функция, this = {}
// 3. {} связывается с прототипом
// 4. функция автоматически возвращает {}
// 5. у стрелочный функции нет слово this