import './App.css'
import HomePage from './pages/HomePage';
import Header from './components/Header';
import { Routes ,Route} from 'react-router-dom';
import CountryPage from './pages/CountryPage';

// www.domain.com/

function App() {
  
  
  return (
        <>
          <Header/>
          <Routes>
            <Route path="/country/:countryName" element={<CountryPage />}/>
            <Route path="*" element={<HomePage/>}/>
          </Routes>
        </>


  )
}

export default App;