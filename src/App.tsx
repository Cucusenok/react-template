import React from 'react';

import logo from './logo.svg';
import './App.css';
// import { MainButton } from '@components/MainButton/MainButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="App-logo" alt="logo" src={logo} />
        <p>
          Edit
          <code>src/App.tsx</code>
          and save to reload.
        </p>
        <a
          href="https://reactjs.org"
          rel="noopener noreferrer"
          className="App-link"
          target="_blank"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
