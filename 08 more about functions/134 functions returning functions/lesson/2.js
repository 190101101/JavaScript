const greet = greeting => name => console.log(`${greeting} ${name}`);;

greet('hi')('apsi');

const hi = greet('hi');
hi('cookie');
