import styles from "./pagination.module.scss";

const getPages = (minPage, maxPage) => {
  let pages = [];
  for (let i=minPage; i<=maxPage; i++) {
    pages.push(i);
  }
  return pages;
}

export default function Pagination({
  totalPages, currentPage, setCurrentPage
}) {
  const minPage = Math.max(currentPage - 2, 1);
  const maxPage = Math.min(totalPages, currentPage + 2);
  const pages = getPages(minPage, maxPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className={styles.pagination}>
      <button 
        className={styles.paginationItem}
        onClick={handlePrevPage}
      >{'<'}</button>
      <ul className={styles.paginationList}>
        {pages.map((page) => (
          <li key={page} className={page === currentPage ? `${styles.currentPage}` : ''}>
            <button 
              className={styles.paginationItem} 
              onClick={() => setCurrentPage(page)}
            >{page}</button>
          </li> 
        ))}
      </ul>
      <button 
        className={styles.paginationItem}
        onClick={handleNextPage}
      >{'>'}</button>
    </div>
  )
}