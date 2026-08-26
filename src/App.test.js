import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';
import { initializeTimes, updateTimes } from './bookingAPI';

test('Renders the BookingForm static text label', () => {
  const mockTimes = ['17:00', '18:00'];
  const mockDispatch = jest.fn();

  render(
    <BookingForm availableTimes={mockTimes} dispatch={mockDispatch} />
  );

  const labelElement = screen.getByText("Choose date");
  expect(labelElement).toBeInTheDocument();
});

test('initializeTimes returns a non-empty array of available times', () => {
  const initialTimes = initializeTimes();
  expect(Array.isArray(initialTimes)).toBe(true);
  expect(initialTimes.length).toBeGreaterThan(0);
});

test('updateTimes returns an array of times for the selected date', () => {
  const initialState = ['17:00', '18:00'];
  const action = { type: 'UPDATE_TIMES', date: '2026-08-26' };

  const newState = updateTimes(initialState, action);
  expect(Array.isArray(newState)).toBe(true);
});