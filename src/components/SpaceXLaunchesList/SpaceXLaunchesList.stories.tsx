import type { Meta, StoryObj } from '@storybook/react';

import { GetSpaceXLaunchesQuery, SpaceXLaunchesList } from '.';

const meta = {
  tags: ['autodocs'],
  component: SpaceXLaunchesList,
  title: 'SpaceXLaunchesList',
} satisfies Meta<typeof SpaceXLaunchesList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SpaceXLaunchCardDefault: Story = {
  args: {},
  parameters: {
    apolloClient: {
      mocks: [
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
                  details: 'Engine failure at 33 seconds and loss of vehicle',
                },
                {
                  id: '5eb87cdaffd86e000604b32b',
                  mission_name: 'DemoSat',
                  launch_date_local: '2007-03-21T13:10:00+12:00',
                  rocket: {
                    rocket_name: 'Falcon 1',
                  },
                },
                {
                  id: '5eb87cdbffd86e000604b32c',
                  mission_name: 'Trailblazer',
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
      ],
    },
  },
};
