import React, { Component } from 'react';
import "./Monitor.css"

class Monitor extends Component {
  render() {
    
    return (
      <li className="listMonitor" >
          Well Name: <div className="platformTitle"> {this.props.platform.name} </div> 
          <div className="temperature">  Temperature: {this.props.platform.temperature} &#176;C </div>
          <span className="depth"> Depth: {this.props.platform.depth} feet </span>
      </li>
    );
  }
}

export default Monitor;
