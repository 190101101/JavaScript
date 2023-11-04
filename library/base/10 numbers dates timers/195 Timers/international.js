const p1 = 225458478.21;

const options = {
  // style: "unit",
  style: "currency",
  // unit: "mile-per-hour",
  // unit: "celsius",
  currency: "EUR",
};

console.log("US", new Intl.NumberFormat("en-US", options).format(p1));
console.log("UK", new Intl.NumberFormat("uk-UA", options).format(p1));
console.log("RU", new Intl.NumberFormat("ru-RU", options).format(p1));
console.log("GR", new Intl.NumberFormat("de-DE", options).format(p1));
console.log("SY", new Intl.NumberFormat("ar-SY", options).format(p1));
