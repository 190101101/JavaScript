let userObj = {
	userJob: ['dev', 'sport']
};

let [dev, sport] = userObj.userJob;

[dev, sport] = [sport, dev];

console.log(dev);
console.log(sport);