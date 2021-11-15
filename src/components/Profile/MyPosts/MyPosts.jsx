import Post from './Post/Post';
import styles from './MyPosts.module.css';
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';

const maxLength30 = maxLengthCreator(30);

const AddPostForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit} className={styles.postBlock}>
      <div>
        <Field
          component={Textarea}
          name={'newPostText'}
          placeholder={'Enter your post text'}
          validate={[required, maxLength30]}
        />
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

  return (
    <div className={styles.postsBlock}>
      <h3>My posts</h3>
      <AddPostFormRedux onSubmit={addNewPost} />
      <div className={styles.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
