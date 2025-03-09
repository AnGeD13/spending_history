import data from "../data/transactions.json";

export const groupedByDay = data.reduce((acc, item) => {
  const date = new Date(item.date);
  const day = date.toISOString().split('T')[0];

  if (!acc[day]) {
    acc[day] = [];
  }

  acc[day].push(item);
  acc[day].sort((a, b) => new Date(a.date) - new Date(b.date));

  return acc;
}, {});

export const sortedDaysAsc = Object.keys(groupedByDay).sort((a, b) => new Date(a) - new Date(b));
export const sortedDaysDesc = Object.keys(groupedByDay).sort((a, b) => new Date(b) - new Date(a));