import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';

test('renders lowprop link', () => {
  render(<App />);
  const linkElement = screen.getByText(/LowProp.Com/i);
  expect(linkElement).toBeInTheDocument();
});

test('yearly mortgage calculation is correct', () => {
  render(<App />);
  expect( screen.getByTestId('MortgagePaymentYearly')[Object.keys(screen.getByTestId('MortgagePaymentYearly'))[1]].children[0] ).toBe("5153.49");
});

test('monthly mortgage calculation is correct', () => {
  render(<App />);
  expect( screen.getByTestId('MortgagePayment')[Object.keys(screen.getByTestId('MortgagePayment'))[1]].children[0] ).toBe("429.46");
});

test('monthly mortgage calculation is correct', async () => {
  render(<App />);
  userEvent.type( screen.getByTestId('PurchasePrice'), '{selectall}{backspace}200000' ); // WIP: change value should lead to new mortgage amount
  await waitFor ( () => expect( screen.getByTestId('MortgagePayment')[Object.keys(screen.getByTestId('MortgagePayment'))[1]].children[0] ).toBe("429.46") );
});