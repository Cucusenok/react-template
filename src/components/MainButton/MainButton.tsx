import { CSSProperties } from "react";
import Button, {ButtonProps} from '@mui/material/Button';

interface MainButtonProps {
    fullWidth?: boolean;
    color?: ButtonProps["color"];
    text: string,
}


export const MainButton = ({fullWidth, color, text} : MainButtonProps) => {
    return <Button fullWidth={fullWidth} color={color}>{text}</Button>
}