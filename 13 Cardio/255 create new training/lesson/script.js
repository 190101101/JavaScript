'use strict';

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputTemp = document.querySelector('.form__input--temp');
const inputClimb = document.querySelector('.form__input--climb');

class Workout{
    date = new Date();
    id = (Date.now() + '').slice(-10);
    
    constructor(coords, distance, duration){
        this.coords = coords;
        this.distance = distance;
        this.duration = duration;
    }
}

class Running extends Workout{
    type = 'running';

    constructor(coords, distance, duration, temp){
        super(coords, distance, duration);
        this.temp = temp;
        this.calculatePace();
    }

    calculatePace(){
        this.pase = this.duration / this.distance;
    }
}

class Cycling extends Workout{
    type = 'cycling';

    constructor(coords, distance, duration, climb){
        super(coords, distance, duration);
        this.climb = climb;
        this.calculateSpped();
    }

    calculateSpped(){
        this.speed = this.distance / this.duration / 60;
    }
}

class App{
    #map;
    #mapEvent;
    #workouts = [];
        
    constructor(){
        this._getPosition();
        form.addEventListener('submit', this._newWorkout.bind(this));
        inputType.addEventListener('change', this._toggleClimbField.bind(this));
    }

    _getPosition(){
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                this._loadMap.bind(this),    
            )
        }
    }
    
    _loadMap(position){
        const {latitude} = position.coords;
        const {longitude} = position.coords;

        // const coords = [latitude, longitude];
        const coords = ['40.4672919', '49.8439513'];
        this.#map = L.map('map').setView(coords, 14);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.#map);

        // обработка клика на карте
        this.#map.on('click', this._showForm.bind(this));
    }
    
    _showForm(e){
        this.#mapEvent = e;
        form.classList.remove('hidden');
        inputDistance.focus();
    }

    _toggleClimbField(){
        inputClimb.closest('.form__row').classList.toggle('form__row--hidden');
        inputTemp.closest('.form__row').classList.toggle('form__row--hidden');
    }
    
    _newWorkout(e){

        const areNumbers = (...numbers) => 
            numbers.every(num => Number.isFinite(num))

        const areNumbersPositive = (...numbers) => 
            numbers.every(num => num > 0);

        e.preventDefault();

        const {lat, lng} = this.#mapEvent.latlng;
        let workout;

        // получить данные из формы 
        const type = inputType.value;
        const distance = + inputDistance.value;
        const duration = + inputDuration.value;

        // если тренировка является пробежкой, создать объект running
        if(type === 'running'){
            const temp = +inputTemp.value;

            // проверка валидности данных 
            if(!areNumbers(distance, duration, temp) || 
                !areNumbersPositive(distance, duration, temp)) 
                return alert('введите положительное число ');

            workout = new Running([lat, lng], distance, duration, temp);
        }

        // если тренировка является велотренировкой , создать объект cycling
        if(type === 'cycling'){
            const climb = +inputClimb.value;

            // проверка валидности данных 
            if(!areNumbers(distance, duration, climb) || 
                !areNumbersPositive(distance, duration)) 
                return alert('введите положительное число ');

            workout = new Cycling([lat, lng], distance, duration, climb);
        }

        // добавить новый объект в массив тренировок 
        this.#workouts.push(workout);
        console.log(workout);

        this.displayWorkout(workout);
        
        
        // отобразит тренировку в списке 

        // спрятать форму и очистить поля ввода данных 
        inputDistance.value = inputDuration.value = inputTemp.value = inputClimb.value = '';

    }

    displayWorkout(workout){
        // отобразит тренировку на карте 
        L.marker(workout.coords)
        .addTo(this.#map)
        .bindPopup(L.popup({
            maxWidth:200,
            minWidth:100,
            autoClose:false,
            closeOnClick:false,
            className: `${workout.type}-popup`,
        }))
        .setPopupContent('training')
        .openPopup();
    }
}

const app = new App();

