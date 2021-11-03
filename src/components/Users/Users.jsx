import styles from './Users.module.css';
import avataaars from './../../../src/assets/images/avataaars.png';
import React from 'react';

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++)
    if (pages.length < 20) {
      pages.push(i); //хардкодно ограничили длину пагинации <20 чтобы не рвало экран
    }

  return (
    <div>
      <div>
        {pages.map((page, id) => {
          return (
            <span
              key={id}
              onClick={(event) => {
                props.onPageChanged(page);
              }}
              className={`${styles.pagination} ${
                props.currentPage === page ? styles.selectedPage : ''
              }`}>
              {page}
            </span>
          );
        })}
      </div>
      {props.users.map((user) => (
        <div className={styles.wrapper} key={user.id}>
          <div>
            <div>
              <img
                className={styles.userPhoto}
                src={user.photos.small != null ? user.photos.small : avataaars} //добавляем проверку, если с сервера не пришла аватарка, поставить заглушку
                alt='avatar'
              />
            </div>
            <div>
              {user.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(user.id); //по клику отрабатываем колбэк, берем в пропсах функцию unfollow(вызываем unfollow из контейн комп и передаем туда id)
                  }}>
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(user.id); //в целом если юзер followed(true) подставляем ему кнопку unfollow и наоборот(тернарный)
                  }}>
                  Follow
                </button>
              )}
            </div>
          </div>
          <div className={styles.wrapper__item}>
            <div>
              <div>{user.name}</div>
              <div>{user.status}</div>
            </div>
            <div>
              {/* <div>{user.location.country}</div>
                <div>{user.location.city}</div> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
