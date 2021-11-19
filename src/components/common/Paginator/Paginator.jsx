import styles from './Paginator.module.css';

const Paginator = ({ totalUsersCount, pageSize, onPageChanged, currentPage }) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++)
    if (pages.length < 20) {
      pages.push(i); //хардкодно ограничили длину пагинации <20 чтобы не рвало экран
    }

  return (
    <div>
      {pages.map((page, id) => {
        return (
          <span
            key={id}
            onClick={(event) => {
              onPageChanged(page);
            }}
            className={`${styles.pagination} ${currentPage === page ? styles.selectedPage : ''}`}>
            {page}
          </span>
        );
      })}
    </div>
  );
};

export default Paginator;
