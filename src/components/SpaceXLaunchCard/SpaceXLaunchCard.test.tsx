import {
  SpaceXLaunchCard,
  spaceXLaunchCardInitialProps,
} from '@components/SpaceXLaunchCard/SpaceXLaunchCard';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

it('renders default props', async () => {
  render(<SpaceXLaunchCard />);
  screen.debug();
  expect(
    await screen.findByText(spaceXLaunchCardInitialProps.mission_name)
  ).toBeInTheDocument();
  expect(
    await screen.findByText(spaceXLaunchCardInitialProps.details)
  ).toBeInTheDocument();
});

it('renders all props', async () => {
  const props = {
    mission_name: 'Название',
    rocket: { rocket_name: 'Хештэг' },
    launch_date_local: '2032-10-15',
    details: 'Какая-то информация или подробное описание',
    price: 12000,
  };
  render(<SpaceXLaunchCard {...props} />);

  for (const prop in props) {
    expect(await screen.findByText(prop)).toBeInTheDocument();
  }
});
