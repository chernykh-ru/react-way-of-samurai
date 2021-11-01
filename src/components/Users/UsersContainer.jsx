import { connect } from 'react-redux';
import Users from './Users';
import { followAC, unfollowAC, setUsersAC } from '../../redux/users-reducer';

//mstp принимает от connect весь глобальный стейт, и возвращает объект с теми данными которые нам здесь нужны
let mapStateToProps = (state) => {
  // debugger;
  return {
    users: state.usersPage.users,
  };
};

//mdtp служит для того, чтобы передавать дочерней компоненте через пропсы колбэки(функции, которые может вызывать презентационная компонента)(назначение колбэков общаться со стором-стейтом)
let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId)); //follow(функция которая принимает пользовательский id) чтобы дальше передать его в AC сформировать экшн с нужным id и задиспачить его(и диспачим не AC, а диспатчим результат работы AC(экшен - объект с типом), те диспатчим экшн)
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
  };
};

//из mstp в Users придут пропсы users, значением которого будут users из стейта
let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

// const UserSContainer = connect(mstp, mdtp)(Users);

export default UsersContainer;
