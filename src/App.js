import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
// import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setings from './components/Setings/Setings';
import UsersContainer from './components/Users/UsersContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import store from './redux/store';

const App = (props) => {
  // debugger;
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route path='/profile/:userId?'>
          <ProfileContainer
          // store={props.store}
          // profilePage={props.state.profilePage}
          // dispatch={props.dispatch}
          // updateNewPostText={props.updateNewPostText}
          />
        </Route>
        <Route path='/dialogs'>
          <DialogsContainer />
        </Route>
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
};

export default App;
