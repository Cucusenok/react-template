import {
  ErrorComponentProps,
  RequestLoader,
} from '@components/Loader/RequestLoader';
import { useGetSpaceXSeoQuery } from '@gql/graphql';
import React from 'react';

import { Button, CEOName, MeetSpaceXSeoButtonProps } from '.';

const Error = ({ error }: ErrorComponentProps) => (
  <div>{JSON.stringify(error)}</div>
);

export const MeetSpaceXSeoButton = ({ onClick }: MeetSpaceXSeoButtonProps) => {
  const { data, error, loading } = useGetSpaceXSeoQuery();
  return (
    <Button
      onClick={() =>
        onClick && data?.company?.ceo && onClick(data?.company?.ceo)
      }
    >
      <RequestLoader loading={loading} error={error} ErrorComponent={Error}>
        Meet SpaceX CEO:
        <CEOName>{data?.company?.ceo}</CEOName>
      </RequestLoader>
    </Button>
  );
};
