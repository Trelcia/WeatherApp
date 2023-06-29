export const getWeatherByCity = city => {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},pl&appid=413dd34c402051f171bc44dc76b25d22`)
    .then(resp => resp.json())
    .then(data => data.main)
    .then(weather => {
        const tempNow = Math.round(weather.temp - 273.15) + '°C'
        const tempMax = Math.round(weather.temp_max - 273.15) + '°C'
        const tempMin = Math.round(weather.temp_min - 273.15) + '°C'

        const temp = [
            tempNow,
            tempMax,
            tempMin,
        ]
        return (temp)
    })
}