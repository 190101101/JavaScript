// 1
const arr = [1,2,3,4];
console.log(...arr);


// 2
const object = {
	colors: ['red', 'green'],
	nested: [1,2,3, [4,5,6]],
	color: [],
};
const [c1, c2] = object.colors;
console.log(c1, c2);

// 3
let [p1, p2] = object.colors;
console.log(p1, p2);
[p2, p1] = [p1, p2];
console.log(p1, p2);

// 4
const [q1, q2, q3, [w1, w2, w3]] = object.nested;
console.log(q1, q2, q3,w1, w2, w3);

// 5
const [d1='color 1', d2='color 2'] = object.color;
console.log(d1, d2);
