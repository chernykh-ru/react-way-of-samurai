import Preloader from '../../common/preloader/Preloader';
import styles from './ProfileInfo.module.css';
import avataaars from '../../../assets/images/avataaars.png';
import ProfileStatusWithHooks from './ProfileStatusWithHooks'; //следить за переименованием из FC в CC

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto }) => {
  // if (props.profile === null || props.profile === undefined)
  if (!profile) {
    return <Preloader />;
  }

  const onMainPhotoSelected = (e) => {
    // debugger;
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    } //проверяем что файлы прицепились и повесили на обработчик инпута колбэк TC
  };
  // debugger;
  return (
    <div>
      <div className={styles.descriptionBlock}>
        <img
          className={styles.userPhoto}
          src={profile.photos.large != null ? profile.photos.large : avataaars}
          alt='user avatar'
        />
        {/* <div>{isOwner && <input type={'file'} onChange={onMainPhotoSelected} />}</div> */}
        <div className={styles.inputWrapper}>
          {isOwner ? (
            <div>
              <input
                type={'file'}
                onChange={onMainPhotoSelected}
                name='file'
                id='input__file'
                className={styles.inputFile}
              />
              <label for='input__file' className={styles.inputFileButton}>
                <span className={styles.inputFileButtonText}>Выберите файл</span>
              </label>
            </div> //инпут спрятан за лейбл и стилизован под кнопку
          ) : (
            ''
          )}
        </div>
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
