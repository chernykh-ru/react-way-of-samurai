import React from 'react';
import { connect } from 'react-redux';
import {
  followAC,
  unfollowAC,
  setUsersAC,
  setCurrentPageAC,
  setTotalUsersCountAC,
} from '../../redux/users-reducer';
import axios from 'axios';
import Users from './Users';
// import UsersAPIComponent from './UsersAPIComponent';

class UsersContainer extends React.Component {
  // debugger;
  // constructor(props) {
  //   super(props);
  // } //если кроме конструктора(супер) ничего нет, можно не писать

  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
      )
      .then((res) => {
        this.props.setUsers(res.data.items); //получаем user из response(ответ) data(данные) items(объект с юзерами) и диспачим setUsers
        this.props.setTotalUsersCount(res.data.totalCount);
      });
  }

  onPageChanged = (currentPage) => {
    this.props.setCurrentPage(currentPage);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`,
      )
      .then((res) => {
        this.props.setUsers(res.data.items);
      });
  };

  render() {
    return (
      <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        users={this.props.users}
        onPageChanged={this.onPageChanged}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
      />
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
  };
};

//mdtp служит для того, чтобы передавать дочерней компоненте через пропсы колбэки(функции, которые может вызывать презентационная компонента)(назначение колбэков общаться со стором-стейтом)
let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
    setCurrentPage: (currentPage) => {
      dispatch(setCurrentPageAC(currentPage));
    },
    setTotalUsersCount: (totalCount) => {
      dispatch(setTotalUsersCountAC(totalCount));
    },
  };
};

//конектим UsersContainer(промежуточную контейнерную, которая здесь и находится)
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

// const UserSContainer = connect(mstp, mdtp)(Users);

// export default UsersContainer;
