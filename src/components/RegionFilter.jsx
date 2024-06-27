import data from '../assets/data';
import './RegionFilter.css';
import { useState } from 'react';
import { useTheme } from '../ThemeContext';
import dropdown_light from '/arrow-down-lightmode.svg';
import dropdowmn_dark from '/arrow-down-darkmode.svg';

const choices = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania']

export default function RegionFilter({setCountriesDisplayed}){
    const {theme} = useTheme();
    const [currChoice, setCurrChoice] = useState('All');
    const [showDropdown, setShowDropdown] = useState(false);
    function handleChoice(event){
        const newCountries = data.filter((country) => country.region === event.target.innerText || event.target.innerText === 'All');
        setCurrChoice(event.target.innerText);
        setCountriesDisplayed(newCountries)
        setShowDropdown();
    }
    function handelDropdown(){
        setShowDropdown(!showDropdown);
    }
    return (
        <div className='dd'>
            <button onClick={handelDropdown} className={`dd-btn ${theme}` }>
                {currChoice}
                {theme === 'light' && <img src={dropdown_light}/>}
                {theme === 'dark' && <img src={dropdowmn_dark}/>}
            </button>
            <div className={`dd-menu ${theme}`} style={{display: showDropdown ? `block`: `none`}}>
                {choices.map((choice) => {
                        return currChoice !== choice ? <button className={theme} key={choice} onClick={handleChoice}>{choice}</button> : '';
                })}
            </div>
        </div>
    )
}