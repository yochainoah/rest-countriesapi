import './App.css'
import HomePage from './pages/HomePage';
import Header from './components/Header';
import { Routes ,Route} from 'react-router-dom';
import CountryPage from './pages/CountryPage';
import { useState } from 'react';


function App() {
  
  
  return (
        <>
          <Header/>
          <Routes>
            <Route index element={<HomePage/>}/>
            <Route path="/:countryName" element={<CountryPage />}/>
          </Routes>
        </>


  )
}

export default App;