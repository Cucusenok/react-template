import { AuthPage } from '@components/pages/AuthPage';
import { MainPage } from '@components/pages/MainPage';

export const ROUTES = [
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/auth/*',
    element: <AuthPage />,
  },
];
