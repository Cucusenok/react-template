import { StyledRowProps } from '@components/SpaceXLaunchCard/SpaceXLaunchCard.types';
import { styled } from '@mui/system';

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

export const StyledRow = styled('div')(({ mb, gap }: StyledRowProps) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: mb,
  gap,
}));
