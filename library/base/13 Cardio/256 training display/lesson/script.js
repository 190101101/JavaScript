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

    _setDescription(){
        this.description = this.type === 'running' ? 'пробежка ' : 'велотренировка ';
        this.description += new Intl.DateTimeFormat('ru-RU').format(this.date);
    }
}

class Running extends Workout{
    type = 'running';

    constructor(coords, distance, duration, temp){
        super(coords, distance, duration);
        this.temp = temp;
        this.calculatePace();
        this._setDescription();
    }

    calculatePace(){
        this.pace = this.duration / this.distance;
    }
}

class Cycling extends Workout{
    type = 'cycling';

    constructor(coords, distance, duration, climb){
        super(coords, distance, duration);
        this.climb = climb;
        this.calculateSpped();
        this._setDescription();
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

    _hideForm(){
        inputDistance.value = 
        inputDuration.value = 
        inputTemp.value = 
        inputClimb.value = '';
        form.classList.add('hidden');
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

        this._displayWorkout(workout);
        
        // отобразит тренировку в списке 
        this._displayWorkoutOnSiderbar(workout);

        // спрятать форму и очистить поля ввода данных 
        this._hideForm();
    }

    _displayWorkout(workout){
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
        .setPopupContent(`${workout.type === 'running' ? '🏃' : '🚵‍♂️'} ${workout.description}`)
        .openPopup();
    }

    _displayWorkoutOnSiderbar(workout){
        let html = `
            <li class="workout workout--${workout.type}" data-id="${workout.id}">
              <h2 class="workout__title">${workout.description}</h2>
              <div class="workout__details">
                <span class="workout__icon">${workout.type === 'running' ? '🏃' : '🚵‍♂️'}</span>
                <span class="workout__value">${workout.distance}</span>
                <span class="workout__unit">км</span>
              </div>
              <div class="workout__details">
                <span class="workout__icon">⏱</span>
                <span class="workout__value">${workout.duration}</span>
                <span class="workout__unit">мин</span>
              </div>`;

        if(workout.type === 'running'){
            html += `
            <div class="workout__details">
                <span class="workout__icon">📏⏱</span>
                <span class="workout__value">${workout.pace.toFixed(2)}</span>
                <span class="workout__unit">м/мин</span>
            </div>
            <div class="workout__details">
                <span class="workout__icon">👟⏱</span>
                <span class="workout__value">${workout.temp}</span>
                <span class="workout__unit">шаг/мин</span>
            </div>
            </li>`;
        }

        if(workout.type === 'cycling'){
            html += `
            <div class="workout__details">
                <span class="workout__icon">📏⏱</span>
                <span class="workout__value">${workout.speed.toFixed(2)}</span>
                <span class="workout__unit">км/ч</span>
            </div>
            <div class="workout__details">
                <span class="workout__icon">🏔</span>
                <span class="workout__value">${workout.climb}</span>
                <span class="workout__unit">м</span>
            </div>
            </li>`;
        }

        form.insertAdjacentHTML('afterend', html);
    }
}

const app = new App();

