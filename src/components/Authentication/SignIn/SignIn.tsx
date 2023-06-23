import { Container } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';

import { FormValues, SignInProps } from '.';
import {
  Button,
  Card,
  CardContainer,
  CheckBox,
  Divider,
  Input,
  Links,
  Logo,
  SocialsBox,
  Link as TextLink,
  Title,
} from '../components';
import { emailRules, passwordRules } from '../helpers/validationRules';

export function SignIn({ setIsAuth }: SignInProps) {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    getValues,
  } = useForm<FormValues>({
    mode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log('formData:', data);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Card>
        <CardContainer>
          <Logo color="primary">Logo</Logo>
          <Title variant="h5">Sign in</Title>
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
            <CheckBox
              name="rememberMe"
              label="Remember me"
              color="primary"
              size="medium"
              control={control}
            />
            <Button
              onClick={() => onSubmit(getValues())}
              disabled={!isValid}
              type="submit"
              variant="contained"
              sx={{ mt: 2 }}
            >
              LOGIN
            </Button>
            <Links>
              <TextLink onClick={() => setIsAuth('ForgotPassword')}>
                Forgot password?
              </TextLink>
              <TextLink onClick={() => setIsAuth('Registration')}>
                {`Don't have an account? Sign Up"`}
              </TextLink>
            </Links>
            <Divider text="Or continue with" />
            <SocialsBox />
          </form>
        </CardContainer>
      </Card>
    </Container>
  );
}
