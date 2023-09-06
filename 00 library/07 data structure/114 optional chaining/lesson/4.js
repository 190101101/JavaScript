'use strict'

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

console.log(posts[0]?.name ?? 'this post does not exist');
console.log(posts[1]?.name ?? 'this post does not exist');
console.log(posts[2]?.name ?? 'this post does not exist');

const users = [];
console.log(users[2]?.name ?? 'the aray is empty');

