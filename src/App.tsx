import { ROUTES } from '@common/router';
import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './App.css';

function App() {
  const router = createBrowserRouter(ROUTES);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
