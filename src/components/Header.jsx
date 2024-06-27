import './Header.css';
import { useTheme } from '../ThemeContext';
import { useEffect } from 'react';
export default function Header(){
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
      const root = document.getElementById('root');
      document.body.className = theme; // set the class on the root div
    }, [theme]);
    const moon_icon = theme === 'light'? './light-mode-moon.svg': './dark-mode-moon.svg';
    return (
        <header className={`header_element ${theme}`}>
            <div className='container'>
                <h1>Where in the world?</h1>
                <button onClick={toggleTheme} className={`${theme}`}>
                    <img src= {moon_icon}/>
                    <p>Dark Mode</p>
                </button>
            </div>
        </header>
    )
}