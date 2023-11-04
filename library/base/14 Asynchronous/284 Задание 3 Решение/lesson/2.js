
'use stric';

const wait = (seconds) => {
	return new Promise((resolve) => {
		setTimeout(resolve, seconds * 1000);
	});
}

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

const loadAndWait = async () => {
	try{
		//1
		let image = await createImageElement('images/img (1).jpg');
		console.log('first image loaded');
		await wait(1);
		image.style.display = 'none';

		//2
		image = await createImageElement('images/img (2).jpg');
		console.log('second image loaded');
		await wait(1);
		image.style.display = 'none';

		//3
		image = await createImageElement('images/img (3).jpg');
		console.log('third image loaded');
		await wait(1);
		image.style.display = 'none';
	}catch(e){
		console.log(e)
	}
}

const loadAllImages = async (imagePathsArray) => {
	try{
		const images = imagePathsArray.map(
			async imagePath => await createImageElement(imagePath)
		)
		const imageElements = await Promise.all(images);
		console.log(imageElements);

		imageElements.forEach(img => {
			img.classList.add('parallel');
		})

	} catch(e) {
		console.log(e);
	}
}

loadAllImages([
	'images/img (1).jpg',
	'images/img (2).jpg',
	'images/img (3).jpg'
]);