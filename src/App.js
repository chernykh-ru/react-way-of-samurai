import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setings from './components/Setings/Setings';
import Friends from './components/Friends/Friends';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = (props) => {
  debugger;
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route path='/profile'>
          <Profile
            profilePage={props.state.profilePage}
            dispatch={props.dispatch}
            // updateNewPostText={props.updateNewPostText}
          />
        </Route>
        <Route path='/dialogs'>
          <Dialogs
            dialogsPage={props.state.dialogsPage}
            dispatch={props.dispatch}
            // addMessage={props.addMessage}
            // updateNewMessageText={props.updateNewMessageText}
          />
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
        <Route path='/friends'>
          <Friends />
        </Route>
      </div>
    </div>
  );
};

export default App;
