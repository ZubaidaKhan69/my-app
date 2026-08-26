import React, { useState } from 'react';

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');

  // Validation checks
  const isDateValid = date !== '';
  const isTimeValid = time !== '';
  const isGuestValid = Number(guests) >= 1 && Number(guests) <= 10;
  
  const isFormValid = isDateValid && isTimeValid && isGuestValid;

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    dispatch({ type: 'UPDATE_TIMES', date: selectedDate });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      const formData = { date, time, guests, occasion };
      submitForm(formData);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      aria-label="Table reservation form"
      style={{ display: 'grid', maxWidth: '300px', gap: '20px', margin: '0 auto' }}
    >
      {/* Date Field - Step 3: Explicit Labeling via htmlFor & id */}
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange}
        min={new Date().toISOString().split('T')[0]}
        required
        aria-required="true"
        aria-invalid={!isDateValid}
      />
      {!isDateValid && (
        <span className="error-message" role="alert">
          Please select a valid date.
        </span>
      )}

      {/* Time Selection - Step 3: Explicit Labeling */}
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
        aria-required="true"
        aria-invalid={!isTimeValid}
      >
        <option value="">Select a time</option>
        {availableTimes &&
          availableTimes.map((availableTime) => (
            <option key={availableTime} value={availableTime}>
              {availableTime}
            </option>
          ))}
      </select>
      {!isTimeValid && (
        <span className="error-message" role="alert">
          Please select a time slot.
        </span>
      )}

      {/* Guests Input - Step 3: Explicit Labeling */}
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
        required
        aria-required="true"
        aria-invalid={!isGuestValid}
      />
      {!isGuestValid && (
        <span className="error-message" role="alert">
          Please enter between 1 and 10 guests.
        </span>
      )}

      {/* Occasion Selection - Step 3: Explicit Labeling */}
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        required
        aria-required="true"
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
        <option value="Engagement">Engagement</option>
        <option value="Other">Other</option>
      </select>

      {/* Submit Button - Step 2: ARIA Attribute */}
      <input
        type="submit"
        value="Make Your reservation"
        className="btn btn-primary"
        disabled={!isFormValid}
        aria-label="On Click"
      />
    </form>
  );
}

export default BookingForm;