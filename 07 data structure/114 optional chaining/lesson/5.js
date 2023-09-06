'use strict';

const posts = [
    {
        name: 'js is cool',
        username: 'ted',
    },
    {
        name: 'js is shit',
        username: 'dick',
    },
];

console.log(posts[0]?.name);
console.log(posts[0]?.username);

console.log(posts[1]?.name);
console.log(posts[1]?.username);

const users = [];
console.log(users[0]?.name ?? 'The array is empty');
console.log(users?.[0] ?? 'The array is empty');