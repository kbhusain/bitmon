import React, { Component } from 'react';
import Monitor from "./Monitor"


class Loading extends Component {

	state = { 
		timer: null,
		counter : 0, 
		platforms: null
	}

	componentDidMount(){
		this.state.timer= setInterval(function() { this.setState({counter: this.state.counter + 1});  }.bind(this), 3000);
	}

	componentWillUnmount(){
		this.clearInterval(this.state.timer);
	}

	updateDepths(platforms){
		console.log("update depths", this.state)
		if (this.state.platforms){
			var al = this.state.platforms.length; 
			let platforms = this.state.platforms; 
			console.log(platforms);
			for (var i = 0; i < al; i++) {
				platforms[i].depth = parseInt(platforms[i].depth) + 1; 
				platforms[i].temperature = parseFloat(platforms[i].temperature + Math.random())
			}
		}
	}

  render() {
    console.log('this... props', this.props.platforms);
    this.state.platforms = this.props.platforms;
    this.updateDepths(this.state.platforms);
	let platforms; 
    if (this.props.platforms) {
      platforms = this.state.platforms.map(platform => {
          return ( <Monitor key={platform.name} platform={platform} />) ;
      });
    }


    return (
		<div>Loading{ "..." + this.state.counter} 
	
        <div className="Platforms" >
         <ul> 
         {platforms}
         </ul>
      </div>


		</div>
    );
  }
}

export default Loading;