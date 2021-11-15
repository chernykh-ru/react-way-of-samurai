// import Post from './Post/Post';
// import styles from './MyPosts.module.css';
// import React from 'react';
import { connect } from 'react-redux';
import {
  addPostActionCreator,
  // updateNewPostTextActionCreator,
} from '../../../redux/profile-reducer';
// import StoreContext from '../../../StoreContext';
import MyPosts from './MyPosts';
// import store from '../../../redux/store';

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (newPostText) => {
      dispatch(addPostActionCreator(newPostText));
    },
    // updateNewPostText: (text) => {
    //   dispatch(updateNewPostTextActionCreator(text));
    // },//add redux-form
  };
};

let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
