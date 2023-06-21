import { ApolloError } from '@apollo/client/errors';
import { CircularProgress } from '@mui/material';
import React from 'react';

/*
    Real type should be the @apollo/client - QueryResult,
 */
export type RequestLoaderProps = React.PropsWithChildren & {
  error: ApolloError | undefined;
  loading: boolean;
};

export const RequestLoader = (props: RequestLoaderProps) => {
  if (props.loading) return <CircularProgress />;
  if (props.error) return <div>Loading error</div>;
  return props.children;
};
