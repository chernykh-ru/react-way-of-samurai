import React, { Suspense } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setings from './components/Setings/Setings';
import { UsersPage as UsersContainer } from './components/Users/UsersContainer';
// import DialogsContainer from './components/Dialogs/DialogsContainer';
// import ProfileContainer from './components/Profile/ProfileContainer';
import { LoginPage } from './components/Login/LoginPage';
import HeaderContainer from './components/Header/HeaderContainer';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/preloader/Preloader';
import { AppStateType } from './redux/redux-store';
import { compose } from 'redux';
import { withSuspense } from './hoc/withSuspense';
// import { BrowserRouter as Router } from 'react-router-dom'; //HashRouter применен для деплоя на gh-pages!!!
// import { HashRouter as Router } from 'react-router-dom'; //HashRouter применен для деплоя на gh-pages
// import store from './redux/redux-store';
// import { Provider } from 'react-redux';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer')); // Ленивая загрузка
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
// const Login = React.lazy(() => import('./components/Login/Login'));

type MapStatePropsType = {
  initialized: boolean;
};

type MapDispatchPropsType = {
  initializeApp: () => void;
};

type PropsType = MapStatePropsType & MapDispatchPropsType;

const SuspendedDialogs = withSuspense(DialogsContainer); //единожды при загрузке приложения оборачиваем в HOC withSuspense, и ниже отрисовываем уже обернутую компоненту

class App extends React.Component<PropsType> {
  catchAllUnhandledErrors = (e: PromiseRejectionEvent) => {
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
            {/* <Route path='/dialogs'>
              <DialogsContainer />//ниже с HOC withSuspense
            </Route> */}
          </Suspense>
          <Route path='/dialogs'>
            <SuspendedDialogs />
          </Route>
          <Route path='/login'>
            <LoginPage />
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
            {this.props.initialized ? <Redirect to='/profile' /> : <LoginPage />}
          </Route>
        </div>
      </div>
    );
  }
}

//  <Route path='/dialogs'//Suspense custom HOC
// render = {() => withSuspense(DialogsContainer)} />

let mapStateToProps = (state: AppStateType) => ({
  initialized: state.app.initialized, //получаем из стейта флаг
});

// let AppContainer = compose<React.ComponentType>(withRouter, connect(mapStateToProps, { initializeApp }))(App)

// const SamuraiJSApp: React.FC = () => {
//   return (
//   <Router>
//     <Provider store={store}>
//       <AppContainer />
//     </Provider>
//   </Router>)
// }//variant IT-Dimich

export default compose<React.ComponentType>(
  withRouter,
  connect(mapStateToProps, { initializeApp }),
)(App);
// export default withRouter(connect<MapStatePropsType, MapDispatchPropsType, AppStateType>(mapStateToProps, { initializeApp }))(App);
// export default compose(withRouter, connect(mapStateToProps, { initializeApp })(App));//bug with compose

// export default SamuraiJSApp
