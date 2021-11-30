import styles from './Users.module.css';
import React from 'react';
import Paginator from '../common/Paginator/Paginator';
import User from './User';
import {UsersType} from '../../types/types'


type PropsType = {
  totalUsersCount: number,
  pageSize: number,
  onPageChanged: (page: number) => void,
  currentPage: number,
  users: Array<UsersType>,
  followingInProgress: Array<number | null>,
  follow: (userId: number | null) => void,
  unfollow: (userId: number | null) => void,
}

const Users: React.FC<PropsType> = ({
  totalUsersCount,
  pageSize,
  onPageChanged,
  currentPage,
  users,
  followingInProgress,
  follow,
  unfollow,
}) => {
  return (
    <div>
      <Paginator //выносим логику пагинации в отдельный компонент, прокидываем пропсы
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
        onPageChanged={onPageChanged}
        currentPage={currentPage}
        />
      {users.map((user) => (
        <div className={styles.wrapper} key={user.id}>
          <User //выносим логику в компонент, прокидываем пропсы
            followingInProgress={followingInProgress}
            follow={follow}
            unfollow={unfollow}
            user={user}
          />
        </div>
      ))}
    </div>
  );
};

export default Users;
