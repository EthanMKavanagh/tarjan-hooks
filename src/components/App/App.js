import React from 'react';
import logo from './logo.svg';
import './App.css';
import HooksExample from '../HooksExample/HooksExample';
import ConvertedHooksExample from '../HooksExample/ConvertedHooksExample';
import ReduxHooksExample from '../ReduxHooksExample/ReduxHooksExample';
import ConvertedReduxHooksExample from '../ReduxHooksExample/ConvertedReduxHooksExample';

function App() {
  return (
    <div className="App">
      <h1>Hooks!!!</h1>
      <ConvertedHooksExample />
      <ConvertedReduxHooksExample />
    </div>
  );
}

export default App;
