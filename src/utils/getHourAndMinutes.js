export function getHoursAndMinutes(date) {
  const dateToChange = new Date(date);
  const hour = String(dateToChange.getHours()).padStart(2, '0');
  const minutes = String(dateToChange.getMinutes()).padStart(2, '0');
 
  return `${hour}:${minutes}`;
}