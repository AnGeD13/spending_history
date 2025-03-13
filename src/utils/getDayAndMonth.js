import { ALL_MONTHS } from "@data/constants";

export function getDayAndMonth(data) {
  const parts = data.split('-');
  const day = parseInt(parts[2]);
  const monthIndex = parseInt(parts[1]);
  
  return `${day} ${ALL_MONTHS[monthIndex-1]}`;
}