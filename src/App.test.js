import { render, screen } from '@testing-library/react';
import Sidebar from './components/Sidebar';

test('renders profile link', () => {
  render(<Sidebar />);

  const linkElement = screen.getByText(/profile/i);
  expect(linkElement).toBeInTheDocument();

  expect(linkElement).toHaveAttribute('href', 'https://github.com/ab-abel/Devops-3mtt');


  // Check if the link opens in a new tab
  expect(linkElement).toHaveAttribute('target', '_blank');
  expect(linkElement).toHaveAttribute('rel', 'noopener noreferrer');
});
