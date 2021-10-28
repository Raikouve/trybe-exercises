import { render, screen } from '@testing-library/react';
import App from './App';

test('The text "Bisavô" appears on screen', () => {
  render(<App />);
  const greatGrandfatatherTitle = screen.getByRole('heading', {
    level: 1,
    name: /Bisavô/i,
  })
  expect(greatGrandfatatherTitle).toBeInTheDocument();
});
