import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { decodingApiRequest, weatherApiRequest } from './utils';
import Header from './Header'
import Page from './page';

const App = () => {


  const[weatherData, setWeatherData] = useState([])


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
      <div>
        <Header startSearch={updateDecoding} />
        <Page weatherData={weatherData}/>
      </div>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);