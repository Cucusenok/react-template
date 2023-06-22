import type { StoryObj, Meta } from '@storybook/react';

import { MeetSpaceXSeoButton } from '@components/MeetSpaceXSeoButton/MeetSpaceXSeoButton';
import { gql } from '@apollo/client';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  tags: ['autodocs'],
  component: MeetSpaceXSeoButton,
  title: 'MeetSpaceXSeoButton',
  argTypes: {
    /*
            backgroundColor: { control: 'color' },
    */
  },
} satisfies Meta<typeof MeetSpaceXSeoButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary1: Story = {
  args: {
    onClick: (ceo: string) => alert(`Hello, ${ceo}!`),
  },
  parameters: {
    apolloClient: {
      // do not put MockedProvider here, you can, but its preferred to do it in preview.js
      mocks: [
        {
          request: {
            query: gql`
              query GetSpaceXSeo {
                company {
                  ceo
                }
              }
            `,
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
