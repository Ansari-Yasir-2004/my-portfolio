import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio hero content from data source', () => {
  render(<App />);
  expect(screen.getByText(/Yasir Ansari/i)).toBeInTheDocument();
});
