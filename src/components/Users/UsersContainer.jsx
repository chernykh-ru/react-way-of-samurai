import React from 'react';
import { connect } from 'react-redux';
import {
  follow,
  unfollow,
  setCurrentPage,
  toggleFollowingProgress,
  requestUsers,
} from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../common/preloader/Preloader';
// import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import {
  getFollowingInProgress,
  getIsFetching,
  getCurrentPage,
  getTotalUsersCount,
  getPageSize,
  getUsers,
} from '../../redux/users-selectors';

// import UsersAPIComponent from './UsersAPIComponent';

class UsersContainer extends React.Component {
  // debugger;
  // constructor(props) {
  //   super(props);
  // } //если кроме конструктора(супер) ничего нет, можно не писать

  componentDidMount() {
    this.props.requestUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (currentPage) => {
    this.props.requestUsers(currentPage, this.props.pageSize);
  };

  render() {
    return (
      <>
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

//mstp принимает от connect весь глобальный стейт, и возвращает объект с теми данными которые нам здесь нужны
// let mapStateToProps = (state) => {
//   // debugger;
//   return {
//     users: state.usersPage.users,
//     pageSize: state.usersPage.pageSize,
//     totalUsersCount: state.usersPage.totalUsersCount,
//     currentPage: state.usersPage.currentPage,
//     isFetching: state.usersPage.isFetching,
//     followingInProgress: state.usersPage.followingInProgress,
//   };
// };//add selectors

let mapStateToProps = (state) => {
  // debugger;
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
};

//mdtp служит для того, чтобы передавать дочерней компоненте через пропсы колбэки(функции, которые может вызывать презентационная компонента)(назначение колбэков общаться со стором-стейтом)

// let mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userId) => {
//       dispatch(followAC(userId));
//     },
//     unfollow: (userId) => {
//       dispatch(unfollowAC(userId));
//     },
//     setUsers: (users) => {
//       dispatch(setUsersAC(users));
//     },
//     setCurrentPage: (currentPage) => {
//       dispatch(setCurrentPageAC(currentPage));
//     },
//     setTotalUsersCount: (totalCount) => {
//       dispatch(setTotalUsersCountAC(totalCount));
//     },
//     toggleIsFetching: (isFetching) => {
//       dispatch(toggleIsFetchingAC(isFetching));
//     },
//   };
// };

//передаем напряую в mdtp объект с AC (connect подставляет нужные параметры в колбэки которые сам и создает за кадром, после происходит диспатч экшена)
//переименовываем AC без окончания AC, правим импорты, и при совпадении имен ключ: значение, оставляем одно имя в объекте
//mdtp больше не используем, а передаем {объект} вторым параметром в connect

export default compose(
  connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress,
    requestUsers,
  }),
)(UsersContainer);
