import { AuthCard } from '@components/Authentication/AuthCard/AuthCard';
import { Grid } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FieldErrors } from 'react-hook-form/dist/types/errors';
import { Control } from 'react-hook-form/dist/types/form';
import { useNavigate } from 'react-router-dom';

import { FormValues, TariffType } from '.';
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
}

interface SignUpFormProps {
  errors: FieldErrors<FormValues>;
  control: Control<FormValues>;
  password: string;
  isValid: boolean;
  onNextClick: () => void;
}
const SignUpForm = ({
  errors,
  control,
  password,
  isValid,
  onNextClick,
}: SignUpFormProps) => {
  return (
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
        onClick={onNextClick}
        sx={{ mt: 2, mb: 2 }}
        variant="contained"
        disabled={!isValid}
        fullWidth
      >
        NEXT
      </Button>
      <Links>
        <TextLink href="/auth/sign-in">Already have an account?</TextLink>
      </Links>
      <Divider text="Or continue with" />
      <SocialsBox />
    </>
  );
};

interface TariffFormProps {
  onSubmit: (selectedTariff: number) => void;
}

const TariffForm = ({ onSubmit }: TariffFormProps) => {
  const [selectedTariff, setSelectedTariff] = useState<null | number>(0);

  return (
    <>
      <Grid spacing={2} container>
        {tariffData.map((tariff: TariffType) => (
          <Grid key={tariff.id} xs={6} item>
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
        onClick={() => selectedTariff && onSubmit(selectedTariff)}
      >
        CONFIRM
      </Button>
    </>
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
    mode: 'onBlur',
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
      navigate('/auth/sign-in');
    }, 1000);
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
        style={{ textAlign: 'left' }}
      >
        {step === STEPS_ENUM.REGISTRATION ? (
          <SignUpForm
            errors={errors}
            control={control}
            password={password}
            isValid={isValid}
            onNextClick={() => setStep(2)}
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
