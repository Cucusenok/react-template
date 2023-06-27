import { MockedProvider, MockedResponse } from '@apollo/client/testing';
import { SpaceXShipsInfoQuery } from '@gql/graphql';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { GetSpaceXShipsInfoQuery, MeetSpaceXShipsInfo } from '.';

const mocks: readonly MockedResponse<SpaceXShipsInfoQuery>[] = [
  {
    request: {
      query: GetSpaceXShipsInfoQuery,
    },
    result: {
      data: {
        ships: [
          {
            id: '5ea6ed2d080df4000697c901',
            name: 'American Champion',
            image: 'https://i.imgur.com/woCxpkj.jpg',
            type: 'Tug',
          },
          {
            id: '5ea6ed2d080df4000697c902',
            name: 'American Islander',
            image: 'https://i.imgur.com/jmj8Sh2.jpg',
            type: 'Cargo',
          },
        ],
      },
    },
  },
];

it('renders without error', async () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <MeetSpaceXShipsInfo />
    </MockedProvider>
  );
  expect(await screen.findByText('American Champion')).toBeInTheDocument();
  expect(await screen.findByText('American Islander')).toBeInTheDocument();
});

const errorMock: readonly MockedResponse<SpaceXShipsInfoQuery>[] = [
  {
    request: {
      query: GetSpaceXShipsInfoQuery,
    },
    error: new Error('Loading error'),
  },
];

it('renders error state', async () => {
  render(
    <MockedProvider mocks={errorMock} addTypename={false}>
      <MeetSpaceXShipsInfo />
    </MockedProvider>
  );

  expect(await screen.findByText('Loading error')).toBeInTheDocument();
});
