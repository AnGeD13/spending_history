export const validateNumberInput = (event) => {
  if (['e', '-', '+'].includes(event.key)) {
    event.preventDefault();
  }
};