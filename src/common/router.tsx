import { AuthPage } from '@components/pages/AuthPage';
import { MainPage } from '@components/pages/MainPage';

import { PATHS } from './constants';

export const ROUTES = [
  {
    path: PATHS.HOME,
    element: <MainPage />,
  },
  {
    path: `${PATHS.AUTH}/*`,
    element: <AuthPage />,
  },
];
