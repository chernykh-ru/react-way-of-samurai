import React from 'react';
import { Users } from './Users';
import Preloader from '../common/preloader/Preloader';
import { useSelector } from 'react-redux';
import { getIsFetching } from '../../redux/users-selectors';

type PropsType = {
  pageTitle: string;
};

export const UsersPage: React.FC<PropsType> = (props) => {
  const isFetching = useSelector(getIsFetching);
  // const isFetching = useSelector((state: AppStateType) => state.usersPage.isFetching);

  return (
    <>
      <h2>{props.pageTitle}</h2>
      {isFetching ? <Preloader /> : null}
      <Users />
    </>
  );
};
