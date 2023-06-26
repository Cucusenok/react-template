import { MockedProvider, MockedResponse } from '@apollo/client/testing';
import { SpaceXLaunchesList } from '@components/SpaceXLaunchesList/SpaceXLaunchesList';
import { GetSpaceXLaunchesQuery } from '@components/SpaceXLaunchesList/SpaceXLaunchesList.gql';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

const mocks:
  | readonly MockedResponse<Record<string, any>, Record<string, any>>[]
  | undefined = [
  {
    request: {
      query: GetSpaceXLaunchesQuery,
    },
    result: {
      data: {
        launches: [
          {
            id: '5eb87cd9ffd86e000604b32a',
            mission_name: 'FalconSat',
            launch_date_local: '2006-03-25T10:30:00+12:00',
            rocket: {
              rocket_name: 'Falcon 1',
            },
            details: 'Engine failure at 33 seconds and loss of vehicle',
          },
          {
            id: '5eb87cdaffd86e000604b32b',
            mission_name: 'DemoSat',
            launch_date_local: '2007-03-21T13:10:00+12:00',
            rocket: {
              rocket_name: 'Falcon 1',
            },
            details:
              'Successful first stage burn and transition to second stage, maximum altitude 289 km, Premature engine shutdown at T+7 min 30 s, Failed to reach orbit, Failed to recover first stage',
          },
          {
            id: '5eb87cdbffd86e000604b32c',
            mission_name: 'Trailblazer',
            launch_date_local: '2008-08-03T15:34:00+12:00',
            rocket: {
              rocket_name: 'Falcon 1',
            },
            details:
              'Residual stage 1 thrust led to collision between stage 1 and stage 2',
          },
        ],
      },
    },
  },
];

it('renders without error', async () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <SpaceXLaunchesList />
    </MockedProvider>
  );

  expect(await screen.findByText('FalconSat')).toBeInTheDocument();
  expect(await screen.findByText('DemoSat')).toBeInTheDocument();
  expect(await screen.findByText('Trailblazer')).toBeInTheDocument();

  expect(await screen.findByText('Loading error')).not.toBeInTheDocument();
});
