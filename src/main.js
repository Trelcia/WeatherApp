import { getWeatherByCity } from './apiService.js';

const viewElems = {}

const getDOMElem = id => {return document.getElementById(id);}

const conectHTMLElems = () => {
    viewElems.mainContainer = getDOMElem('mainContainer');
    viewElems.weatherSearchView = getDOMElem('weatherSearchView');
    viewElems.weatherForecastView = getDOMElem('weatherForecastView');

    viewElems.searchInput = getDOMElem('searchInput');
    viewElems.searchButton = getDOMElem('searchButton');

    viewElems.weatherCityContainer = getDOMElem('weatherCityContainer');
    viewElems.weatherCity = getDOMElem('weatherCity');
    viewElems.weatherIcon = getDOMElem('weatherIcon');

    viewElems.weatherCurrentTemp = getDOMElem('weatherCurrentTemp');
    viewElems.weatherMaxTemp = getDOMElem('weatherMaxTemp');
    viewElems.weatherMinTemp = getDOMElem('weatherMinTemp');

    viewElems.returnToSearchBtn = getDOMElem('returnToSearchBtn');
}

const setupListeners = () => {
    viewElems.searchInput.addEventListener('keydown', onEnterSubmit);
    viewElems.searchButton.addEventListener('click', onClickSubmit);
    viewElems.returnToSearchBtn.addEventListener('click', returnToSearch);
}

const initializeApp = () => {
    conectHTMLElems();
    setupListeners()
}

const onEnterSubmit = event => {
    if(event.key === 'Enter') {
        fadeInOut();
            let query = viewElems.searchInput.value;
            getWeatherByCity(query)
            .then(data => {
                displayWeatherData(data);
            });
    }
}
const onClickSubmit = () => {
    fadeInOut();
        let query = viewElems.searchInput.value;
        getWeatherByCity(query)
        .then(data => {
            displayWeatherData(data);
        });
};

const displayWeatherData = data => {
    switchView();
    fadeInOut();

    console.log(data);
    const temp = data.main;

    viewElems.weatherCity.innerText = data.name;
    viewElems.weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    viewElems.weatherIcon.alt = data.weather[0].main;
    const currentTemp = (temp.temp - 273.15).toFixed(2);
    const maxTemp = (temp.temp_max - 273.15).toFixed(2);
    const minTemp = (temp.temp_min - 273.15).toFixed(2);

    viewElems.weatherCurrentTemp.innerText = `Temp: ${currentTemp} °C`;
    viewElems.weatherMaxTemp.innerText = `MAX: ${maxTemp} °C`;
    viewElems.weatherMinTemp.innerText = `MIN: ${minTemp} °C`;
}


const fadeInOut = () => {
    if (viewElems.mainContainer.style.opacity === '1' || viewElems.mainContainer.style.opacity === '') {
        viewElems.mainContainer.style.opacity = '0';
    } else {
        viewElems.mainContainer.style.opacity = '1';
    }
}

const switchView = () => {
    if (viewElems.weatherSearchView.style.display !== 'none') {
        viewElems.weatherSearchView.style.display = 'none';
        viewElems.weatherForecastView.style.display = 'flex';
    } else {
        viewElems.weatherSearchView.style.display = 'flex';
        viewElems.weatherForecastView.style.display = 'none';
    }
}

const returnToSearch = () => {
    fadeInOut()

    setTimeout(() => {
        switchView();
        fadeInOut();  
    }, 500)
}


document.addEventListener('DOMContentLoaded', initializeApp); 