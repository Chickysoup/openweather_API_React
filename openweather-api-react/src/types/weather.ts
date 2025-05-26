//interface defines what properties an object {} should have
export interface WeatherData {
    name: string
    main: {
        temp: number
        feelslike: number
        humidity: number
    }
    weather: [{ //array of objects, openweather uses this since one location might have multiple weather states
        main: string
        description: string
        icon: string
}]
}