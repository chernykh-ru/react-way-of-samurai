import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {ProfileType} from '../../types/types'

type PropsType = {
  profile: ProfileType,
  status: string,
  updateStatus: (status: string) => void,
  isOwner: boolean,
  savePhoto: (photoFile: File) => void,
  saveProfile: (profile: ProfileType) => Promise<any>,
}

const Profile: React.FC<PropsType> = (props) => {
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
