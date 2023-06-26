import { Chip } from '@mui/material';
import { styled } from '@mui/system';

export const StyledChip = styled(Chip)(() => ({
  backgroundColor: '#F3F3F3',
  height: 'auto',
  color: '#38CB89',
  fontWeight: '500',
  fontSize: '14px',
  lineHeight: '1.5',
  padding: '2px 0',
  '.MuiChip-icon': {
    color: '#38CB89',
    fontSize: 8,
    marginLeft: 8,
  },
}));
