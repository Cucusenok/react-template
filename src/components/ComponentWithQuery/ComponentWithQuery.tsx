import { RequestLoader } from '@components/Loader/RequestLoader';
import { useGetCompanyLeadersQuery } from '@gql/graphql';
import React from 'react';

export const ComponentWithQuery = () => {
  const { data, error, loading } = useGetCompanyLeadersQuery();

  return (
    <RequestLoader loading={loading} error={error}>
      <table>
        <tr>
          <th>CEO</th>
          <th>{data?.company?.ceo}</th>
        </tr>
        <tr>
          <td>COO</td>
          <td>{data?.company?.coo}</td>
        </tr>
        <tr>
          <td>CTO</td>
          <td>{data?.company?.cto}</td>
        </tr>
      </table>
    </RequestLoader>
  );
};
