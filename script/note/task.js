//TODO 206 Event Propagation (Распространение событий);
//? currentTarget zencir vari parente qeder gedir.
//? target yalniz click olana aiddir
//? Propagation dayandir
//? currentTarget === this => true
//? EventListener - 3 cu param boolean qebul edir. eger true ise 1 ci faza da olur default olarak false olur. amma bu param artik kohnedir.

//Todo: 207 Event Delegation (делегирования событий);
//? 1. ümumi parent ucun event listener elave et.
//? 2. eget target olunmush element nav__link deyilse false
//? 3. target olunmush elementi mueyyen et


//Todo: 207 Moving Through the DOM (Перемещение по DOM)
//? ashagi dogru hereket (child)
//? yuxari dogru hereket (parent)
//? yaxin parente catmaq
//? yana doğru hərəkət
//? parentin childrenlerini getir
//? h1 , h2 taglar uzerinde numune goster

//Todo: 208 tabs
//? 1 tabs .operations__tab
//? 2 tabContainer .operations__tab-container
//? 3 tabContents .operations__content
//? 4 click olunmush parentin operations__tab tap
//? 5 operations__tab beraber deyilse cix
//? 6 tabs lari active ni remove etmek
//? 7 content ucun tekrarlar

// Todo: 209 Passing Arguments To Event Handlers
//? 1 target olunmushu yoxla nav__link classini
//? 2 umumi variable teyin et ve qonshu elementleri ondan cixart
//? 3 opacity 0.4 teyin et
//? 4 function yarat 2 dene over ve out onlari yaratdigin tek funca birleshdir.

//Todo: 211 inter section observer API 2 +
//? 1 document .header 
//? 2 document .nav
//? 3 nav in hundurluyu js in oz func ile 
//? 4 getStickyNav = (entries) => {} 
//? 5 const observer = new IntersectionObserver
//? 6 tamamla

//Todo: 212 Show Elements When Scrolling
//? 1 .section lari sec
//? 2 appearanceSection func yarat
//? 3 .section larin icinde observer i yoxla
//? 4 appearanceSection icinde section--hidden class remove et

//Todo: 214 Creating a Slider Part 1
//? 1 .slide classlari sec
//? 2 .btn right left classlari sec
//? 3 slide neceden bashlamalidi?
//? 4 slide saylari teyin et
//? 5 moveToSlide
//? 6 moveToSlide icinde slide leri listed et
//? 7 nece hereket edecek deye style ver.
//? 9 slide ni bashlat
//? 10 sag sol eventleri yarat
//? 11 event icinde ternari yol ile currentSlide... hell et

//Todo: 215 Creating a Slider Part 1
//? 1 .slide classlari sec +
//? 2 .btn right left classlari sec slider__btn--left, slider__btn--right +
//? 3 slide neceden bashlamalidi? +
//? 4 countSlides slide saylari teyin et +
//? 5 moveToSlide +
//? 6 moveToSlide icinde slide leri listed et +
//? 7 nece hereket edecek deye style ver. +
//? 9 slide ni bashlat +
//? 10 sag sol eventleri yarat +
//? 11 event icinde ternari yol ile currentSlide... hell et +
//? 12 next, prev slide func yarat +
//? 13 btn events lerin icinde cagir +
//? 14 arrow larla slide ni cevirmek +
//? 15 dotContainer .dots sec createDots func yarat
//? 16 icinde dots__dot button elave et ve attribute data-slide.
//? 17 activateCurrentDot yarat ve icinde dots__dot lari dots__dot--active remove
//? 18 activateCurrentDot icinde slide ni dots__dot--active et
//? 19 activateCurrentDot bashqa hereketlerdede cagir
//? 20 dotContainer event yarat dots__dot lara click edende
