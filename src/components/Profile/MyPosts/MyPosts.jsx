import Post from './Post/Post';
import styles from './MyPosts.module.css';
import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/state';

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

const MyPosts = (props) => {
  // debugger;
  const postsElements = props.posts.map((p, i) => (
    <Post key={i} message={p.message} likeCounter={p.likeCounter} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    // debugger;
    // let text = newPostElement.current.value; //значение поста берем в textarea value from ref//значение уже есть в стейте возьмем его от туда
    props.dispatch(addPostActionCreator()); //добавляем пост функцией через dispatch в стейте
    // props.addPost(); //добавляем пост функцией в стейте
    // props.updateNewPostText(''); //зануляем поле ввода после публикации поста//переносим логику в функцию в стейт
    // newPostElement.current.value = '';зануление поля ввода
  };

  let onPostChange = () => {
    let text = newPostElement.current.value; //значение поста берем в textarea value from ref
    let action = updateNewPostTextActionCreator(text);
    // let action = { type: 'UPDATE-NEW-POST-TEXT', newText: text };
    props.dispatch(action); //обновляем поле ввода из стейта по пропсам
    // props.updateNewPostText(text); //обновляем поле ввода из стейта по пропсам
  };

  // const addPost = () => {
  //   let text = document.getElementById('new-post').value//ЗАПРЕЩЕНО обращаться напрямую к DOM! Только через react и Virtual DOM
  //   alert(text)
  // }

  return (
    <div className={styles.postsBlock}>
      <h3>My posts</h3>
      <div className={styles.postBlock}>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
          {/* <textarea id='new-post'></textarea> */}
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={styles.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
