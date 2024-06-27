import Search from '../components/Search';
import RegionFilter from '../components/RegionFilter';
import { useState } from 'react';
import data from '../assets/data';
import Countries from '../components/Countries';
export default function HomePage(){

    const [countriesDisplayed, setCountriesDisplayed] = useState(data);
    return (
        <>
            <div className={`countries_content`}>
                <div className='filters container'>
                    <Search setCountriesDisplayed={setCountriesDisplayed}/>
                    <RegionFilter setCountriesDisplayed={setCountriesDisplayed}/>
                </div>
                <Countries countriesDisplayed={countriesDisplayed}/>
            </div>
        </>
    )
}