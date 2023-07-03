import { getWeatherByCity } from './apiService.js';
import { mapListToDOMElems } from './DOMActions.js';

class WeatherApp {
    constructor() {
        this.viewElems = {};
        this.initializeApp();
    }

    initializeApp = () => {
        this.connectDOMElems();
        this.setupListeners();
    }

    connectDOMElems = () => {
        const listOfIds = Array.from(document.querySelectorAll('[id]')).map(elem => elem.id);
        this.viewElems = mapListToDOMElems(listOfIds);
    }

    setupListeners = () => {
        this.viewElems.searchInput.addEventListener('keydown', this.handleSubmit);
        this.viewElems.searchButton.addEventListener('click', this.handleSubmit);
        this.viewElems.returnToSearchBtn.addEventListener('click', this.returnToSearch);
    }

    handleSubmit = event => {
        if (event.type === 'click' || event.key === 'Enter') {
            this.fadeInOut();
            let query = this.viewElems.searchInput.value;
            getWeatherByCity(query).then(data => {
                this.displayWeatherData(data);
            }).catch(() => {
                this.switchView();
            })
        }
    }

    fadeInOut = () => {
        if (this.viewElems.mainContainer.style.opacity === '1' || this.viewElems.mainContainer.style.opacity === '') {
            this.viewElems.mainContainer.style.opacity = '0';
        } else {
            this.viewElems.mainContainer.style.opacity = '1';
        }
    }

    switchView = () => {
        if (this.viewElems.weatherSearchView.style.display !== 'none') {
            this.viewElems.weatherSearchView.style.display = 'none';
            this.viewElems.weatherForecastView.style.display = 'flex';
        } else {
            this.viewElems.weatherSearchView.style.display = 'flex';
            this.viewElems.weatherForecastView.style.display = 'none';
        }
    }

    returnToSearch = () => {
        this.fadeInOut()
        this.viewElems.searchInput.value = '';
        
        setTimeout(() => {
            this.switchView();
            this.fadeInOut();  
        }, 500)
    }

    displayWeatherData = data => {
        this.switchView();
        this.fadeInOut();

        const temp = data.main;
    
        this.viewElems.weatherCity.innerText = data.name;
        this.viewElems.weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        this.viewElems.weatherIcon.alt = data.weather[0].main;
        const currentTemp = (temp.temp - 273.15).toFixed(2);
        const maxTemp = (temp.temp_max - 273.15).toFixed(2);
        const minTemp = (temp.temp_min - 273.15).toFixed(2);
    
        this.viewElems.weatherCurrentTemp.innerText = `Temp: ${currentTemp} °C`;
        this.viewElems.weatherMaxTemp.innerText = `MAX: ${maxTemp} °C`;
        this.viewElems.weatherMinTemp.innerText = `MIN: ${minTemp} °C`;
    }
}

document.addEventListener('DOMContentLoaded', new WeatherApp); 
