import { useState } from 'react'
import type { WeatherData } from './types/weather'
import { getWeatherByCity } from './services/weatherAPI'
import { SearchForm } from './components/SearchForm'
import { WeatherCard } from './components/WeatherCard'
import { Loading } from './components/Loading'

function App() {
  //state to store weather data
  //<WeatherData | null> means the type is either WeatherData or null, starts as null
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null)

  //state to track loading state
  const [isLoading, setIsLoading] = useState(false)

  const [error, setError] = useState('')

  //function called when user submits form
  const handleSearch = async( cityName: string) => {
    setIsLoading(true)  //sets loading state
    setError('')      
    setWeatherData(null) 

    try {
      //call async function
      const data = await getWeatherByCity(cityName)
      setWeatherData(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div>
      <h1>Weather App</h1>
      <SearchForm onSearch={handleSearch} isLoading={isLoading} />

      {/* && syntax is special */}
      {/* left of && will render no matter what, but right will only render if left is true */}
      {/* if isloading is false, nothing will render */}
      {isLoading && <Loading />}
      {error && <p>{error}</p>}
      {weatherData && <WeatherCard weatherData={weatherData} />}
    </div>
  )
}
export default App
