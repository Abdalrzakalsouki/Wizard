//This component is to represent the data by cards

import React from 'react';
import {Card} from 'react-bootstrap';
import "../App.css";
const WeatherCard = ({dt, temp_min, temp_max, main, icon}) => {
    const date = new Date(dt);
    return (
     <Card className="Cards" >
        <Card.Img variant="top" className="image" src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
        <Card.Body className="cardbody">
            <Card.Title className="cardtitle">{main}</Card.Title>
            <p>
                {date.toLocaleDateString()} - {date.toLocaleTimeString()}
            </p>
            
            <p>  Min: {temp_min}  </p>
            <p>  Max: {temp_max} </p>
          
        </Card.Body>
     </Card>
    );
};

export default WeatherCard;