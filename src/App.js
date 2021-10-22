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
import {BrowserRouter as Route} from 'react-router-dom';
// import {BrowserRouter as Router, Route} from 'react-router-dom';


const App = (props) => {

  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route path='/profile'>
          <Profile state={props.state.profilePage} addPost={props.addPost} />
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
          <Friends />
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
  );
};

export default App;
