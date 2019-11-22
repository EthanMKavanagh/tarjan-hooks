import React, {Component} from 'react';

class HooksExample extends Component {

  //state
  state = {
    hello : 'world',
    counter : 0,
    name : ''
  }

  // lifecycle
  componentDidMount() {
    console.log('mounted!')
    document.title = this.state.hello
  }

  componentDidUpdate() {
    console.log('updated!')
    document.title = this.state.hello

  }

  //event handlers
  handleChange = (event) => {
    this.setState({name : event.target.value})
  }

  increment = () => {
    this.setState({counter: this.state.counter + 1})
  }

  changeHello = () => {
    this.setState({hello : this.state.name })
  }

  //render
  render() { 
    return (
      <>
        <p>Hello {this.state.hello}</p>
        <p>React Counter:{this.state.counter}</p>
        <input onChange={this.handleChange} placeholder="name" />

        <button onClick={this.changeHello}>Change greeting!</button> 
        <button onClick={this.increment}>Plus 1!</button> 

      </>
    )
  }

}

export default HooksExample; 