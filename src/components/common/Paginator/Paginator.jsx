import styles from './Paginator.module.css';
import React, { useState } from 'react';

const Paginator = ({ totalItemsCount, pageSize, onPageChanged, currentPage, portionSize = 10 }) => {
  const pagesCount = Math.ceil(totalItemsCount / pageSize); //кол-во странииц
  const portionCount = Math.ceil(pagesCount / portionSize); //кол-во порций
  const [portionNumber, setPortionNumber] = useState(Math.ceil(currentPage / portionSize)); //отслеживаем номер порции и его изменение//решение со сбросом порции при смене страницы
  // const [portionNumber, setPortionNumber] = useState(1); //отслеживаем номер порции и его изменение
  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1; //номер левого элемента порции
  const rightPortionPageNumber = portionNumber * portionSize; //номер правого элемента порции
  const pages = [];
  for (let i = 1; i <= pagesCount; i++) pages.push(i);
  // for (let i = 1; i <= pagesCount; i++)
  //   if (pages.length < 20) {
  //     pages.push(i); //хардкодно ограничили длину пагинации <20 чтобы не рвало экран
  //   }
  // console.log(portionNumber);
  return (
    <div className={styles.paginationBlockWrapper}>
      <div className={styles.paginationBlock}>
        {portionNumber > 1 ? (
          <button
            className={styles.buttonPrev}
            onClick={() => {
              setPortionNumber(portionNumber - 1);
            }}>
            PREV
          </button>
        ) : (
          <button disabled={true}>PREV</button>
        )}
        {pages
          .filter((page) => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
          .map((page, id) => {
            return (
              <span
                key={id}
                onClick={(event) => {
                  onPageChanged(page);
                }}
                className={`${styles.pagination} ${
                  currentPage === page ? styles.selectedPage : ''
                }`}>
                {page}
              </span>
            );
          })}
        {/* {pages.map((page, id) => {
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
        })} */}
        {portionNumber < portionCount ? (
          <button
            className={styles.buttonNext}
            onClick={() => {
              setPortionNumber(portionNumber + 1);
            }}>
            NEXT
          </button>
        ) : (
          <button disabled={true}>NEXT</button>
        )}
      </div>
    </div>
  );
};

export default Paginator;
