import { gql } from '@apollo/client';

export const GetSpaceXLaunchesQuery = gql`
  query GetSpaceXLaunches {
    launches {
      id
      details
      mission_name
      launch_date_local
      rocket {
        rocket_name
      }
    }
  }
`;
