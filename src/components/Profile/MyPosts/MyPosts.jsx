import Post from './Post/Post';
import styles from './MyPosts.module.css';
import React from 'react';
import { Field, reduxForm } from 'redux-form';
// import {
//   addPostActionCreator,
//   updateNewPostTextActionCreator,
// } from '../../../redux/profile-reducer';

// //создаем функцию action creator, которая возвращает объект {action}, после чего переносим их в стейт
// let addPostActionCreator = () => {
//   return { type: 'ADD-POST' };
// };

// let updateNewPostTextActionCreator = (text) => {
//   return {
//     type: 'UPDATE-NEW-POST-TEXT',
//     newText: text,
//   };
// };//add redux-form

const AddPostForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit} className={styles.postBlock}>
      <div>
        <Field component={'textarea'} name={'newPostText'} placeholder={'Enter your post text'} />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

const AddPostFormRedux = reduxForm({ form: 'postAddPostForm' })(AddPostForm);

const MyPosts = (props) => {
  // debugger;
  const postsElements = props.posts.map((p, i) => (
    <Post key={i} message={p.message} likeCounter={p.likeCounter} />
  ));

  const addNewPost = (value) => {
    props.addPost(value.newPostText);
  };

  // let newPostElement = React.createRef();

  // let onAddPost = () => {
  //   // debugger;
  //   props.addPost(); //добавляем пост функцией callback в стейте
  //   // let text = newPostElement.current.value; //значение поста берем в textarea value from ref//значение уже есть в стейте возьмем его от туда
  //   // props.dispatch(addPostActionCreator()); //добавляем пост функцией через dispatch в стейте//зачищаем презентационную компоненту
  //   // props.updateNewPostText(''); //зануляем поле ввода после публикации поста//переносим логику в функцию в стейт
  //   // newPostElement.current.value = '';зануление поля ввода
  // };//add redux-form

  // let onPostChange = () => {
  //   let text = newPostElement.current.value; //значение поста берем в textarea value from ref
  //   props.updateNewPostText(text); //обновляем поле ввода функцией callback из стейта по пропсам
  //   // let action = updateNewPostTextActionCreator(text);//зачищаем презентационную компоненту
  //   // let action = { type: 'UPDATE-NEW-POST-TEXT', newText: text };
  //   // props.dispatch(action); //обновляем поле ввода из стейта по пропсам//зачищаем презентационную компоненту
  // };//add redux-form

  return (
    <div className={styles.postsBlock}>
      <h3>My posts</h3>
      <AddPostFormRedux onSubmit={addNewPost} />
      <div className={styles.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
