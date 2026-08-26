export const initializeTimes = () => {
  const today = new Date();
  if (typeof fetchAPI !== 'undefined') {
    return fetchAPI(today);
  }
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
};

export const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES': {
      const selectedDate = new Date(action.date);
      if (typeof fetchAPI !== 'undefined') {
        return fetchAPI(selectedDate);
      }
      return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    }
    default:
      return state;
  }
};