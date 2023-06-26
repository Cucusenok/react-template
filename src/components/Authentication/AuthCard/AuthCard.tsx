import {
  Card,
  CardContainer,
  Logo,
  TitleTypography,
} from '@components/Authentication/components';
import { Container, ContainerProps } from '@mui/material';
import React from 'react';

export type AuthCardProps = React.PropsWithChildren &
  ContainerProps & {
    title?: string;
  };
export const AuthCard = ({ children, title = 'Sign In' }: AuthCardProps) => {
  return (
    <Container
      component="main"
      sx={{
        width: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <Card>
        <CardContainer>
          <Logo>Logo</Logo>
          <TitleTypography variant="h5">{title}</TitleTypography>
          {children}
        </CardContainer>
      </Card>
    </Container>
  );
};
