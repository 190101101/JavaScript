const toLower = (name) => name.toLowerCase();
const newPerson = toLower.bind();
console.log(newPerson('apsi'));
