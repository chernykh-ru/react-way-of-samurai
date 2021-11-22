import React, { Suspense } from 'react';
import './App.css';
// import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
// import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setings from './components/Setings/Setings';
import UsersContainer from './components/Users/UsersContainer';
// import DialogsContainer from './components/Dialogs/DialogsContainer';
// import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
// import Login from './components/Login/Login';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
// import { compose } from 'redux';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/preloader/Preloader';
// import { withSuspense } from './hoc/withSuspense';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer')); // Ленивая загрузка
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer')); // Ленивая загрузка
const Login = React.lazy(() => import('./components/Login/Login')); // Ленивая загрузка

class App extends React.Component {
  // debugger;
  componentDidMount() {
    this.props.initializeApp();
  } //переносим запрос из HeaderC

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
            <Route path='/login'>
              <Login />
            </Route>
          </Suspense>
          {/* <Route path='/login' render={withSuspense(Login)} /> //custom HOC */}
          <Route path='/users'>
            <UsersContainer />
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
