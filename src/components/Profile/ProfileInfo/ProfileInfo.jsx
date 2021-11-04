import Preloader from '../../common/preloader/Preloader';
import styles from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  // if (props.profile === null || props.profile === undefined)
  if (!props.profile) {
    return <Preloader />;
  }
  // debugger;
  return (
    <div>
      <div>
        <img
          src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'
          width='1000'
          height='250'
          alt='гора Фудзи'
        />
      </div>
      <div>
        <img src={props.profile.photos.large} alt='user avatar' />
        <div>
          <span>{props.profile.fullName}</span>
        </div>
        <div>
          <span>{props.profile.aboutMe}</span>
        </div>
      </div>
      <div className={styles.descriptionBlock}>ava+description</div>
    </div>
  );
};

export default ProfileInfo;
