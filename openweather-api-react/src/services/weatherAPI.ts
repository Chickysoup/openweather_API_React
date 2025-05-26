import type { WeatherData } from '../types/weather'
//use import type in typescript to tell typescript this is only used for typechecking, not for running

//Base URL Openweather API
const BASEURL = 'https://api.openweathermap.org/data/2.5/weather'
const API_KEY =  import.meta.env.VITE_OPENWEATHER_API_KEY
//every api needs a baseurl as an endpoint and an api key to access data

//async function
export const getWeatherByCity = async (cityName: string): Promise<WeatherData> => {


    //constructs API URL with params
    const url = `${BASEURL}?q=${cityName}&appid=${API_KEY}&units=metric`


    //checks for successful response
    try {
        const response = await fetch(url)

        if(!response.ok) {
           throw new Error(`Weather data not found for "${cityName}"`)
        }
    //parses json data, returns typed WeatherData object    
    const data: WeatherData = await response.json()
    return data
    }   catch (error) {
        //re-throws error with message
        throw new Error(error instanceof Error ? error.message : 'Something went wrong')
        }
    }

