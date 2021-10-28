import ProfileInfo from './ProfileInfo/ProfileInfo';
// import MyPosts from './MyPosts/MyPosts';
// import classes from './Profile.module.css'
import MyPostsContainer from './MyPosts/MyPostsContainer';
import store from '../../redux/store';

const Profile = (props) => {
  // debugger;
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer
        store={props.store}
        // posts={props.profilePage.posts}
        // dispatch={props.dispatch}
        // newPostText={props.profilePage.newPostText}
        // updateNewPostText={props.updateNewPostText}
      />
    </div>
  );
};

export default Profile;
