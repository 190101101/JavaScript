const email = 'someemail@gmail.com';
const loginEmail = '  SomeEmail@Gmail.com \n';

const emailLower = loginEmail.toLowerCase();
const emailTrimmed = emailLower.trim();
console.log(emailTrimmed);

const emailNormalized = loginEmail.toLowerCase().trim();
console.log(emailNormalized);
