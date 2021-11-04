import React from 'react';
import { connect } from 'react-redux';
import {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
} from '../../redux/users-reducer';
import axios from 'axios';
import Users from './Users';
import Preloader from '../common/preloader/Preloader';

// import UsersAPIComponent from './UsersAPIComponent';

class UsersContainer extends React.Component {
  // debugger;
  // constructor(props) {
  //   super(props);
  // } //если кроме конструктора(супер) ничего нет, можно не писать

  componentDidMount() {
    this.props.toggleIsFetching(true); //запрос ушел preloader виден
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
      )
      .then((response) => {
        this.props.setUsers(response.data.items); //получаем user из response(ответ) data(данные) items(объект с юзерами) и диспачим setUsers
        this.props.toggleIsFetching(false); //запрос пришел preloader скрывается
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  onPageChanged = (currentPage) => {
    this.props.setCurrentPage(currentPage);
    this.props.toggleIsFetching(true); //запрос ушел preloader виден
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`,
      )
      .then((res) => {
        this.props.toggleIsFetching(false); //запрос пришел preloader скрывается
        this.props.setUsers(res.data.items);
      });
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
export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
})(UsersContainer);
// export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

// const UsersContainer = connect(mstp, mdtp)(Users);

// export default UsersContainer;
