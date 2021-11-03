import axios from 'axios';
import styles from './Users.module.css';
import avataaars from './../../../src/assets/images/avataaars.png';
import React from 'react';

class Users extends React.Component {
  // debugger;
  // constructor(props) {
  //   super(props);
  // } //если кроме конструктора(супер) ничего нет, можно не писать

  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
      )
      .then((res) => {
        this.props.setUsers(res.data.items); //получаем user из response(ответ) data(данные) items(объект с юзерами) и диспачим setUsers
        this.props.setTotalUsersCount(res.data.totalCount);
      });
  }

  onPageChanged = (currentPage) => {
    this.props.setCurrentPage(currentPage);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`,
      )
      .then((res) => {
        this.props.setUsers(res.data.items);
      });
  };

  render() {
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
    // let pagesCount = 200; //hardcode
    let pages = [];
    for (let i = 1; i <= pagesCount; i++)
      if (pages.length < 20) {
        pages.push(i); //хардкодно ограничили длину пагинации
      }

    return (
      <div>
        <div>
          {pages.map((page) => {
            return (
              <span
                onClick={(event) => {
                  this.onPageChanged(page);
                }}
                className={`${styles.pagination} ${
                  this.props.currentPage === page ? styles.selectedPage : ''
                }`}>
                {page}
              </span>
            );
          })}
        </div>
        {/* <button onClick={this.getUsers}>Get Users</button> */}
        {this.props.users.map((user) => (
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
                      this.props.unfollow(user.id); //по клику отрабатываем колбэк, берем в пропсах функцию unfollow(вызываем unfollow из контейн комп и передаем туда id)
                    }}>
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      this.props.follow(user.id); //в целом если юзер followed(true) подставляем ему кнопку unfollow и наоборот(тернарный)
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
  }
}

export default Users;
