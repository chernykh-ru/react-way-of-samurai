import React from 'react';
import { connect } from 'react-redux';
import {
  follow,
  unfollow,
  requestUsers,
  // setCurrentPage,
  // toggleFollowingProgress,
} from '../../redux/users-reducer';
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
} from '../../redux/users-selectors';
import {UsersType} from '../../types/types'
import {AppStateType} from '../../redux/redux-store'

type MapStatePropsType = {
  totalUsersCount: number,
  pageSize: number,
  currentPage: number,
  users: UsersType[],
  followingInProgress: Array<number | null>,
  isFetching: boolean,
}

type MapDispatchPropsType = {
  follow: (userId: number | null) => void,
  unfollow: (userId: number | null) => void,
  requestUsers: (currentPage: number, pageSize: number) => void,
  // onPageChanged: (currentPage: number) => void,
  // setCurrentPage: (currentPage: number) => void,
  // toggleFollowingProgress: (isFetching: boolean, userId: number | null) => void,
}

type OwnPropsType = {
  pageTitle: string,//
}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType


// type PropsType = {
//   pageTitle: string,//
//   totalUsersCount: number,
//   pageSize: number,
//   currentPage: number,
//   users: Array<UsersType>,
//   followingInProgress: Array<number | null>,
//   isFetching: boolean,
//   follow: () => void,
//   unfollow: () => void,
//   onPageChanged: (currentPage: number) => void,
//   requestUsers: (currentPage: number, pageSize: number) => void,
// }

class UsersContainer extends React.Component<PropsType> {

  componentDidMount() {
    const {currentPage, pageSize} = this.props
    this.props.requestUsers(currentPage, pageSize);
  }

  onPageChanged = (currentPage: number) => {
    this.props.requestUsers(currentPage, this.props.pageSize);
  };

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
  // debugger;
  return {
    users: getUsers(state), //test reselect
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
};

export default compose(
  connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, {
    follow,
    unfollow,
    requestUsers,
    // setCurrentPage,
    // toggleFollowingProgress,
  }),
)(UsersContainer);
