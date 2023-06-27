import { PATHS } from '@common/constants';
import { AuthCard } from '@components/Authentication/AuthCard/AuthCard';
import { TextField } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';

import { FormValues } from '.';
import {
  Button,
  CheckBox,
  Divider,
  Input,
  Links,
  SocialsBox,
  Link as TextLink,
} from '../components';
import { emailRules, passwordRules } from '../helpers/validationRules';

export function SignIn() {
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
    JSON.stringify(data);
  };

  return (
    <AuthCard>
      <Box component="div" sx={{ maxWidth: '350px' }}>
        <form onSubmit={handleSubmit((data) => onSubmit(data))}>
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

          <Controller
            render={({ field: { value, onBlur, onChange } }) => (
              <TextField
                helperText={
                  <span style={{ color: 'red' }}>
                    {errors?.password?.message}
                  </span>
                }
                label="pass"
                onChange={onChange}
                onBlur={onBlur}
                value={value}
              />
            )}
            rules={passwordRules}
            control={control}
            name="password"
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
            <TextLink href={`${PATHS.AUTH}/${PATHS.FORGOT_PASSWORD}`}>
              Forgot password?
            </TextLink>
            <TextLink href={PATHS.AUTH}>
              Don`t have an account? Sign Up!
            </TextLink>
          </Links>
          <Divider text="Or continue with" />
          <SocialsBox />
        </form>
      </Box>
    </AuthCard>
  );
}
