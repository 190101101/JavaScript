console.log('My+name+is+Cookie'.split('+'));
console.log('Cookie the Cat'.split(' '));

const [firstName, lastName] = 'Cookie Cat'.split(' ');
console.log(firstName, lastName);

console.log(['Mr.', firstName, lastName.toUpperCase()].join(' '))