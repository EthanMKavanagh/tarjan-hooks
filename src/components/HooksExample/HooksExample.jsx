import React, {Component} from 'react';
import axios from 'axios';

class HooksExample extends Component {

  //state
  state = {
    smarties : 0,
    baconIpsum: 'Loading...'
  }

  // lifecycle
  componentDidMount() {
    axios.get('https://baconipsum.com/api/', {
      params: {
        sentences: 1,
        type: 'meat',
        format: 'text'
      }
    })
      .then(res => {
        this.setState({
          baconIpsum: res.data
        });
      });
  }


  increment = () => {
    this.setState({
      smarties: this.state.smarties + 1
    });
  }

  //render
  render() { 
    return (
      <>
        <p>I ate {this.state.smarties} smarties</p>
        <button onClick={this.increment}>Eat a smartie!</button> 

        <p>{this.state.baconIpsum}</p>
      </>
    )
  }

}

export default HooksExample; 