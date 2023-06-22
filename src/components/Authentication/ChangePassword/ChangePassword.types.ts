import { SetStateAction, Dispatch } from 'react';

export interface SignInProps {
  setIsAuth: Dispatch<SetStateAction<string>>;
}

export interface FormValues {
  confirmPassword: string;
  password: string;
}
