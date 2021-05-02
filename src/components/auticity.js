import React, {useState} from 'react';
import {Row, Col, FormControl, Button} from 'react-bootstrap';
class App extends React.Component {
    state = {
      isLoading: true,
      location: [],
      error: null
    };
  
    fetchIpLocation() {
      fetch('https://ipapi.co/json/')
        .then(response => response.json())
        .then(data =>
          this.setState({
            location: data,
            isLoading: false,
          })
        )
        .catch(error => this.setState({ error, isLoading: false }));
    }
  
    componentDidMount() {
      this.fetchIpLocation();
    }
    render() {
      const { isLoading, location, error } = this.state;
      return (
        <React.Fragment>
          <h1>IP Address Location in React Native using Fetch API</h1>
          {!isLoading ? (
            <div>{JSON.stringify(location, null, 2)}</div>
          ) : (
            <h3>Loading...</h3>
          )}
        </React.Fragment>
      );
    }
  }
