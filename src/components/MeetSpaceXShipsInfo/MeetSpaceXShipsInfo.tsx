import { RequestLoader } from '@components/Loader/RequestLoader';
import { Ship, useSpaceXShipsInfoQuery } from '@gql/graphql';
import { CardActionArea, Grid } from '@mui/material';
import React from 'react';

import {
  ErrorField,
  MeetSpaceXShipsInfoProps,
  ShipCard,
  ShipCardMedia,
  ShipText,
  ShipTitle,
} from '.';

export const MeetSpaceXShipsInfo = ({
  titleColor,
  onClick,
}: MeetSpaceXShipsInfoProps) => {
  const { data, error, loading } = useSpaceXShipsInfoQuery();
  const ships: [Ship] | undefined = data?.ships as [Ship] | undefined;

  return (
    <RequestLoader loading={loading} error={error}>
      {error ? (
        <ErrorField>{JSON.stringify(error)}</ErrorField>
      ) : (
        <Grid container maxWidth="1200px" spacing={2} sx={{ mt: 2, mb: 2 }}>
          {ships &&
            ships.map((ship: Ship) => (
              <Grid item xs={12} sm={6} md={4} key={ship.id}>
                <ShipCard>
                  <CardActionArea
                    onClick={() =>
                      onClick &&
                      ships &&
                      onClick(ship.name ? ship.name : 'Default ship')
                    }
                  >
                    <ShipCardMedia
                      image={
                        ship.image
                          ? ship.image
                          : 'https://i.imgur.com/woCxpkj.jpg'
                      }
                      title={ship.name ? ship.name : 'Default ship'}
                    />
                    <ShipTitle color={titleColor || 'red'}>
                      {ship.name}
                    </ShipTitle>
                    <ShipText>{ship.type}</ShipText>
                  </CardActionArea>
                </ShipCard>
              </Grid>
            ))}
        </Grid>
      )}
    </RequestLoader>
  );
};
