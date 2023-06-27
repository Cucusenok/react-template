import { MockedProvider, MockedResponse } from '@apollo/client/testing';
import { GetSpaceXSeoQuery } from '@gql/graphql';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { MeetSpaceXSeoButton, GetSpaceXSeoQuery as RawQuery } from '.';

const mocks: readonly MockedResponse<GetSpaceXSeoQuery>[] | undefined = [
  {
    request: {
      query: RawQuery,
    },
    result: {
      data: {
        company: { ceo: 'Elon Mask' },
      },
    },
  },
];

it('renders without error', async () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <MeetSpaceXSeoButton />
    </MockedProvider>
  );
  // MuiCircularProgress-root
  expect(await screen.findByText('Elon Mask')).toBeInTheDocument();
});
