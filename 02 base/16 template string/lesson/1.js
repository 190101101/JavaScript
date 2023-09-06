const brand = 'toyoto';
let carHtml;

//old approach(before ES6)
carHtml = '<h3>' + brand + '</h3>';
console.log(carHtml)

//new approach
carHtml = `<h3> ${brand} </h3>`;
console.log(carHtml)
