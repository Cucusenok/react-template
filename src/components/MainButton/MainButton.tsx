import Button, { ButtonProps } from '@mui/material/Button';

interface MainButtonProps {
  color?: ButtonProps['color'];
  fullWidth?: boolean;
  text: string;
}

export const MainButton = ({
  text,
  color = 'primary',
  fullWidth = false,
}: MainButtonProps) => (
  <Button fullWidth={fullWidth} color={color}>
    {text}
  </Button>
);
