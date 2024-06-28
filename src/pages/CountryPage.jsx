import { useParams ,Link} from "react-router-dom";
import { useTheme } from "../ThemeContext";
import data from '../assets/data';
import './CountryPage.css';
export default function CountryPage(){
    let border_countries = [];
    const {theme} = useTheme();
    const {countryName} = useParams();
    const country_data = data.find((country) => country.name === countryName);
    const arrow_color = theme === 'light'?  "./arrow-back-light.svg": "./arrow-back-dark.svg" ;
    console.log('country data',country_data)
    

    if (!country_data) {
        return (
            <div className="container country-container">
                <p>Country not found.</p>
                <Link to='/' className={`back-link ${theme}`}><img src={arrow_color} alt="Back arrow" />Back</Link>
            </div>
        );
    }
    let borders_exist = 'borders' in country_data;
    let currencies = 'currencies' in country_data;
    if(borders_exist) {
        border_countries = country_data.borders.map((border) => {
            const borderCountry = data.find((country) => country.alpha3Code === border);
            return borderCountry.name;
        })
    }
    
    // console.log(country_data);
    console.log('border-exist', borders_exist);
    return(
        <div className="container country-container">
            <Link to='/' className={`back-link ${theme}`}><img src={arrow_color}/>Back</Link>
            <img src={country_data.flag} alt="flag" className="flag"/>
            <div className="data-container">
                <h1 className="extrabold">{country_data.name}</h1>
                <div className="data">
                    <p><span className='semi-bold'>Native Name: </span>{country_data.nativeName}</p>
                    <p><span className='semi-bold'>Population: </span>{country_data.population.toLocaleString()}</p>
                    <p><span className='semi-bold'>Region: </span>{country_data.region}</p>
                    <p><span className='semi-bold'>Sub Region: </span>{country_data.subregion}</p>
                    <p ><span className='semi-bold'>Capital: </span>{country_data.capital}</p>
                    <p><span className='semi-bold'>Top Level Domain: </span>{country_data.topLevelDomain}</p>
                    {currencies && <p className="span-2"><span className='semi-bold'>Currencies: </span>{country_data.currencies[0].name}</p>}
                    <p className="span-2"><span className='semi-bold'>Languages: </span>{country_data.languages[0].name}</p>
                </div>
                { borders_exist && <div className="border-countries-container"><span className="semi-bold">Border countries:</span> 
                    <ul className="border_countries">
                        {border_countries.map((country) => {
                            return <li key={country} className={theme}>
                                <Link className={theme} to={`/${country}`}>{country}</Link>
                            </li>
                        })}
                    </ul>
                </div>}
            </div>
        </div>
    )
}