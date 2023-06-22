import { useGetSeoQuery } from '@gql/graphql';
import React from 'react';

export const Launches = () => {
  const { data } = useGetSeoQuery();
  return <div>{JSON.stringify(data)}</div>;
};
