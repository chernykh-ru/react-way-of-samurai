import Preloader from '../../common/preloader/Preloader';
import styles from './ProfileInfo.module.css';
import avataaars from '../../../assets/images/avataaars.png';
import ProfileStatusWithHooks from './ProfileStatusWithHooks'; //следить за переименованием из FC в CC

const ProfileInfo = ({ profile, status, updateStatus }) => {
  // if (props.profile === null || props.profile === undefined)
  if (!profile) {
    return <Preloader />;
  }
  // debugger;
  return (
    <div>
      <div className={styles.descriptionBlock}>
        <img
          className={styles.userPhoto}
          src={profile.photos.large != null ? profile.photos.large : avataaars}
          alt='user avatar'
        />
        <div>
          <span>{profile.fullName}</span>
        </div>
        <div>
          <span>{profile.aboutMe}</span>
        </div>
        <div>
          <span>idUser: {profile.userId}</span>
        </div>
        <div className={styles.statusBlock}>
          <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
