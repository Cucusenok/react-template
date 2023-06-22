import { Address, useGetCompanyInfoWithFragmentQuery } from '@gql/graphql';
import React from 'react';

const getAddressCity = (address: Address) => address.city;
export const FragmentQueryExample = () => {
  const { data, loading } = useGetCompanyInfoWithFragmentQuery();
  if (loading) return null;
  return <div>{getAddressCity(data?.company?.headquarters as Address)}</div>;
};
