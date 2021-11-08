import styles from './Users.module.css';
import avataaars from './../../../src/assets/images/avataaars.png';
import React from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

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
              <NavLink to={'/profile/' + user.id}>
                <img
                  className={styles.userPhoto}
                  src={user.photos.small != null ? user.photos.small : avataaars} //добавляем проверку, если с сервера не пришла аватарка, поставить заглушку
                  alt='avatar'
                />
              </NavLink>
            </div>
            <div>
              {user.followed ? (
                <button
                  onClick={() => {
                    axios
                      .delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                        withCredentials: true,
                        headers: { 'API-KEY': '6e65516f-e614-437d-93bf-9e85e40713b5' }, //DELETE(GET) second params options withCred(true) and headers{api-key}
                      })
                      .then((response) => {
                        if (response.data.resultCode === 0) {
                          props.unfollow(user.id);
                        } //если отписка произошла и сервер подтвердил(resultCode === 0) диспачим в редьюсер
                      });
                  }}>
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    axios
                      .post(
                        `https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                        {}, //POST second params null or empty obj
                        {
                          withCredentials: true,
                          headers: { 'API-KEY': '6e65516f-e614-437d-93bf-9e85e40713b5' },
                        }, //POST(PUT) third params options withCred(true) and headers{api-key}
                      )
                      .then((response) => {
                        if (response.data.resultCode === 0) {
                          props.follow(user.id);
                        } //если подписка произошла и сервер подтвердил(resultCode === 0) диспачим в редьюсер
                      });
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
