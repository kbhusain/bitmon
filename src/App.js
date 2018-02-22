import React, { Component } from 'react';
import './App.css';
import Platforms from "./Components/Platforms"
import Loading from "./Components/Loading"

class App extends Component {
  constructor() {
    super();
    this.state= {
      platforms: [
        {
          name: 'Well1',
          depth: '1000',
          temperature: '38'
        },
        {
          name: 'Well2',
          depth: '2000',
          temperature: '36'
        },
        {
          name: 'Well3',
          depth: '3000',
          temperature: '39'
        },

      ]
    }
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
            <h1 className="App-title">Bit Monitor Application</h1>
        </header>
        <Loading platforms={this.state.platforms} />
      </div>
    );
  }
}

export default App;
