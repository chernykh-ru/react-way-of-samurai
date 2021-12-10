import React, { Suspense } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setings from './components/Setings/Setings';
import { UsersPage as UsersContainer } from './components/Users/UsersContainer';
// import DialogsContainer from './components/Dialogs/DialogsContainer';
// import ProfileContainer from './components/Profile/ProfileContainer';
import { LoginPage } from './components/Login/LoginPage';
import { Header } from './components/Header/Header';
// import HeaderContainer from './components/Header/HeaderContainer';
import { Link, Route } from 'react-router-dom';
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
import { Layout, Menu, Breadcrumb, Avatar, Row, Col } from 'antd';
import { UserOutlined, MessageOutlined, NotificationOutlined } from '@ant-design/icons';
import { Footer } from 'antd/lib/layout/layout';

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

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
      <Layout>
        <Header />
        <Layout>
          <Sider width={200} className='site-layout-background'>
            <Menu
              mode='inline'
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}>
              <SubMenu key='sub1' icon={<UserOutlined />} title='My profile'>
                <Menu.Item key='1'>
                  <Link to='/profile'>Profile</Link>
                </Menu.Item>
                <Menu.Item key='2'>
                  <Link to='/dialogs'>Messages</Link>
                </Menu.Item>
                {/* <Menu.Item key='3'>option3</Menu.Item>
                <Menu.Item key='4'>option4</Menu.Item> */}
              </SubMenu>
              <SubMenu key='sub2' icon={<MessageOutlined />} title='Developers'>
                <Menu.Item key='5'>
                  <Link to='/users'>Users</Link>
                </Menu.Item>
                {/* <Menu.Item key='6'>option6</Menu.Item>
                <Menu.Item key='7'>option7</Menu.Item>
                <Menu.Item key='8'>option8</Menu.Item> */}
              </SubMenu>
              <SubMenu key='sub3' icon={<NotificationOutlined />} title='Media'>
                <Menu.Item key='9'>
                  <Link to='/news'>News</Link>
                </Menu.Item>
                <Menu.Item key='10'>
                  <Link to='/music'>Music</Link>
                </Menu.Item>
                <Menu.Item key='11'>
                  <Link to='/setings'>Setings</Link>
                </Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            {/* <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb> */}
            <Content
              className='site-layout-background'
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}>
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
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              developers social network © 2021 Created by chernykh.ru
            </Footer>
          </Layout>
        </Layout>
      </Layout>
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
