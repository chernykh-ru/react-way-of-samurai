// import Post from './Post/Post';
// import styles from './MyPosts.module.css';
import React from 'react';
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

// //создаем функцию action creator, которая возвращает объект {action}, после чего переносим их в стейт
// let addPostActionCreator = () => {
//   return { type: 'ADD-POST' };
// };

// let updateNewPostTextActionCreator = (text) => {
//   return {
//     type: 'UPDATE-NEW-POST-TEXT',
//     newText: text,
//   };
// };

const MyPostsContainer = (props) => {
  // debugger;
  let state = props.store.getState(); //получаем свежий стейт в контейнерной компоненте
  // const postsElements = props.posts.map((p, i) => (
  //   <Post key={i} message={p.message} likeCounter={p.likeCounter} />
  // ));

  // let newPostElement = React.createRef();

  let addPost = () => {
    // debugger;
    props.store.dispatch(addPostActionCreator()); //добавляем пост функцией через dispatch в стейте
    // let text = newPostElement.current.value; //значение поста берем в textarea value from ref//значение уже есть в стейте возьмем его от туда
    // props.addPost(); //добавляем пост функцией callback в стейте
    // props.updateNewPostText(''); //зануляем поле ввода после публикации поста//переносим логику в функцию в стейт
    // newPostElement.current.value = '';зануление поля ввода
  };

  let onPostChange = (text) => {
    let action = updateNewPostTextActionCreator(text);
    props.store.dispatch(action); //обновляем поле ввода из стейта по пропсам
    // let text = newPostElement.current.value; //значение поста берем в textarea value from ref
    // let action = { type: 'UPDATE-NEW-POST-TEXT', newText: text };
    // props.updateNewPostText(text); //обновляем поле ввода из стейта по пропсам
  };

  // const addPost = () => {
  //   let text = document.getElementById('new-post').value//ЗАПРЕЩЕНО обращаться напрямую к DOM! Только через react и Virtual DOM
  //   alert(text)
  // }

  return (
    <MyPosts
      addPost={addPost}
      updateNewPostText={onPostChange}
      posts={state.profilePage.posts}
      newPostText={state.profilePage.newPostText}
    />
  );
};

export default MyPostsContainer;
