import { Route, Routes } from 'react-router-dom';

import { ChangePassword } from './ChangePassword';
import { ForgotPassword } from './ForgotPassword';
import { Registration } from './Registration';
import { SignIn } from './SignIn';

export const Authentication = () => {
  return (
    <Routes>
      <Route index element={<Registration />} />
      <Route path="sign-in" element={<SignIn />} />
      <Route path="change-password" element={<ChangePassword />} />
      <Route path="forgot-password" element={<ForgotPassword />} />
      <Route path="*" element={<div>NO match</div>} />
    </Routes>
  );
};
