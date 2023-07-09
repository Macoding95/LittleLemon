import { render, screen, fireEvent } from '@testing-library/react';
import Reservations from './components/Reservations';
import BookingForm from './components/Content/BookingForm';

test('should render a text called Savor your spot at Little Lemon', () => {
  render(<Reservations />);
  const text = screen.getByText('Savor your spot at Little Lemon');
  expect(text).toBeInTheDocument();
});

test('should remove selected time from available times on form submission', () => {
  render(<BookingForm />);

  const timeSelect = screen.getByLabelText('Time');
  fireEvent.change(timeSelect, { target: { value: '18:00' } });

  const submitButton = screen.getByText('Make a reservation');
  fireEvent.click(submitButton);

  const popUpClick = screen.getByText('Take me home');
  fireEvent.click(popUpClick);

  const updatedTimeOption = screen.queryByText('18:00');
  expect(updatedTimeOption).not.toBeInTheDocument();
});

test('should appear a popup message when the user clicks on the submit button', () => {
  render(<BookingForm />);

  const submitButton = screen.getByText('Make a reservation');
  fireEvent.click(submitButton);

  const popupDiv = screen.getByRole('popup');
  expect(popupDiv).toBeInTheDocument();
})