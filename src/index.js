import React from 'react';
import ReactDOM from 'react-dom';
// import Component from 'react'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      latitude: null,
      longitude: null,
      errorMessage: ''

      } 

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        })
      },
      (error) => {
        this.setState({
          errorMessage: error.message
        })
      },
    );
  }

  componentDidMount() {
    
  }
  
  render() { 
    if (this.state.errorMessage && !this.state.latitude) {
      return <div> {this.state.errorMessage} </div>
    }
    if (!this.state.errorMessage && this.state.latitude) {
      return <div> 
          <p>Latitide: {this.state.latitude} </p>
          <p>Longitude: {this.state.longitude} </p>
      </div>
      
    } else {
      return <div> Loading... </div>
    }
    

  }
}
 
// export default App;

ReactDOM.render(
    <App />,
  document.querySelector('#root')
);
