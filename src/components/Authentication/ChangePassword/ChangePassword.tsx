import { PATHS } from '@common/constants';
import { AuthCard } from '@components/Authentication/AuthCard/AuthCard';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import {
  Button,
  Divider,
  Input,
  Links,
  SocialsBox,
  Link as TextLink,
} from '../components';
import {
  confirmPasswordRules,
  passwordRules,
} from '../helpers/validationRules';
import { FormValues } from './ChangePassword.types';

export function ChangePassword() {
  const {
    watch,
    control,
    handleSubmit,
    formState: { errors, isValid },
    getValues,
  } = useForm<FormValues>({
    mode: 'onBlur',
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });

  const navigate = useNavigate();

  const onSubmit = (data: FormValues) => {
    console.log(data);
    setTimeout(() => {
      navigate(`${PATHS.AUTH}/${PATHS.SIGN_IN}`);
    }, 1000);
  };

  const password = watch('password');

  return (
    <AuthCard>
      <form
        onSubmit={handleSubmit((data) => onSubmit(data))}
        style={{ textAlign: 'left' }}
      >
        <Input
          name="password"
          label="Password"
          size="medium"
          margin="normal"
          type="password"
          fullWidth
          errorMessage={errors?.password?.message}
          rules={passwordRules}
          control={control}
        />
        <Input
          name="confirmPassword"
          label="Confirm password"
          size="medium"
          margin="normal"
          type="password"
          fullWidth
          errorMessage={errors?.confirmPassword?.message}
          rules={confirmPasswordRules}
          control={control}
          password={password}
        />
        <Button
          onClick={() => onSubmit(getValues())}
          disabled={!isValid}
          type="submit"
          variant="contained"
          sx={{ mt: 2 }}
        >
          Change password
        </Button>
        <Links>
          <TextLink href={`${PATHS.AUTH}/${PATHS.SIGN_IN}`}>Sign in</TextLink>
        </Links>
        <Divider text="Or continue with" />
        <SocialsBox />
      </form>
    </AuthCard>
  );
}
