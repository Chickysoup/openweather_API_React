import type { WeatherData } from '../types/weather'

interface WeatherCardProps {
    weatherData: WeatherData
}
//nothing to say here
export const WeatherCard = ({ weatherData}: WeatherCardProps) => {
    return (
        <div>
            <h2> Weather in {weatherData.name}</h2>
            <p>Temperature: {Math.round(weatherData.main.temp)}°C</p>
            <p>Description: {weatherData.weather[0].description}</p>
            <p>Humidity: {weatherData.main.humidity}%</p>
        </div>
    )
}