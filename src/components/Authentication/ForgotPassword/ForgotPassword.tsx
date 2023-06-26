import { PATHS } from '@common/constants';
import { AuthCard } from '@components/Authentication/AuthCard/AuthCard';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { FormValues } from '.';
import {
  Button,
  Divider,
  Input,
  Links,
  SocialsBox,
  Link as TextLink,
} from '../components';
import { emailRules } from '../helpers/validationRules';

export function ForgotPassword() {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    getValues,
  } = useForm<FormValues>({
    mode: 'onBlur',
    defaultValues: {
      email: '',
    },
  });

  const navigate = useNavigate();

  const onSubmit = (data: FormValues) => {
    console.log(data);
    setTimeout(() => {
      navigate(`${PATHS.AUTH}/${PATHS.CHANGE_PASSWORD}`);
    }, 1000);
  };

  return (
    <AuthCard>
      <form
        onSubmit={handleSubmit((data) => onSubmit(data))}
        style={{ textAlign: 'left' }}
      >
        <Input
          name="email"
          label="Email address"
          size="medium"
          margin="normal"
          fullWidth
          errorMessage={errors?.email?.message}
          rules={emailRules}
          control={control}
        />
        <Button
          onClick={() => onSubmit(getValues())}
          disabled={!isValid}
          type="submit"
          variant="contained"
          sx={{ mt: 2 }}
        >
          Recover Password
        </Button>
        <Links>
          <TextLink href={`${PATHS.AUTH}/${PATHS.SIGN_IN}`}>Sign in</TextLink>
          <TextLink href={PATHS.AUTH}>Don`t have an account? Sign Up!</TextLink>
        </Links>
        <Divider text="Or continue with" />
        <SocialsBox />
      </form>
    </AuthCard>
  );
}
