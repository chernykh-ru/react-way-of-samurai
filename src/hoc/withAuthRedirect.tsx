import React from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { AppStateType } from '../redux/redux-store'


let mapStateToPropsForRedirect = (state: AppStateType) => ({
  isAuth: state.auth.isAuth, //вытаскиваем из стейта инфу залогинен или нет
});

type MapPropsType = {
  isAuth: boolean
}

type DispatchPropsType = {
}

export function withAuthRedirect<WCP> (WrappedComponent: React.ComponentType<WCP>) {

  const  RedirectComponent: React.FC<MapPropsType & DispatchPropsType> = (props) => {
    let {isAuth, ...restProps} = props
    if (!isAuth) return <Redirect to={'/login'} />;

    return <WrappedComponent {...restProps as WCP} />;
  }

  //конненктим к стору RedirectComponent которую создали внутри ХОКа, и возвращаем ее наружу
  let ConnectedAuthRedirectComponent = connect<MapPropsType, DispatchPropsType, WCP, AppStateType>(mapStateToPropsForRedirect)(RedirectComponent);

  return ConnectedAuthRedirectComponent;
};

//те вызывая хок withAuthRedirect происходит двойное оборачивание(две конт комп одна в другой) коннект оборачивает редирект, а внутри будет сидеть целевая компонента
