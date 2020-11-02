import React from 'react';
import logo from './logo.svg';
import './App.css';
import HooksExample from '../HooksExample/HooksExample';
import ReduxHooksExample from '../ReduxHooksExample/ReduxHooksExample';

function App() {
  return (
    <div className="App">
      <h1>Hooks!!!</h1>
      <HooksExample />
      {/* <ReduxHooksExample /> */}
    </div>
  );
}

export default App;
