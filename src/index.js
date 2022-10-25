import React from 'react';
import ReactDOM from 'react-dom/client';
import { useEffect, useState } from 'react';
import Header from './App';
import { decodingApiRequest, weatherApiRequest } from './utils';

const App = () => {

  const [decodingResults, setDecodingResults] = useState('')
  const [searchResults, setSearchResults] = useState()


  const updateDecoding = async (text) => {
    const response = await decodingApiRequest(text);
    setDecodingResults(response)

  }

  useEffect((decodingResults) => {
    const response = decodingResults.map((location) => weatherApiRequest(location))
    setSearchResults(response);

  }, [decodingResults])

  return (
    <>
      <div>
        <Header startDecoding={updateDecoding} />
      </div>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);