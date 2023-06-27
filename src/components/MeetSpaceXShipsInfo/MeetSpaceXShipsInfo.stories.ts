import type { Meta, StoryObj } from '@storybook/react';
import { GraphQLError } from 'graphql/error';

import { GetSpaceXShipsInfoQuery, MeetSpaceXShipsInfo } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  tags: ['autodocs'],
  component: MeetSpaceXShipsInfo,
  title: 'MeetSpaceXShipsInfo',
} satisfies Meta<typeof MeetSpaceXShipsInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MeetSpaceXShipsInfoDefault: Story = {
  args: {
    titleColor: 'green',
    onClick: (ceo: string) => alert(`Ship: ${ceo}!`),
  },
  parameters: {
    apolloClient: {
      // do not put MockedProvider here, you can, but its preferred to do it in preview.js
      mocks: [
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
              ],
            },
          },
        },
      ],
    },
  },
};

export const MeetSpaceXShipsInfoDoRequest: Story = {
  args: {
    titleColor: 'red',
    onClick: (ceo: string) => alert(`Ship: ${ceo}!`),
  },
  parameters: {
    apolloClient: {
      // do not put MockedProvider here, you can, but its preferred to do it in preview.js
      mocks: [
        {
          request: {
            query: GetSpaceXShipsInfoQuery,
          },
          delay: 3000,
          result: {
            data: {
              ships: [
                {
                  id: '5ea6ed2d080df4000697c901',
                  name: 'American Champion',
                  image: 'https://i.imgur.com/woCxpkj.jpg',
                  type: 'Tug',
                },
              ],
            },
            loading: true,
          },
        },
      ],
    },
  },
};

export const MeetSpaceXShipsInfoError: Story = {
  args: {
    onClick: (ceo: string) => alert(`Ship: ${ceo}!`),
  },
  parameters: {
    apolloClient: {
      // do not put MockedProvider here, you can, but its preferred to do it in preview.js
      mocks: [
        {
          request: {
            query: GetSpaceXShipsInfoQuery,
          },
          delay: 1000,
          result: {
            errors: [new GraphQLError('Error!')],
          },
        },
      ],
    },
  },
};
