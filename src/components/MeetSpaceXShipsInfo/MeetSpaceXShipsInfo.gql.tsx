import { gql } from '@apollo/client';

export const GetSpaceXShipsInfoQuery = gql`
  query SpaceXShipsInfo {
    ships {
      id
      name
      image
      type
    }
  }
`;
