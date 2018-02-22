import React, { Component } from 'react';
import Monitor from "./Monitor"

class Platforms extends Component {
  render() {
    let platforms; 
    if (this.props.platforms) {
      platforms = this.props.platforms.map(platform => {
          return ( <Monitor key={platform.name} platform={platform} />) ;
      });
    }
    return (
      <div className="Platforms" >
         <ul> 
         {platforms}
         </ul>
      </div>
    );
  }
}

export default Platforms;