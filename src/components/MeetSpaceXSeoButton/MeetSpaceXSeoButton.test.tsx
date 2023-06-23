import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MockedProvider, MockedResponse } from '@apollo/client/testing';
import { GetSpaceXSeoQuery, MeetSpaceXSeoButton } from '.';

const mocks:
  | readonly MockedResponse<Record<string, any>, Record<string, any>>[]
  | undefined = [
  {
    request: {
      query: GetSpaceXSeoQuery,
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
