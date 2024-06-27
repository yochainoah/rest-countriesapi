import data from '../assets/data';
import Country from './Country';
import classes from './Countries.module.css';

function Countries({countriesDisplayed}){

    console.log(countriesDisplayed)
    return (
        <>
            <div className={classes.countries_cards + " " + classes.container}>
                {countriesDisplayed.map((country) => {
                    return (
                         <Country key={country.numericCode} country={country}/>
                    )
                })}
            </div>
        </>
    )
            
}

export default Countries;
