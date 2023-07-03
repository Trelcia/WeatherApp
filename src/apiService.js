export const getWeatherByCity = city => {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},pl&appid=413dd34c402051f171bc44dc76b25d22`)
    .then(resp => resp.json())
    .then(data => data)
}