import { styled } from '@mui/system';
import { CSSProperties } from 'react';

export interface StyledRowProps {
  marginBottom?: CSSProperties['marginBottom'];
  gap?: CSSProperties['gap'];
}

export const Card = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  padding: '20px',
  border: '2px solid #EAEAEA',
  borderRadius: '12px',
  '&:hover': {
    backgroundColor: '#FFF',
    boxShadow: '10px 20px 80px rgba(7, 10, 27, 0.12)',
    borderColor: '#FFF',
    cursor: 'pointer',
  },
}));

export const StyledRow = styled('div')<StyledRowProps>(
  ({ marginBottom, gap }) => ({
    display: 'flex',
    alignItems: 'center',
    marginBottom,
    gap,
  })
);
