import { render, screen } from '@testing-library/react';
import App from './App';

test('renders lowprop link', () => {
  render(<App />);
  const linkElement = screen.getByText(/LowProp.Com/i);
  expect(linkElement).toBeInTheDocument();
});
