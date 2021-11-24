import ProfileInfo from './ProfileInfo/ProfileInfo';
// import MyPosts from './MyPosts/MyPosts';
// import classes from './Profile.module.css'
import MyPostsContainer from './MyPosts/MyPostsContainer';
// import store from '../../redux/store';

const Profile = (props) => {
  // debugger;
  return (
    <div>
      <ProfileInfo
        isOwner={props.isOwner}
        savePhoto={props.savePhoto}
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
        saveProfile={props.saveProfile}
      />
      <MyPostsContainer
      // store={props.store}
      // posts={props.profilePage.posts}
      // dispatch={props.dispatch}
      // newPostText={props.profilePage.newPostText}
      // updateNewPostText={props.updateNewPostText}
      />
    </div>
  );
};

export default Profile;
