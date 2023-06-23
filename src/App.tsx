import { MeetSpaceXSeoButton } from '@components/MeetSpaceXSeoButton';
import { SpaceXLaunchCard } from '@components/SpaceXLaunchCard/SpaceXLaunchCard';
import React from 'react';

import './App.css';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MeetSpaceXSeoButton />
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

      <SpaceXLaunchCard />
    </div>
  );
}

export default App;
