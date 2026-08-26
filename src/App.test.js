import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';
import { initializeTimes, updateTimes } from './bookingAPI';

// Step 1: Test static text rendering in BookingForm
test('Renders the BookingForm static text label', () => {
  const mockTimes = ['17:00', '18:00'];
  const mockDispatch = jest.fn();
  const mockSubmitForm = jest.fn();

  render(
    <BookingForm
      availableTimes={mockTimes}
      dispatch={mockDispatch}
      submitForm={mockSubmitForm}
    />
  );

  const labelElement = screen.getByText("Choose date");
  expect(labelElement).toBeInTheDocument();
});

// Step 1: Update initializeTimes test for API fetching
test('initializeTimes returns a non-empty array of available booking times', () => {
  const initialTimes = initializeTimes();
  expect(Array.isArray(initialTimes)).toBe(true);
  expect(initialTimes.length).toBeGreaterThan(0);
});

// Step 2: Update updateTimes test with selected date dispatch
test('updateTimes returns available booking times based on dispatched date', () => {
  const initialState = ['17:00', '18:00'];
  const action = { type: 'UPDATE_TIMES', date: '2026-08-26' };

  const updatedTimes = updateTimes(initialState, action);
  expect(Array.isArray(updatedTimes)).toBe(true);
  expect(updatedTimes.length).toBeGreaterThan(0);
});