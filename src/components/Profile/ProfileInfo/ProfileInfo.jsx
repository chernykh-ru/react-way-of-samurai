import Preloader from '../../common/preloader/Preloader';
import styles from './ProfileInfo.module.css';
import avataaars from '../../../assets/images/avataaars.png';
import ProfileStatus from './ProfileStatus'; //следить за переименованием из FC в CC

const ProfileInfo = (props) => {
  // if (props.profile === null || props.profile === undefined)
  if (!props.profile) {
    return <Preloader />;
  }
  // debugger;
  return (
    <div>
      {/* <div>
        <img
          src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'
          width='1000'
          height='250'
          alt='гора Фудзи'
        />
      </div> */}
      <div className={styles.descriptionBlock}>
        <img
          className={styles.userPhoto}
          src={props.profile.photos.large != null ? props.profile.photos.large : avataaars}
          alt='user avatar'
        />
        <div>
          <span>{props.profile.fullName}</span>
        </div>
        <div>
          <span>{props.profile.aboutMe}</span>
        </div>
        <div>
          <span>idUser: {props.profile.userId}</span>
        </div>
        <div className={styles.statusBlock}>
          <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
