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
import {BrowserRouter as Router, Route} from 'react-router-dom';
// import { Route } from 'react-router';
// import { BrowserRouter } from 'react-router-dom';


const App = (props) => {

  // const posts = [
  //   {id: 1, message: 'Hi, how are you?', likeCounter: 15},
  //   {id: 2, message: 'My first react post', likeCounter: 25},
  //   {id: 3, message: 'Yo', likeCounter: 5},
  // ]

  // const dialogsData = [
  //   {id: 1, name: 'Andrew'},
  //   {id: 2, name: 'Dmitry'},
  //   {id: 3, name: 'Sasha'},
  //   {id: 4, name: 'Sveta'},
  //   {id: 5, name: 'Valera'},
  //   {id: 6, name: 'Viktor'}
  // ]
  
  // const messages = [
  //   {id: 1, message: 'Hi'},
  //   {id: 2, message: 'How is your it?'},
  //   {id: 3, message: 'Yo'},
  //   {id: 4, message: 'Yo-yo-yo'},
  //   {id: 5, message: 'Yo-yo'},
  //   {id: 6, message: 'Yo'}
  // ]

  // const posts = props.posts
  // const dialogsData = props.dialogsData
  // const messages = props.messages

  return (
    <Router>
      <div className='app-wrapper'>
        <Header />
        <Route path='/friends'>
          <Navbar state={props.state.dialogsPage} />
        </Route>
        <div className='app-wrapper-content'>
          <Route path='/profile'>
            <Profile state={props.state.profilePage} />
            {/* <Profile posts={props.state.profilePage.posts} /> */}
          </Route>
          <Route path='/dialogs'>
            <Dialogs state={props.state.dialogsPage} />
            {/* <Dialogs dialogsData={props.state.dialogsPage.dialogsData} messages={props.state.dialogsPage.messages} /> */}
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
            <Friends state={props.state.dialogsPage} />
          </Route>

          {/* <Route path='/profile' render={() => <Profile posts={props.posts} />} /> */}

          {/* <Route path='/profile' render={() => <Profile />} />
          <Route path='/dialogs' render={() => <Dialogs />} /> */}

          {/* <Route path='/profile' component={Profile}/>
          <Route path='/dialogs' component={Dialogs}/> */}
          {/* <Route path='/news' component={News}/>
          <Route path='/music' component={Music}/>
          <Route path='/setings' component={Setings}/> */}
        </div>
      </div>
    </Router>
  );
};

export default App;
