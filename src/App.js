import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
    };
  }
  state = {

  }
  componentDidMount() {
  }
  componentWillUpdate() {
    console.log(this.state.movies);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to {}</h2>
          <button onClick={this.starwars}>press me</button>
          <p></p>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>

    );
  }
    starwars = () => {
    axios.get(`http://localhost:5000/`)
      .then((response) => {
        this.setState({ movies: response.data });
      })
      .catch((error) =>{
        console.log(error);
      });
    }
}




export default App;
