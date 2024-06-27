import { useTheme } from '../ThemeContext';
import data from '../assets/data';
import './Search.css';
export default function Search({setCountriesDisplayed}){
    const {theme}  = useTheme();
    function handleCountries(event){
        let inputValue = event.target.value.toLowerCase();
        setCountriesDisplayed(() =>{
            let filteredCountries = data.filter((country) => country.name.toLowerCase().startsWith(inputValue));
            return [...filteredCountries];
        })
    }
    return (
        <input className={`input_box ${theme}`} type='text' onInput={(event) => handleCountries(event)} placeholder='Search for a country...' name='search'/>
    )
}
