export const getPagesforPagination = (minPage, maxPage) => {
  let pages = [];
  for (let i=minPage; i<=maxPage; i++) {
    pages.push(i);
  }
  return pages;
}