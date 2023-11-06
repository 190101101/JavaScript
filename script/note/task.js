//TODO 206 Event Propagation (Распространение событий);
//? currentTarget zencir vari parente qeder gedir.
//? target yalniz click olana aiddir
//? Propagation dayandirmaq ucun e.stopPropagation()
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