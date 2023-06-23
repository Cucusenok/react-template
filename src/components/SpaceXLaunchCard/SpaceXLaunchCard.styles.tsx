import { styled } from '@mui/system';

export const Card = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '20px',
  border: '2px solid #EAEAEA',
  borderRadius: '12px',
  [theme.breakpoints.up('lg')]: {},
}));

export const TopRow = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  marginBottom: '8px',
  [theme.breakpoints.up('lg')]: {},
}));

export const RowWithSmallSpacing = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  [theme.breakpoints.up('lg')]: {},
}));

export const RowWithMediumSpacing = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '24px',
  [theme.breakpoints.up('lg')]: {},
}));
