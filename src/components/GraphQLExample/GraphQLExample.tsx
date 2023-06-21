import { CircularProgress } from '@mui/material';
import { useGetSeoQuery } from '@gql/graphql';
import React from 'react';

export const GraphQLExample = () => {
  const { data, error, loading } = useGetSeoQuery();

  if (loading) {
    return <CircularProgress />;
  }
  if (error) {
    return <div>error</div>;
  }
  return <div> {JSON.stringify(data)} </div>;
};
