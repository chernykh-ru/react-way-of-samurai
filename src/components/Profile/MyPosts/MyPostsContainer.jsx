// import Post from './Post/Post';
// import styles from './MyPosts.module.css';
import React from 'react';
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from '../../../redux/profile-reducer';
import StoreContext from '../../../StoreContext';
import MyPosts from './MyPosts';
// import store from '../../../redux/store';

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

const MyPostsContainer = () => {
  // debugger;
  // let state = props.store.getState(); //получаем свежий стейт в контейнерной компоненте//add context
  // const postsElements = props.posts.map((p, i) => (
  //   <Post key={i} message={p.message} likeCounter={p.likeCounter} />
  // ));

  // let newPostElement = React.createRef();

  // let addPost = () => {
  //   // debugger;
  //   props.store.dispatch(addPostActionCreator()); //добавляем пост функцией через dispatch в стейте
  //   // let text = newPostElement.current.value; //значение поста берем в textarea value from ref//значение уже есть в стейте возьмем его от туда
  //   // props.addPost(); //добавляем пост функцией callback в стейте
  //   // props.updateNewPostText(''); //зануляем поле ввода после публикации поста//переносим логику в функцию в стейт
  //   // newPostElement.current.value = '';зануление поля ввода
  // };

  // let onPostChange = (text) => {
  //   let action = updateNewPostTextActionCreator(text);
  //   props.store.dispatch(action); //обновляем поле ввода из стейта по пропсам
  //   // let text = newPostElement.current.value; //значение поста берем в textarea value from ref
  //   // let action = { type: 'UPDATE-NEW-POST-TEXT', newText: text };
  //   // props.updateNewPostText(text); //обновляем поле ввода из стейта по пропсам
  // };

  // const addPost = () => {
  //   let text = document.getElementById('new-post').value//ЗАПРЕЩЕНО обращаться напрямую к DOM! Только через react и Virtual DOM
  //   alert(text)
  // }

  // let state = store.getState(); //получаем свежий стейт в контейнерной компоненте//add context

  //add context
  return (
    <StoreContext.Consumer>
      {(store) => {
        let addPost = () => {
          store.dispatch(addPostActionCreator()); //добавляем пост функцией через dispatch в стейте
        };
        let onPostChange = (text) => {
          let action = updateNewPostTextActionCreator(text);
          store.dispatch(action); //обновляем поле ввода из стейта по пропсам
        };
        return (
          <MyPosts
            addPost={addPost}
            updateNewPostText={onPostChange}
            posts={store.getState().profilePage.posts} //add context
            // posts={state.profilePage.posts}
            newPostText={store.getState().profilePage.newPostText} //add context
            // newPostText={state.profilePage.newPostText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;
