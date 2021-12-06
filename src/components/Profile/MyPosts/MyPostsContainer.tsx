import { connect } from 'react-redux';
import { actions } from '../../../redux/profile-reducer';
import MyPosts, {MapStatePropsType, MapDispatchPropsType} from './MyPosts';
import {AppStateType} from '../../../redux/redux-store'


// type MapStatePropsType = {
//   posts: PostType[]
//   newPostText: string | null
// }

const mapStateToProps = (state: AppStateType) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,//переделано на redux-form
  }
};

// let mapDispatchToProps = (dispatch) => {
//   return {
//     addPost: (newPostText) => {
//       dispatch(actions.addPostActionCreator(newPostText));
//     },
//   };
// };//используем сокращенный синтаксис в mDTP

const MyPostsContainer = connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {addPost: actions.addPostActionCreator})(MyPosts);

export default MyPostsContainer;
