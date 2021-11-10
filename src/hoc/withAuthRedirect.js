import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';

let mapStateToPropsForRedirect = (state) => ({
  isAuth: state.auth.isAuth, //вытаскиваем из стейта инфу залогинен или нет
});

export const withAuthRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      if (!this.props.isAuth) return <Redirect to={'/login'} />;

      return <Component {...this.props} />;
    }
  }

  //конненктим к стору RedirectComponent которую создали внутри ХОКа, и возвращаем ее наружу
  let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);

  return ConnectedAuthRedirectComponent;
};

//те вызывая хок withAuthRedirect происходит двойное оборачивание(две конт комп одна в другой) коннект оборачивает редирект, а внутри будет сидеть целевая компонента
