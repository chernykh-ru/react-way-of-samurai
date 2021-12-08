import styles from './Users.module.css';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Paginator from '../common/Paginator/Paginator';
import User from './User';
import UsersSearchForm from './UsersSearchForm';
import { AppStateType } from '../../redux/redux-store';
import { follow, unfollow, requestUsers, FilterType } from '../../redux/users-reducer';
import {
  getCurrentPage,
  getFollowingInProgress,
  getPageSize,
  getUsers,
  getUsersFilter,
} from '../../redux/users-selectors';

export const Users: React.FC = () => {
  const dispatch = useDispatch();
  const totalUsersCount = useSelector((state: AppStateType) => state.usersPage.totalUsersCount); //example
  const pageSize = useSelector(getPageSize); //from users-selectors
  const currentPage = useSelector(getCurrentPage);
  const users = useSelector(getUsers);
  const filter = useSelector(getUsersFilter);
  const followingInProgress = useSelector(getFollowingInProgress);

  useEffect(() => {
    dispatch(requestUsers(currentPage, pageSize, filter));
  }, []);

  const onPageChanged = (currentPage: number) => {
    dispatch(requestUsers(currentPage, pageSize, filter));
  };

  const onFilterChanged = (filter: FilterType) => {
    dispatch(requestUsers(1, pageSize, filter)); //1 сброс страницы на первую при фильтрации
  }; //add formik term in URL

  const _follow = (userId: number | null) => {
    dispatch(follow(userId));
  };

  const _unfollow = (userId: number | null) => {
    dispatch(unfollow(userId));
  };

  return (
    <div>
      <UsersSearchForm onFilterChanged={onFilterChanged} />
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
            follow={_follow}
            unfollow={_unfollow}
            user={user}
          />
        </div>
      ))}
    </div>
  );
};
