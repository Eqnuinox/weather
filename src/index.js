import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { decodingApiRequest, weatherApiRequest } from './utils';
import Header from './header/Header'
import Page from './page';
import DetalesPage from './Days/DetalisPage';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './index.css'

const App = () => {


  const [weatherData, setWeatherData] = useState([])


  const updateDecoding = async (location) => {
    const [decResponse] = await decodingApiRequest(location);
    if (!decResponse) {
      alert('Нет данных о таком городе...')
      return
    }
    const wetResponse = await weatherApiRequest(decResponse);
    setWeatherData(wetResponse);
  }



  return (
    <>
      <BrowserRouter>
        <div className='main'>
            <Header startSearch={updateDecoding} />
          <Routes>
            <Route path="/" element={<Page weatherData={weatherData} /> }/>
            <Route path="/in/:City" element={<DetalesPage /> }/>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);