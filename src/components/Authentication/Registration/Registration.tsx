import {
  SelectChangeEvent,
  CardActionArea,
  CardActions,
  CardContent,
  FormControl,
  InputLabel,
  TextField,
  Container,
  MenuItem,
  Button,
  Select,
  Grid,
  Box,
} from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import React, { useState } from 'react';

import {
  TariffCardHeader,
  DividerStyled,
  AvatarStyled,
  LinkStyled,
  CardStyled,
  DividerBox,
  IconAvatar,
  SocialText,
  TariffCard,
  SocialBox,
  LinksBox,
  Wrapper,
  Title,
} from './Registration.styles';
import {
  RegisterProps,
  FeaturesType,
  TariffType,
  FormValues,
} from './Registration.types';
import LinkeddInIcon from '../../icons/LinkeddInIcon';
import TwitterIcon from '../../icons/TwitterIcon';
import GoogleIcon from '../../icons/GoogleIcon';
import { tariffData } from './mockData';

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
    console.log(dataWithTariff);
    setTimeout(() => {
      setIsAuth('SignIn');
    }, 1000);
  };

  const password = watch('password');

  return (
    <Container maxWidth={step === 1 ? 'xs' : 'sm'} component="main">
      <CardStyled>
        <Wrapper>
          {step === 1 && <AvatarStyled>Logo</AvatarStyled>}
          <Title variant="h5">
            {step === 1 ? 'Registration' : 'Choose a tariff plan'}
          </Title>
          <form
            onSubmit={handleSubmit((data) => onSubmit(data))}
            style={{ textAlign: 'left' }}
          >
            {step === 1 ? (
              <>
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
                <Controller
                  render={({ field: { value, onChange } }) => (
                    <FormControl
                      sx={{ mt: 2, mb: 1, minWidth: '100%' }}
                      variant="outlined"
                      size="medium"
                    >
                      <InputLabel>Account type</InputLabel>
                      <Select
                        onChange={(event: SelectChangeEvent) =>
                          onChange(event.target.value)
                        }
                        labelId="accountType"
                        label="Account type"
                        color="primary"
                        size="medium"
                        value={value}
                        fullWidth
                      >
                        {selectItems.map((item) => (
                          <MenuItem value={item.title} key={item.id}>
                            {item.title}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  )}
                  rules={{ required: true }}
                  name="accountType"
                  control={control}
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
                <LinksBox>
                  <LinkStyled
                    onClick={() => setIsAuth('SignIn')}
                    sx={{ cursor: 'pointer' }}
                    variant="text"
                  >
                    Already have an account?
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
              </>
            ) : (
              <>
                <Grid spacing={2} container>
                  {tariffData.map((tariff: TariffType) => (
                    <Grid key={tariff.id} xs={6} item>
                      <TariffCard>
                        <CardActionArea
                          onClick={() => setSelectedTariff(tariff.id)}
                        >
                          <TariffCardHeader>{tariff.price}</TariffCardHeader>
                          <CardContent sx={{ minHeight: '145px' }}>
                            <Box sx={{ textAlign: 'center' }}>
                              {tariff?.features?.map(
                                (feature: FeaturesType) => (
                                  <p
                                    style={{ margin: '4px auto' }}
                                    key={feature.id}
                                  >
                                    {feature.title}
                                  </p>
                                )
                              )}
                            </Box>
                          </CardContent>
                        </CardActionArea>
                        <CardActions sx={{ justifyContent: 'center' }}>
                          <Button
                            variant={
                              tariff.id === selectedTariff
                                ? 'contained'
                                : 'outlined'
                            }
                            onClick={() => setSelectedTariff(tariff.id)}
                            size="small"
                          >
                            {tariff.price}
                          </Button>
                        </CardActions>
                      </TariffCard>
                    </Grid>
                  ))}
                </Grid>
                <Button
                  disabled={!isValid}
                  sx={{ mt: 6 }}
                  type="submit"
                  fullWidth
                >
                  CONFIRM
                </Button>
              </>
            )}
          </form>
        </Wrapper>
      </CardStyled>
    </Container>
  );
}
