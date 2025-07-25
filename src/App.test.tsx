import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders Navbar, Hero, and Footer', () => {
  render(<App />);
  expect(screen.getByText(/MyApp/i)).toBeInTheDocument();
  expect(screen.getByText(/Welcome to MyApp/i)).toBeInTheDocument();
  expect(screen.getByText(/All rights reserved/i)).toBeInTheDocument();
});
