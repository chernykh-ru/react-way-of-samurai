import React from 'react';
import { Header } from './Header';
import { connect } from 'react-redux';
import { logout } from '../../redux/auth-reducer';
import { AppStateType } from '../../redux/redux-store';

type MapStatePropsType = {
  isAuth: boolean;
  login: string | null;
};

type MapDispatchPropsType = {
  logout: () => void;
};

type PropsType = MapStatePropsType & MapDispatchPropsType;

class HeaderContainer extends React.Component<PropsType> {
  render() {
    return <Header {...this.props} />; //пробрасываем все пропсы ниже в целевую компоненту
  }
}

let mapStateToProps = (state: AppStateType) => ({
  login: state.auth.login, //логин покажем после авторизации
  isAuth: state.auth.isAuth, //флаг авторизации
});

export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {
  logout,
})(HeaderContainer);
