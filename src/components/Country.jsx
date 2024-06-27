import './Country.css';
import { Link} from 'react-router-dom';
import { useTheme } from '../ThemeContext';


function Country({country}){
    const { theme} = useTheme();
    return (
        <Link to={country.name} className={`country_card ${theme}`}>
            <img src={country.flags.svg}/>
            <div className='country_details'>
                <h3>{country.name}</h3>
                <p><span className='semi-bold'>Population: </span>{country.population.toLocaleString()}</p>
                <p><span className='semi-bold'>Region: </span>{country.region}</p>
                <p><span className='semi-bold'>Capital: </span>{country.capital}</p>
            </div>
        </Link>
    )
}

export default Country;