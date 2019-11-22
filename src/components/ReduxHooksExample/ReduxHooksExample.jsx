import React, {Component} from 'react';
import {connect} from 'react-redux';

class ReduxHooksExample extends Component {
 

  increment = () => {
    this.props.dispatch({type: 'INCREMENT'})
  }


  //render
  render() { 
    return (
      <>
        <p>Redux Counter:{this.props.counter}</p>
        <button onClick={this.increment}>Plus 1!</button> 

      </>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    counter : state.counter
  }
}

export default connect(mapStateToProps)(ReduxHooksExample); 