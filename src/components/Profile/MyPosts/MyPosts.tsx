import Post from './Post/Post';
import styles from './MyPosts.module.css';
import React from 'react';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';
import { required, maxLengthCreator } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';
import {PostType} from '../../../types/types'


const maxLength30 = maxLengthCreator(30);

type AddPostOwnProps = {
}//для дальнейшего использования

const AddPostForm: React.FC<InjectedFormProps<AddPostValuesType & AddPostOwnProps> & AddPostOwnProps> = ({ handleSubmit}) => {
  // const { handleSubmit } = props;
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

type AddPostValuesType = {
  newPostText: string | null
}

const AddPostFormRedux = reduxForm<AddPostValuesType>({ form: 'postAddPostForm' })(AddPostForm);

export type MapStatePropsType = {
  posts: Array<PostType>
}

export type MapDispatchPropsType = {
  addPost: (newPostText: string | null) => void,

}

type PropsType = MapStatePropsType & MapDispatchPropsType

const MyPosts: React.FC<PropsType> = React.memo(({posts, addPost}) => {
  // debugger;
  const postsElements = [...posts] //иммутабельность - меняем отображение постов на странице не затрагивая исходные данные, а делая копию и ее переворачивая(новые посты сверху)
    .reverse()
    .map((p, i) => <Post key={i} message={p.message} likeCounter={p.likeCounter} />);

  const addNewPost = (value: AddPostValuesType) => {
    addPost(value.newPostText);
  };

  return (
    <div className={styles.postsBlock}>
      <h3>My posts</h3>
      <AddPostFormRedux onSubmit={addNewPost} />
      <div className={styles.posts}>{postsElements}</div>
    </div>
  );
}); //обернули ХОКом мемо, тест, решает проблему с лишними рендерами при неизменившихся пропсах и стейте

export default MyPosts;
