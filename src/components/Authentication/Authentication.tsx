import { useState } from 'react';

import { ChangePassword } from './ChangePassword';
import { ForgotPassword } from './ForgotPassword';
import { Registration } from './Registration';
import { SignIn } from './SignIn';

export const Authentication = () => {
  const [isAuth, setIsAuth] = useState<string>('SignIn');
  console.log('isAuth', isAuth);

  if (isAuth === 'SignIn') {
    return <SignIn setIsAuth={setIsAuth} />;
  }
  if (isAuth === 'Registration') {
    return <Registration setIsAuth={setIsAuth} />;
  }
  if (isAuth === 'ChangePassword') {
    return <ChangePassword setIsAuth={setIsAuth} />;
  }
  return <ForgotPassword setIsAuth={setIsAuth} />;
};
