//In this component will get the city value from the user input then place it on the API URL 
//to get the resulet based on the city name 

import React, {useState} from 'react';
import {Row, Col, FormControl, Button} from 'react-bootstrap';
import '../App.css';
const CitySelector = ({onSearch,currentSearch}) => {

    const [city, setCity] = useState('');

    return (
      <>
      <Row>
          <Col>
          <a href="/">
    <img src="Logo.jpg" className="logo"/></a>
          </Col>
          </Row>
        <Row>
            <Col>
              <h1 className="Search" >SERCH FOR YOUR CITY</h1>
            </Col>
        </Row>
        
        <Row>
            <Col xs={4} >
              <FormControl placeholder="Enter City" onChange={(e) => setCity(e.target.value)}  value={city}  className="SearchBox"/>
            </Col>
        </Row>
        <Row>
            <Col>
	    <Button onClick={() => {navigator.geolocation.getCurrentPosition((position) => currentSearch(position.coords.latitude,position.coords.longitude))}}>Current Location</Button>
            </Col>
        </Row>
        <Row>
            <Col>
              <Button onClick={() => onSearch(city)} className="Button"> Check Weather </Button>
            </Col>
        </Row>
        
      </> 
    );
};

export default CitySelector;