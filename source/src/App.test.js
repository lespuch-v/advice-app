import { render, screen } from '@testing-library/react';
import App from './App';

test('fun starts now!', () => {
  render(<App />);
  const headerElement = screen.getByText(/advice #/i);
  expect(headerElement).toBeInTheDocument();
});

test("check if the main container DIV exists", () => {
  render(<App/>)
  const button = screen.getByRole('button', {name: "Fire"}); 
  expect(button).toBeInTheDocument()
})

