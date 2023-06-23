import { Container } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';

import { FormValues, SignInProps } from '.';
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
import { emailRules } from '../helpers/validationRules';

export function ForgotPassword({ setIsAuth }: SignInProps) {
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

  const onSubmit = (data: FormValues) => {
    console.log(data);
    setTimeout(() => {
      setIsAuth('ChangePassword');
    }, 1000);
  };

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
              <TextLink onClick={() => setIsAuth('SignIn')}>Sign in</TextLink>
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
