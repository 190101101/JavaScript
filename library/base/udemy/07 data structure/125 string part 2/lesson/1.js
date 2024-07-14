const airline = 'SkyUp';
const airplane = 'Boeing 737';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

const passengerName = 'liNDa';
const passengerNameLower = passengerName.toLowerCase();
const passengerNameFixed = passengerNameLower[0].toUpperCase() + passengerNameLower.slice(1);
console.log(passengerNameFixed)