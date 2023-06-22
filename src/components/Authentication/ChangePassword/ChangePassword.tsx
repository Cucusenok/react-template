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
} from './ChangePassword.styles';
import { SignInProps, FormValues } from './ChangePassword.types';
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

export function ChangePassword({ setIsAuth }: SignInProps) {
  const {
    watch,
    control,
    handleSubmit,
    formState: { errors, isValid },
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
                      {errors?.password?.message}
                    </span>
                  }
                  onChange={onChange}
                  label="Password"
                  onBlur={onBlur}
                  type="password"
                  size="medium"
                  value={value}
                  fullWidth
                />
              )}
              rules={{ required, minLength }}
              control={control}
              name="password"
            />
            <Controller
              render={({ field: { value, onBlur, onChange } }) => (
                <TextField
                  helperText={
                    <span style={{ color: 'red' }}>
                      {errors?.confirmPassword?.message}
                    </span>
                  }
                  label="Confirm password"
                  onChange={onChange}
                  onBlur={onBlur}
                  type="password"
                  size="medium"
                  value={value}
                  fullWidth
                />
              )}
              rules={{
                required,
                minLength,
                validate: (value) =>
                  value === password || 'Passwords do not match',
              }}
              name="confirmPassword"
              control={control}
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
