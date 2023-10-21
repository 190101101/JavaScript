const ticketPriceUS = '197,23 $';

console.log(ticketPriceUS);
console.log(ticketPriceUS.replace('$', ''));

const announcement = 'All passengers of flight EG234 come to boarding door. 18. Boarding door 18!';
console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate'));