import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from './BookingForm';
import { initializeTimes, updateTimes } from './bookingAPI';

const mockTimes = ['17:00', '18:00', '19:00'];
const mockDispatch = jest.fn();
const mockSubmitForm = jest.fn();

// --- Step 1: HTML5 Attribute Validation Tests ---

test('Date input has required and min attributes applied', () => {
  render(
    <BookingForm
      availableTimes={mockTimes}
      dispatch={mockDispatch}
      submitForm={mockSubmitForm}
    />
  );
  const dateInput = screen.getByLabelText(/Choose date/i);
  expect(dateInput).toHaveAttribute('required');
  expect(dateInput).toHaveAttribute('type', 'date');
});

test('Guests input has required, min="1", and max="10" attributes applied', () => {
  render(
    <BookingForm
      availableTimes={mockTimes}
      dispatch={mockDispatch}
      submitForm={mockSubmitForm}
    />
  );
  const guestsInput = screen.getByLabelText(/Number of guests/i);
  expect(guestsInput).toHaveAttribute('required');
  expect(guestsInput).toHaveAttribute('min', '1');
  expect(guestsInput).toHaveAttribute('max', '10');
});

test('Time select field has required attribute applied', () => {
  render(
    <BookingForm
      availableTimes={mockTimes}
      dispatch={mockDispatch}
      submitForm={mockSubmitForm}
    />
  );
  const timeSelect = screen.getByLabelText(/Choose time/i);
  expect(timeSelect).toHaveAttribute('required');
});

// --- Step 2: JavaScript Form State Validation Tests (Valid & Invalid States) ---

test('Submit button is disabled when form fields are invalid', () => {
  render(
    <BookingForm
      availableTimes={mockTimes}
      dispatch={mockDispatch}
      submitForm={mockSubmitForm}
    />
  );
  
  const submitButton = screen.getByRole('button', { name: /On Click/i });
  expect(submitButton).toBeDisabled();
});

test('Submit button is enabled when all form fields are valid', () => {
  render(
    <BookingForm
      availableTimes={mockTimes}
      dispatch={mockDispatch}
      submitForm={mockSubmitForm}
    />
  );

  const dateInput = screen.getByLabelText(/Choose date/i);
  const timeSelect = screen.getByLabelText(/Choose time/i);
  const guestsInput = screen.getByLabelText(/Number of guests/i);
  const submitButton = screen.getByRole('button', { name: /On Click/i });

  // Fill in valid details
  fireEvent.change(dateInput, { target: { value: '2026-09-01' } });
  fireEvent.change(timeSelect, { target: { value: '17:00' } });
  fireEvent.change(guestsInput, { target: { value: '4' } });

  expect(submitButton).not.toBeDisabled();
});

test('Submit button disables when guest count is out of valid range (e.g. 0)', () => {
  render(
    <BookingForm
      availableTimes={mockTimes}
      dispatch={mockDispatch}
      submitForm={mockSubmitForm}
    />
  );

  const dateInput = screen.getByLabelText(/Choose date/i);
  const timeSelect = screen.getByLabelText(/Choose time/i);
  const guestsInput = screen.getByLabelText(/Number of guests/i);
  const submitButton = screen.getByRole('button', { name: /On Click/i });

  // Enter invalid guest count of 0
  fireEvent.change(dateInput, { target: { value: '2026-09-01' } });
  fireEvent.change(timeSelect, { target: { value: '17:00' } });
  fireEvent.change(guestsInput, { target: { value: '0' } });

  expect(submitButton).toBeDisabled();
});

// --- API Function Unit Tests ---

test('initializeTimes returns a non-empty array', () => {
  const initialTimes = initializeTimes();
  expect(Array.isArray(initialTimes)).toBe(true);
  expect(initialTimes.length).toBeGreaterThan(0);
});

test('updateTimes returns non-empty array on dispatch', () => {
  const initialState = ['17:00'];
  const action = { type: 'UPDATE_TIMES', date: '2026-09-01' };
  const updatedTimes = updateTimes(initialState, action);
  expect(Array.isArray(updatedTimes)).toBe(true);
  expect(updatedTimes.length).toBeGreaterThan(0);
});