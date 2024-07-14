'use stric';

const wait = (seconds) => {
	return new Promise((resolve) => {
		setTimeout(resolve, seconds * 1000);
	});
}

let currentImage;
const imageContainer = document.querySelector('.images');

const createImageElement = (imagePath) => {
	return new Promise((resolve, reject) => {
		const imgEl = document.createElement('img');
		imgEl.src = imagePath;
		imgEl.addEventListener('load', () => {
			imageContainer.append(imgEl);
			resolve(imgEl);
		});

		imgEl.addEventListener('error', () => {
			reject(new Error('image not found'));
		})
	});
}

createImageElement('images/img (1).jpg')
.then(image => {
	currentImage = image;
	console.log('first image loaded');
	return wait(1);
})
.then(() => {
	currentImage.style.display = 'none';
	return createImageElement('images/img (2).jpg');
})
.then(image => {
	currentImage = image;
	console.log('second image loaded');
	return wait(1);
})
.then(() => {
	currentImage.style.display = 'none';
	return createImageElement('images/img (3).jpg');
})
.then(image => {
	currentImage = image;
	console.log('third image loaded');
	return wait(1);
})
.then(() => {
	currentImage.style.display = 'none';
}).catch(error => console.log(error));
