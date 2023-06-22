import { RequestLoader } from '@components/Loader/RequestLoader';
import { useGetSpaceXSeoQuery } from '@gql/graphql';
import React from 'react';
import { MeetSpaceXSeoButtonProps, Button, CEOName, ErrorField } from '.';

export const MeetSpaceXSeoButton = ({ onClick }: MeetSpaceXSeoButtonProps) => {
  const { data, error, loading } = useGetSpaceXSeoQuery();
  return (
    <Button
      onClick={() =>
        onClick && data?.company?.ceo && onClick(data?.company?.ceo)
      }
    >
      <RequestLoader loading={loading} error={error}>
        Meet SpaceX CEO:
        {error ? (
          <ErrorField>{JSON.stringify(error)}</ErrorField>
        ) : (
          <CEOName>{data?.company?.ceo}</CEOName>
        )}
      </RequestLoader>
    </Button>
  );
};
