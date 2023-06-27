import { MeetSpaceXSeoButton } from '@components/MeetSpaceXSeoButton';
import { MeetSpaceXShipsInfo } from '@components/MeetSpaceXShipsInfo';
import React from 'react';

import '../../App.css';

export const MainPage = () => (
  <div className="App">
    <header className="App-header">
      <MeetSpaceXSeoButton />
      <MeetSpaceXShipsInfo titleColor="green" />
    </header>
    <div>
      <a href="https://google.com">Какая-то ссылк</a>
    </div>
  </div>
);
