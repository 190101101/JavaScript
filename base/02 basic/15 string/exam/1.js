let text = 'this is text';

text = text.toUpperCase();
text = text.toLowerCase();
text = text.concat(' new ');
text = text.replace('new', 'old');
text = text.includes('old');

/*
*/
text = text.includes('new');
text = text.split(' ');
text = text.slice(-3);
text = text.substring(1, 5);
text = text[5];
text = text.indexOf('tex');
text = text.lastIndexOf('e');


console.log(text);