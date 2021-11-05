import React from 'react';
import Header from './Header';
import axios from 'axios';
import { connect } from 'react-redux';
import { setAuthUserData } from '../../redux/auth-reducer';

class HeaderContainer extends React.Component {
  // debugger
  componentDidMount() {
    // debugger
    axios //вторым параметром { withCredentials: true } цепляем куку
      .get(`https://social-network.samuraijs.com/api/1.0//auth/me`, { withCredentials: true })
      .then((response) => {
        // debugger;
        // проверка что сервер ответил ОК и мы залогинены(response.data.resultCode === 0)
        if (response.data.resultCode === 0) {
          let { id, email, login } = response.data.data; ////деструктурируем ответ объект data до составляющих Id, email, login; аргументы в том же порядке должны быть и в AC
          this.props.setAuthUserData(id, email, login);
        }
      });
  }
  render() {
    return <Header {...this.props} />; //пробрасываем все пропсы ниже в целевую компоненту
  }
}

let mapStateToProps = (state) => ({
  login: state.auth.login, //логин покажем после авторизации
  isAuth: state.auth.isAuth, //флаг авторизации
});

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);
