export function getDayAndMonth(data) {
  const allMonths = [
    "января", "февраля", "марта", "апреля",
    "мая", "июня", "июля", "августа", 
    "сентября", "откября", "ноября", "декабря"]
  const parts = data.split('-');
  const day = parseInt(parts[2]);
  const monthIndex = parseInt(parts[1]);
  
  return `${day} ${allMonths[monthIndex-1]}`;
}