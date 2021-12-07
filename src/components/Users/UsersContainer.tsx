import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, requestUsers, FilterType } from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../common/preloader/Preloader';
import { compose } from 'redux';
import {
  getFollowingInProgress,
  getIsFetching,
  getCurrentPage,
  getTotalUsersCount,
  getPageSize,
  getUsers,
  getUsersFilter, //add formik term in URL
} from '../../redux/users-selectors';
import { UsersType } from '../../types/types';
import { AppStateType } from '../../redux/redux-store';

type MapStatePropsType = {
  totalUsersCount: number;
  pageSize: number;
  currentPage: number;
  users: UsersType[];
  followingInProgress: Array<number | null>;
  isFetching: boolean;
  filter: FilterType; //add formik term in URL
};

type MapDispatchPropsType = {
  follow: (userId: number | null) => void;
  unfollow: (userId: number | null) => void;
  requestUsers: (currentPage: number, pageSize: number, filter: FilterType) => void;
};

type OwnPropsType = {
  pageTitle: string;
};

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType;
class UsersContainer extends React.Component<PropsType> {
  componentDidMount() {
    const { currentPage, pageSize, filter } = this.props;
    this.props.requestUsers(currentPage, pageSize, filter);
  }

  onPageChanged = (currentPage: number) => {
    const { pageSize, filter } = this.props;
    this.props.requestUsers(currentPage, pageSize, filter);
  };

  onFilterChanged = (filter: FilterType) => {
    const { pageSize } = this.props;
    this.props.requestUsers(1, pageSize, filter); //1 сброс страницы на первую при фильтрации
  }; //add formik term in URL

  render() {
    return (
      <>
        <h2>{this.props.pageTitle}</h2>
        {this.props.isFetching ? (
          <Preloader /> //вынесли компоненту в common/preloader
        ) : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onFilterChanged={this.onFilterChanged} //add formik term in URL
          users={this.props.users}
          onPageChanged={this.onPageChanged}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    );
  }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    users: getUsers(state), //selectors of reselect
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
    filter: getUsersFilter(state), //add formik term in URL
  };
};

export default compose(
  connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, {
    follow,
    unfollow,
    requestUsers,
  }),
)(UsersContainer);
