import axios from 'axios';
import styles from './Users.module.css';
import avataaars from './../../../src/assets/images/avataaars.png';

const Users = (props) => {
  let getUsers = () => {
    if (props.users.length === 0) {
      axios.get('https://social-network.samuraijs.com/api/1.0/users').then((res) => {
        props.setUsers(res.data.items); //получаем user из response(ответ) data(данные) items(объект с юзерами)
      });
    }
  }; //очищаем (частично) компоненту от side effect

  return (
    <div>
      <button onClick={getUsers}>Get Users</button>
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

// export default Users;
