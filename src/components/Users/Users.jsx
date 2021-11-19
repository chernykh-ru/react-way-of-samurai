import styles from './Users.module.css';
import React from 'react';
import Paginator from '../common/Paginator/Paginator';
import User from './User';

const Users = ({
  totalUsersCount,
  pageSize,
  onPageChanged,
  currentPage,
  users,
  followingInProgress,
  follow,
  unfollow,
  ...props
}) => {
  return (
    <div>
      <Paginator //выносим логику пагинации в отдельный компонент, прокидываем пропсы
        totalUsersCount={totalUsersCount}
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
