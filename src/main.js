"use strict"

const viewElems = {}

const getDOMElem = id => {return document.getElementById(id);}

const conectHTMLElems = () => {
    viewElems.mainContainer = getDOMElem('mainContainer');
    viewElems.weatherSearchView = getDOMElem('weatherSearchView');
    viewElems.weatherForecastView = getDOMElem('weatherForecastView');

    viewElems.serchInput = getDOMElem('serchInput');
    viewElems.searchButton = getDOMElem('searchButton');

    viewElems.weatherCityContainer = getDOMElem('weatherCityContainer');
    viewElems.weatherCity = getDOMElem('weatherCity');
    viewElems.weatherIcon = getDOMElem('weatherIcon');

    viewElems.weatherCurrentTemp = getDOMElem('weatherCurrentTemp');
    viewElems.weatherMaxTemp = getDOMElem('weatherMaxTemp');
    viewElems.weatherMinTemp = getDOMElem('weatherMinTemp');

    viewElems.returnToSearchBtn = getDOMElem('returnToSearchBtn');
};
const setUpListeners = () => {
    viewElems.serchInput.addEventListener('keydown', onEnterSubmit);
    viewElems.serchButton.addEventListener('click', onClickSubmit);
}

const initializeApp = () => {
    conectHTMLElems();
    setUpListeners()
}

const onClickSubmit = () => {};
const onEnterSubmit = () => {};


document.addEventListener('DOMContentLoaded', initializeApp);