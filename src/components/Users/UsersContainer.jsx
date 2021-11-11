import React from 'react';
import { connect } from 'react-redux';
import {
  follow,
  unfollow,
  // setUsers,
  setCurrentPage,
  // setTotalUsersCount,
  // toggleIsFetching,
  toggleFollowingProgress,
  getUsers,
} from '../../redux/users-reducer';
// import axios from 'axios';
import Users from './Users';
import Preloader from '../common/preloader/Preloader';
// import { usersAPI } from '../../api/api';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

// import UsersAPIComponent from './UsersAPIComponent';

class UsersContainer extends React.Component {
  // debugger;
  // constructor(props) {
  //   super(props);
  // } //если кроме конструктора(супер) ничего нет, можно не писать

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
    //выносим запросы в thunk mw

    // this.props.toggleIsFetching(true); //запрос ушел preloader виден
    // usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then((data) => {
    //   this.props.setUsers(data.items); // у usersAPI дергаем метод getUsers//получаем user из data(данные) items(объект с юзерами) и диспачим setUsers
    //   this.props.toggleIsFetching(false); //запрос пришел preloader скрывается
    //   this.props.setTotalUsersCount(data.totalCount);
    // });
  }

  onPageChanged = (currentPage) => {
    this.props.getUsers(currentPage, this.props.pageSize);
    //выносим запросы в thunk mw
    // this.props.setCurrentPage(currentPage);
    // this.props.toggleIsFetching(true); //запрос ушел preloader виден
    // usersAPI.getUsers(currentPage, this.props.pageSize).then((data) => {
    //   this.props.toggleIsFetching(false); //запрос пришел preloader скрывается
    //   this.props.setUsers(data.items);
    // });
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
          // toggleFollowingProgress={this.props.toggleFollowingProgress}
        />
      </>
    );
  }
}

//mstp принимает от connect весь глобальный стейт, и возвращает объект с теми данными которые нам здесь нужны
let mapStateToProps = (state) => {
  // debugger;
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
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

//оборачиваем ХОКом редирект целевую компоненту ЮК
// let AuthRedirectComponent = withAuthRedirect(UsersContainer);

//передаем напряую в mdtp объект с AC (connect подставляет нужные параметры в колбэки которые сам и создает за кадром, после происходит диспатч экшена)
//переименовываем AC без окончания AC, правим импорты, и при совпадении имен ключ: значение, оставляем одно имя в объекте
//mdtp больше не используем, а передаем {объект} вторым параметром в connect

//оборачиваем ХОКом редирект целевую компоненту ЮК
// export default withAuthRedirect(
//   connect(mapStateToProps, {
//     follow,
//     unfollow,
//     setCurrentPage,
//     toggleFollowingProgress,
//     getUsers,
//     // setUsers,
//     // setTotalUsersCount,
//     // toggleIsFetching,
//   })(UsersContainer),
// );

//add compose
export default compose(
  withAuthRedirect,
  connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers,
  }),
)(UsersContainer);

// export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

// const UsersContainer = connect(mstp, mdtp)(Users);

// export default UsersContainer;
