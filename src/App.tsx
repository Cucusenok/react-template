import { MeetSpaceXSeoButton } from '@components/MeetSpaceXSeoButton';
import { SpaceXLaunchesList } from '@components/SpaceXLaunchesList';
import React from 'react';

import './App.css';

function App() {
  return (
    <div className="App">
      <p>Иллюстрация работы компонента MeetSpaceXSeoButton:</p>
      <MeetSpaceXSeoButton />

      <p>Иллюстрация работы компонента SpaceXLaunchCard:</p>
      <SpaceXLaunchesList />
    </div>
  );
}

export default App;
