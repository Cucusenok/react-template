import { PATHS } from '@common/constants';
import { Route, Routes } from 'react-router-dom';

import { ChangePassword } from './ChangePassword';
import { ForgotPassword } from './ForgotPassword';
import { Registration } from './Registration';
import { SignIn } from './SignIn';

export const Authentication = () => {
  return (
    <Routes>
      <Route index element={<Registration />} />
      <Route path={PATHS.SIGN_IN} element={<SignIn />} />
      <Route path={PATHS.CHANGE_PASSWORD} element={<ChangePassword />} />
      <Route path={PATHS.FORGOT_PASSWORD} element={<ForgotPassword />} />
      <Route path="*" element={<div>NO match</div>} />
    </Routes>
  );
};
