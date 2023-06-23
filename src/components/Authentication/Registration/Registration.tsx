import { Container, Grid } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { FormValues, RegisterProps, TariffType } from '.';
import {
  Button,
  Card,
  CardContainer,
  Divider,
  Input,
  Links,
  Logo,
  SelectInput,
  SocialsBox,
  TariffCardItem,
  TextLink,
  TitleTypography,
} from '../components';
import {
  confirmPasswordRules,
  emailRules,
  passwordRules,
} from '../helpers/validationRules';
import { tariffData } from './mockData';

const selectItems = [
  {
    id: 0,
    title: 'Brand',
  },
  {
    id: 1,
    title: 'Affiliate',
  },
  {
    id: 2,
    title: 'Brand / Affiliate',
  },
];

export function Registration({ setIsAuth }: RegisterProps) {
  const [step, setStep] = useState<number>(1);
  const [selectedTariff, setSelectedTariff] = useState<undefined | number>(
    undefined
  );
  const {
    watch,
    control,
    handleSubmit,
    formState: { errors, isValid },
    getValues,
  } = useForm<FormValues>({
    mode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',
      accountType: '',
      confirmPassword: '',
    },
  });

  const onSubmit = (data: FormValues) => {
    const dataWithTariff = { ...data, selectedTariff };
    console.log('formData:', dataWithTariff);
    setTimeout(() => {
      setIsAuth('SignIn');
    }, 1000);
  };

  const password = watch('password');

  return (
    <Container maxWidth={step === 1 ? 'xs' : 'sm'} component="main">
      <Card>
        <CardContainer>
          {step === 1 && <Logo>Logo</Logo>}
          <TitleTypography variant="h5">
            {step === 1 ? 'Registration' : 'Choose a tariff plan'}
          </TitleTypography>
          <form
            onSubmit={handleSubmit((data) => onSubmit(data))}
            style={{ textAlign: 'left' }}
          >
            {step === 1 ? (
              <>
                <Input
                  name="email"
                  label="Email address"
                  size="medium"
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
                <SelectInput
                  name="accountType"
                  label="Account type"
                  required
                  color="primary"
                  size="medium"
                  fullWidth
                  control={control}
                  selectItems={selectItems}
                />
                <Button
                  onClick={() => setStep(2)}
                  sx={{ mt: 2, mb: 2 }}
                  variant="contained"
                  disabled={!isValid}
                  fullWidth
                >
                  NEXT
                </Button>
                <Links>
                  <TextLink onClick={() => setIsAuth('SignIn')}>
                    Already have an account?
                  </TextLink>
                </Links>
                <Divider text="Or continue with" />
                <SocialsBox />
              </>
            ) : (
              <>
                <Grid spacing={2} container>
                  {tariffData.map((tariff: TariffType) => (
                    <Grid key={tariff.id} xs={6} item>
                      <TariffCardItem
                        variant={
                          tariff.id === selectedTariff
                            ? 'contained'
                            : 'outlined'
                        }
                        setSelectedTariff={setSelectedTariff}
                        tariff={tariff}
                      />
                    </Grid>
                  ))}
                </Grid>
                <Button
                  disabled={!selectedTariff || !isValid}
                  sx={{ mt: 6 }}
                  type="submit"
                  variant="contained"
                  fullWidth
                  onClick={() => onSubmit(getValues())}
                >
                  CONFIRM
                </Button>
              </>
            )}
          </form>
        </CardContainer>
      </Card>
    </Container>
  );
}
