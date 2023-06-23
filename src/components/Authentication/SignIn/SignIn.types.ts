import { Dispatch, SetStateAction } from 'react';

export interface SignInProps {
  setIsAuth: Dispatch<SetStateAction<string>>;
}

export interface FormValues {
  rememberMe: boolean;
  password: string;
  email: string;
}
