import { useState } from "react"

//defines props for this component
interface SearchFormProps {
    //onSearch is a function, takes string, returns nothing
    //function notation fName: (asdf: datatype) => returntype
    onSearch: (cityName: string) => void
    isLoading: boolean
}

//function with destructuring & typescript typing ({ asdf, dfgh} : interfaceName )
export const SearchForm = ({ onSearch, isLoading }: SearchFormProps) => {
    //state to track user input
    const [cityName, setCityName] = useState('')

    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        //e is short for event, contains info about form submission in this case
        //ex: console.log(e.type) will print submit, also can do e.target, e.timestamp

        //React.FormEvent is a typescript type, helps with typing and autocomplete

        e.preventDefault() //prevents page refresh from browser

        if (cityName.trim() && !isLoading) {
            onSearch(cityName.trim())
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={cityName}
                onChange={(e) => setCityName(e.target.value)} //updates state
                placeholder="Enter city name"
                disabled={isLoading}
            />
            <button type="submit" disabled={isLoading || !cityName.trim()}>
                {isLoading ? 'Loading...' : 'Search'}
            </button>
        </form>
)

}

