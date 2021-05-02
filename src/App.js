import React from 'react';
import CitySelector from './components/CitySelector';

import WeatherList from './components/WeatherList';
import UseFetch from './hooks/UseFetch';
import {API_KEY, API_BASE_URL} from './apis/config';
import './App.css';
import {Container, Spinner} from 'react-bootstrap';

import About from './components/About';

const App = () => {

  const {data, error, isLoading, setUrl} = UseFetch();
   
  //We get all the data by this function then how many lists we have
  const getContent = () => {
   if(error) return <h2>Error:  {error}</h2>
   if(!data && isLoading) return <Spinner animation="border" role="status"> <spane className="sr-only">Loading...</spane> </Spinner>
   if(!data) return null;
   return <WeatherList weathers={data.list} />

  };

  return ( 

    <Container className="App">
   
      <CitySelector onSearch={(city) => setUrl(`${API_BASE_URL}/data/2.5/forecast?q=${city}&appid=${API_KEY}`)}
	 currentSearch={(lat,lon) => setUrl(`${API_BASE_URL}/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`)} />
      {getContent()}
    </Container>

  );
};

export default App;

