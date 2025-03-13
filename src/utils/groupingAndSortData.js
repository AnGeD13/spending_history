import data from "@data/transactions.json";

export function groupData(data) {
  return data.reduce((acc, item) => {
      const date = new Date(item.date);
      const dateKey = date.toISOString().split('T')[0];
      
      if (!acc[dateKey]) {
          acc[dateKey] = [];
      }
      
      acc[dateKey].push(item);
      acc[dateKey].sort((a, b) => new Date(a.date) - new Date(b.date));
      
      return acc;
  }, {});
}

export const groupedByDay = groupData(data);

export const sortedDaysAsc = Object.keys(groupedByDay).sort((a, b) => new Date(a) - new Date(b));
export const sortedDaysDesc = Object.keys(groupedByDay).sort((a, b) => new Date(b) - new Date(a));