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
    console.log(this.state.movies !== undefined ? this.state.movies : 'none');
  }

  _movies(){
    if (this.state.movies !== undefined) {

       return this.state.movies.map((movie, index) => (
          <div key={index}>
            <h4>title {movie.title} episode - {movie.episode_number}</h4>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png"/>
            <p>{movie.description}</p>
          </div>
        ));
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>star wars</h2>
          <button onClick={this.starwars}>Fetch from API madafackuhhhh!</button>
        </div>
        {this._movies()}
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
