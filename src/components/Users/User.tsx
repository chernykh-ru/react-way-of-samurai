import styles from './Users.module.css';
import avataaars from './../../../src/assets/images/avataaars.svg';
import { NavLink } from 'react-router-dom';
import {UsersType} from '../../types/types'

type PropsType = {
  followingInProgress: Array<number | null>,
  user: UsersType,
  follow: (userId: number | null) => void,
  unfollow: (userId: number | null) => void,
}

const User: React.FC<PropsType> = ({ followingInProgress, follow, unfollow, user }) => {
  return (
    <div>
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
        <div className={styles.userButton}>
          {user.followed ? (
            <button
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                unfollow(user.id);
              }}>
              Unfollow
            </button>
          ) : (
            <button
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                follow(user.id);
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
  );
};

export default User;
