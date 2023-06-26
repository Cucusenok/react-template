import { PATHS } from '@common/constants';
import { AuthCard } from '@components/Authentication/AuthCard/AuthCard';
import { Box, Grid } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { FormValues, SignUpFormProps, TariffFormProps, TariffType } from '.';
import {
  Button,
  Divider,
  Input,
  Links,
  SelectInput,
  SocialsBox,
  TariffCardItem,
  TextLink,
} from '../components';
import {
  confirmPasswordRules,
  emailRules,
  passwordRules,
  typeRules,
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

enum STEPS_ENUM {
  REGISTRATION,
  TARIFF,
}

const SignUpForm = ({
  errors,
  control,
  password,
  isValid,
  onNextClick,
}: SignUpFormProps) => {
  return (
    <Box component="div" sx={{ maxWidth: '350px' }}>
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
        color="primary"
        size="medium"
        fullWidth
        errorMessage={errors?.accountType?.message}
        control={control}
        selectItems={selectItems}
        rules={typeRules}
      />
      <Button
        onClick={onNextClick}
        sx={{ mt: 2, mb: 2 }}
        variant="contained"
        disabled={!isValid}
        fullWidth
      >
        NEXT
      </Button>
      <Links>
        <TextLink href={`${PATHS.AUTH}/${PATHS.SIGN_IN}`}>
          Already have an account?
        </TextLink>
      </Links>
      <Divider text="Or continue with" />
      <SocialsBox />
    </Box>
  );
};

const TariffForm = ({ onSubmit }: TariffFormProps) => {
  const [selectedTariff, setSelectedTariff] = useState<null | number>(null);
  const isSelected = selectedTariff || selectedTariff === 0;

  return (
    <Box component="div" sx={{ maxWidth: '800px' }}>
      <Grid spacing={2} container>
        {tariffData.map((tariff: TariffType) => (
          <Grid key={tariff.id} xs={12} sm={6} item minWidth="250px">
            <TariffCardItem
              variant={tariff.id === selectedTariff ? 'contained' : 'outlined'}
              setSelectedTariff={setSelectedTariff}
              tariff={tariff}
            />
          </Grid>
        ))}
      </Grid>
      <Button
        disabled={selectedTariff === null}
        sx={{ mt: 6 }}
        type="submit"
        variant="contained"
        fullWidth
        onClick={() => isSelected && onSubmit(selectedTariff)}
      >
        CONFIRM
      </Button>
    </Box>
  );
};

export function Registration() {
  const [step, setStep] = useState<number>(0);
  const {
    watch,
    control,
    handleSubmit,
    formState: { errors, isValid },
    getValues,
  } = useForm<FormValues>({
    mode: 'all',
    defaultValues: {
      email: '',
      password: '',
      accountType: '',
      confirmPassword: '',
    },
  });

  const navigate = useNavigate();

  const onSubmit = (data: FormValues & { selectedTariff: number }) => {
    console.log('formData:', data);
    setTimeout(() => {
      navigate(`${PATHS.AUTH}/${PATHS.SIGN_IN}`);
    }, 1000);
    setStep(STEPS_ENUM.REGISTRATION);
  };

  const password = watch('password');

  return (
    <AuthCard
      title={
        step === STEPS_ENUM.REGISTRATION
          ? 'Registration'
          : 'Choose a tariff plan'
      }
    >
      <form
        onSubmit={handleSubmit((data) =>
          onSubmit({ ...data, selectedTariff: 0 })
        )}
      >
        {step === STEPS_ENUM.REGISTRATION ? (
          <SignUpForm
            errors={errors}
            control={control}
            password={password}
            isValid={isValid}
            onNextClick={() => setStep(STEPS_ENUM.TARIFF)}
          />
        ) : (
          <TariffForm
            onSubmit={(selectedTariff) =>
              onSubmit({ ...getValues(), selectedTariff: selectedTariff })
            }
          />
        )}
      </form>
    </AuthCard>
  );
}
