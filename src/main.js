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
    viewElems.returnToSearchBtn.addEventListener('click', switchView)
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
            console.log(data);
            switchView();
            fadeInOut();
        });
    }
}
const onClickSubmit = () => {
    fadeInOut();
    let query = viewElems.searchInput.value;
    getWeatherByCity(query)
    .then(data => {
        console.log(data);
        switchView();
        fadeInOut()
    });
};

const fadeInOut = () => {
    if (viewElems.mainContainer.style.opacity === '1' || viewElems.mainContainer.style.opacity === '') {
        viewElems.mainContainer.style.opacity = '0';
    } else {
        viewElems.mainContainer.style.opacity = '1'
    }
}

const switchView = () => {
    if (viewElems.weatherSearchView.style.display !== 'none') {
        viewElems.weatherSearchView.style.display = 'none';
        viewElems.weatherForecastView.style.display = 'initial';
    } else {
        viewElems.weatherSearchView.style.display = 'initial';
        viewElems.weatherForecastView.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', initializeApp); 