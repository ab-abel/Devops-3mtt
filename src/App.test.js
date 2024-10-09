import { render, screen } from '@testing-library/react';
import App from './App';

test('renders profile link', () => {
  render(<App />);
  const linkElement = screen.getByText(/profile /i);
  expect(linkElement).toBeInTheDocument();

  expect(linkElement).toHaveAttribute('href', 'https://github.com/ab-abel/Devops-3mtt');
});
