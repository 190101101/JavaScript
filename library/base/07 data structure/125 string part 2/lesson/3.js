//replacing
const ticketPrice = '197,23$';
const newTicketPrice = ticketPrice.replace(',', '.').replace('$', '');
console.log(newTicketPrice);

const annoucement = 'All passengers of flight EG234 come to boarding door 18. Boarding door 18!';
const reAnnoucement = annoucement.replaceAll('door', 'gate');
console.log(reAnnoucement)

const reAnnoucementOld = annoucement.replace(/door/g, 'gate');
console.log(reAnnoucementOld)
