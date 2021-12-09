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
import { useHistory, useLocation } from 'react-router-dom';
// import * as queryString from 'querystring'//deprecated — Legacy

// type QueryParamsType = {
//   term?: string;
//   page?: string;
//   friend?: string;
// };//querystring deprecated — Legacy

export const Users: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const totalUsersCount = useSelector((state: AppStateType) => state.usersPage.totalUsersCount); //example
  const pageSize = useSelector(getPageSize); //from users-selectors
  const currentPage = useSelector(getCurrentPage);
  const users = useSelector(getUsers);
  const filter = useSelector(getUsersFilter);
  const followingInProgress = useSelector(getFollowingInProgress);

  useEffect(() => {
    // const query: QueryParamsType = {};
    // if (filter.term) query.term = filter.term;
    // if (filter.friend !== null) query.friend = String(filter.friend);
    // if (currentPage !== 1) query.page = String(currentPage);
    //querystring deprecated — Legacy

    history.push({
      pathname: '/users',
      search: `?term=${filter.term}&friend=${filter.friend}&page=${currentPage}`,
    });
  }, [filter, currentPage]); //следим за изменением фильтра и текущей страницы в стейте и пушим в урл квери строку параметры

  useEffect(() => {
    const { search } = location;
    const parsed = new URLSearchParams(search);
    const parsedPage = parsed.get('page');
    const parsedTerm = parsed.get('term');
    const parsedFriend = parsed.get('friend');

    let actualPage = currentPage;
    let actualFilter = filter;
    if (!!parsedPage) actualPage = Number(parsedPage);
    if (!!parsedTerm) actualFilter = { ...actualFilter, term: parsedTerm };
    if (parsedFriend)
      actualFilter = {
        ...actualFilter,
        friend: parsedFriend === 'null' ? null : parsedFriend === 'true' ? true : false,
      }; //..иммутабельно
    dispatch(requestUsers(actualPage, pageSize, actualFilter));
  }, []); //парсим url строку, извлекаем query params, и если они есть иммутабельно меняем данные и диспачим уже параметры из урла, а не из стейта при первой загрузке страницы

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
