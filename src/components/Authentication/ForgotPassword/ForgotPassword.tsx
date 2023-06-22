import { Controller, useForm } from 'react-hook-form';
import { TextField, Container } from '@mui/material';
import React from 'react';

import {
  DividerStyled,
  SubmitButton,
  AvatarStyled,
  LinkStyled,
  CardStyled,
  DividerBox,
  SocialText,
  IconAvatar,
  SocialBox,
  LinksBox,
  Wrapper,
  Title,
} from './ForgotPassword.styles';
import { SignInProps, FormValues } from './ForgotPassword.types';
import LinkeddInIcon from '../../icons/LinkeddInIcon';
import TwitterIcon from '../../icons/TwitterIcon';
import GoogleIcon from '../../icons/GoogleIcon';

const required = {
  value: true,
  message: 'Required field',
};

const minLength = {
  value: 6,
  message: 'Minimum of 6 characters',
};

const emailPattern = {
  message: 'Enter the correct email',
  value:
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
};

export function ForgotPassword({ setIsAuth }: SignInProps) {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
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
      <CardStyled>
        <Wrapper>
          <AvatarStyled>Logo</AvatarStyled>
          <Title variant="h5">Sign in</Title>
          <form
            onSubmit={handleSubmit((data) => onSubmit(data))}
            style={{ textAlign: 'left' }}
          >
            <Controller
              render={({ field: { value, onBlur, onChange } }) => (
                <TextField
                  helperText={
                    <span style={{ color: 'red' }}>
                      {errors?.email?.message}
                    </span>
                  }
                  label="Email address"
                  onChange={onChange}
                  onBlur={onBlur}
                  size="medium"
                  value={value}
                  fullWidth
                />
              )}
              rules={{ required, minLength, pattern: emailPattern }}
              control={control}
              name="email"
            />
            <SubmitButton disabled={!isValid} type="submit" fullWidth>
              Recover Password
            </SubmitButton>
            <LinksBox>
              <LinkStyled
                onClick={() => setIsAuth('SignIn')}
                sx={{ cursor: 'pointer' }}
                variant="text"
              >
                Sign in
              </LinkStyled>
              <LinkStyled
                onClick={() => setIsAuth('Registration')}
                sx={{ cursor: 'pointer' }}
                variant="text"
              >
                {`Don't have an account? Sign Up"`}
              </LinkStyled>
            </LinksBox>
            <DividerBox>
              <DividerStyled />
              <SocialText>Or continue with</SocialText>
            </DividerBox>
            <SocialBox>
              <IconAvatar>
                <GoogleIcon />
              </IconAvatar>
              <IconAvatar>
                <LinkeddInIcon />
              </IconAvatar>
              <IconAvatar>
                <TwitterIcon />
              </IconAvatar>
            </SocialBox>
          </form>
        </Wrapper>
      </CardStyled>
    </Container>
  );
}
