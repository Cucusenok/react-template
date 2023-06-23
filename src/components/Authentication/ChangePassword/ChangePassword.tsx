import { Container } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';

import {
  Button,
  Card,
  CardContainer,
  Divider,
  Input,
  Links,
  Logo,
  SocialsBox,
  Link as TextLink,
  TitleTypography,
} from '../components';
import {
  confirmPasswordRules,
  passwordRules,
} from '../helpers/validationRules';
import { FormValues, SignInProps } from './ChangePassword.types';

export function ChangePassword({ setIsAuth }: SignInProps) {
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

  const onSubmit = (data: FormValues) => {
    console.log(data);
    setTimeout(() => {
      setIsAuth('SignIn');
    }, 1000);
  };

  const password = watch('password');

  return (
    <Container component="main" maxWidth="xs">
      <Card>
        <CardContainer>
          <Logo>Logo</Logo>
          <TitleTypography variant="h5">Sign in</TitleTypography>
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
              <TextLink onClick={() => setIsAuth('SignIn')}>Sign in</TextLink>
            </Links>
            <Divider text="Or continue with" />
            <SocialsBox />
          </form>
        </CardContainer>
      </Card>
    </Container>
  );
}
