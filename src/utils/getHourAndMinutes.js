export function getHoursAndMinutes(date) {
  const dateToChange = new Date(date);
  const hour = String(dateToChange.getUTCHours()).padStart(2, '0');
  const minutes = String(dateToChange.getUTCMinutes()).padStart(2, '0');
 
  return `${hour}:${minutes}`;
}