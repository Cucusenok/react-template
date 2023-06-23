import { SpaceXLaunchCard } from '@components/SpaceXLaunchCard/SpaceXLaunchCard';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

it('renders without error', async () => {
  render(<SpaceXLaunchCard />);
  expect(await screen.findByText('Название')).toBeInTheDocument();
});
