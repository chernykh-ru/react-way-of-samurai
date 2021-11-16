import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { getAuthUserData, logout } from '../../redux/auth-reducer';

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getAuthUserData();
  }
  render() {
    return <Header {...this.props} />; //пробрасываем все пропсы ниже в целевую компоненту
  }
}

let mapStateToProps = (state) => ({
  login: state.auth.login, //логин покажем после авторизации
  isAuth: state.auth.isAuth, //флаг авторизации
});

export default connect(mapStateToProps, { getAuthUserData, logout })(HeaderContainer);
