import { RequestLoader } from '@components/Loader/RequestLoader';
import { useGetSpaceXSeoQuery } from '@gql/graphql';
import React from 'react';

import { Button } from './MeetSpaceXSeoButton.styles';
import { MeetSpaceXSeoButtonProps } from './MeetSpaceXSeoButton.types';

export const MeetSpaceXSeoButton = ({ onClick }: MeetSpaceXSeoButtonProps) => {
  const { data, error, loading } = useGetSpaceXSeoQuery();
  return (
    <Button onClick={onClick}>
      <RequestLoader loading={loading} error={error}>
        Meet seo:
        {data?.company?.ceo}
      </RequestLoader>
    </Button>
  );
};
