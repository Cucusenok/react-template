import { RequestLoader } from '@components/Loader/RequestLoader';
import { SpaceXLaunchCard } from '@components/SpaceXLaunchCard';
import { Grid } from '@components/SpaceXLaunchesList/SpaceXLaunchesList.styles';
import { useGetSpaceXLaunchesQuery } from '@gql/graphql';
import React from 'react';

export const SpaceXLaunchesList = () => {
  const { data, error, loading } = useGetSpaceXLaunchesQuery();

  return (
    <RequestLoader loading={loading} error={error}>
      {!error && (
        <Grid>
          {data?.launches?.map((item) => (
            <SpaceXLaunchCard
              key={item?.id}
              id={item?.id}
              mission_name={item?.mission_name}
              launch_date_local={item?.launch_date_local}
              details={item?.details}
              rocket={{ rocket_name: item?.rocket?.rocket_name }}
              price={24000}
            />
          ))}
        </Grid>
      )}
    </RequestLoader>
  );
};
