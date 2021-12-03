import React, { Suspense } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setings from './components/Setings/Setings';
import UsersContainer from './components/Users/UsersContainer';
// import DialogsContainer from './components/Dialogs/DialogsContainer';
// import ProfileContainer from './components/Profile/ProfileContainer';
import Login from './components/Login/Login';
import HeaderContainer from './components/Header/HeaderContainer';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router';
// import { compose } from 'redux';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/preloader/Preloader';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer')); // Ленивая загрузка
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
// const Login = React.lazy(() => import('./components/Login/Login'));

class App extends React.Component {
  catchAllUnhandledErrors = (reason, promise) => {
    console.log('Some error occured');
    // console.error(promiseRejectionEvent);
  }; //Событие unhandledrejection происходит, когда Promise завершён с ошибкой, но на данную ошибку не установлен обработчик.
  // debugger;
  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors);
  } //переносим запрос из HeaderC

  componentWillUnmount() {
    window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors);
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Suspense fallback={<Preloader />}>
            <Route path='/profile/:userId?'>
              <ProfileContainer
              //:userId? опциональный параметр ХОКа withRouter
              />
            </Route>
            <Route path='/dialogs'>
              <DialogsContainer />
            </Route>
          </Suspense>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/users'>
            <UsersContainer pageTitle={'Самураи'} />
          </Route>
          <Route path='/news'>
            <News />
          </Route>
          <Route path='/music'>
            <Music />
          </Route>
          <Route path='/setings'>
            <Setings />
          </Route>
          {/* <Route path='/' exact>
            <Redirect to='/profile' />
          </Route> */}
          <Route exact path='/'>
            {this.props.initialized ? <Redirect to='/profile' /> : <Login />}
          </Route>
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  initialized: state.app.initialized, //получаем из стейта флаг
});

export default withRouter(connect(mapStateToProps, { initializeApp })(App));
// export default compose(withRouter, connect(mapStateToProps, { initializeApp })(App));//bug with compose
