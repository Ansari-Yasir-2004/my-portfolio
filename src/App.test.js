import { render, screen } from '@testing-library/react';
import App from './App';

test('renders animated portfolio hero heading', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /Yasir Ansari/i, level: 2 })).toBeInTheDocument();
  expect(screen.getByText(/Available for full-time opportunities/i)).toBeInTheDocument();
});
