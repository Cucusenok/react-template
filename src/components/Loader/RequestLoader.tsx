import { ApolloError } from '@apollo/client/errors';
import { CircularProgress } from '@mui/material';
import React from 'react';

/*
    Real type should be the @apollo/client - QueryResult,
 */
export interface ErrorComponentProps {
  error: ApolloError | undefined;
}
export type RequestLoaderProps = React.PropsWithChildren &
  ErrorComponentProps & {
    loading: boolean;
    ErrorComponent?: React.ComponentType<ErrorComponentProps>;
  };

const ErrorComponentDefault = ({ error }: ErrorComponentProps) => (
  <div style={{ color: 'red' }}>{error?.message}</div>
);

export const RequestLoader = ({
  loading,
  error,
  children,
  ErrorComponent,
}: RequestLoaderProps) => {
  if (loading) return <CircularProgress />;
  if (error)
    return ErrorComponent ? (
      <ErrorComponent error={error} />
    ) : (
      <ErrorComponentDefault error={error} />
    );
  return <>{children}</>;
};
