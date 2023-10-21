const airline = 'SkyUp Airline';
const airplane = 'Boeing 737';

console.log(airplane.toLowerCase());
console.log(airplane.toUpperCase());

// Fix the passenger name
const passengerName = 'liNDa';
const textLower = passengerName.toLowerCase();
const textNormal = textLower.slice(0, 1).toUpperCase() + textLower.slice(1);
console.log(textNormal);


const email = 'someemail@gmail.com';
const loginEmail = '  SomeEmail@Gmail.com ';

const normalEmail = loginEmail.trim().toLowerCase();
console.log(normalEmail);
console.log(email === normalEmail);

