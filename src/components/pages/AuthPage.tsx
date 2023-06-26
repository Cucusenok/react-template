import { Authentication } from '@components/Authentication';
import { styled } from '@mui/system';
import React from 'react';

export const PageContainer = styled('div')(({ theme }) => ({
  width: '100%',
  height: '100vh',
  background: '#282c34',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.up('lg')]: {
    display: 'block',
  },
}));
export const AuthPage = () => {
  return (
    <PageContainer>
      <Authentication />
    </PageContainer>
  );
};
