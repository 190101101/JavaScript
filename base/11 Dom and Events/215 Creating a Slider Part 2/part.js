//? 214 Creating a Slider Part 1.0

const slides = document.querySelectorAll(".slide");

slides.forEach((slide, index) => {
  slide.style.transform = `translateX(${index * 100}%)`;
});

let currentSlide = 0;
const countSlides = slides.length;
const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");

const moveToSlide = (currentSlide) => {
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${(index - currentSlide) * 100}%)`;
  });
};

// 1 - 0%, 2 - 100%, 3 - 200%, 4 - 300%,
btnRight.addEventListener("click", (e) => {
  currentSlide === countSlides - 1 ? (currentSlide = 0) : currentSlide++;
  moveToSlide(currentSlide);
});


//? 214 Creating a Slider Part 1.1

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;
const countSlides = slides.length;
const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");

const moveToSlide = (currentSlide) => {
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${(index - currentSlide) * 100}%)`;
  });
};

moveToSlide(0);

// 1 - 0%, 2 - 100%, 3 - 200%, 4 - 300%,
btnRight.addEventListener("click", (e) => {
  currentSlide === countSlides - 1 ? (currentSlide = 0) : currentSlide++;
  moveToSlide(currentSlide);
});

// 1 - 0%, 2 - 100%, 3 - 200%, 4 - 300%,
btnLeft.addEventListener("click", (e) => {
  currentSlide === 0 ? (currentSlide = countSlides - 1) : currentSlide--;
  moveToSlide(currentSlide);
});
