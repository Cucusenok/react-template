import { gql } from '@apollo/client';

export const GetSpaceXSeoQuery = gql`
  query GetSpaceXSeo {
    company {
      ceo
    }
  }
`;
