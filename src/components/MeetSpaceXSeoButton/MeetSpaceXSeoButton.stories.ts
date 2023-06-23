import type { Meta, StoryObj } from '@storybook/react';
import { GraphQLError } from 'graphql/error';

import { GetSpaceXSeoQuery, MeetSpaceXSeoButton } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  tags: ['autodocs'],
  component: MeetSpaceXSeoButton,
  title: 'MeetSpaceXSeoButton',
} satisfies Meta<typeof MeetSpaceXSeoButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MeetSpaceXSeoButtonDefault: Story = {
  args: {
    onClick: (ceo: string) => alert(`Hello, ${ceo}!`),
  },
  parameters: {
    apolloClient: {
      // do not put MockedProvider here, you can, but its preferred to do it in preview.js
      mocks: [
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
      ],
    },
  },
};

export const MeetSpaceXSeoButtonDoRequest: Story = {
  args: {
    onClick: (ceo: string) => alert(`Hello, ${ceo}!`),
  },
  parameters: {
    apolloClient: {
      // do not put MockedProvider here, you can, but its preferred to do it in preview.js
      mocks: [
        {
          request: {
            query: GetSpaceXSeoQuery,
          },
          delay: 3000,
          result: {
            data: {
              company: { ceo: 'Elon Mask' },
            },
            loading: true,
          },
        },
      ],
    },
  },
};

export const MeetSpaceXSeoButtonError: Story = {
  args: {
    onClick: (ceo: string) => alert(`Hello, ${ceo}!`),
  },
  parameters: {
    apolloClient: {
      // do not put MockedProvider here, you can, but its preferred to do it in preview.js
      mocks: [
        {
          request: {
            query: GetSpaceXSeoQuery,
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
