(function () {
	const h2 = document.querySelector('h2');
	h2.style.color = 'orange';

	h2.addEventListener('click', function(){
		h2.style.color = 'red';
	});
})();
