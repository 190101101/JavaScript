const text = function(text){
	this.text = text.toUpperCase();
}

const obj = {
	text: undefined,
	upperText: function(text){
		this.text = text.toUpperCase();
	}
};

const newText = obj.upperText.bind(obj);
newText('hello world');
console.log(obj);

text.call(obj, 'new text');
console.log(obj);
