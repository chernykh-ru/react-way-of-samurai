import Preloader from '../../common/preloader/Preloader';
import styles from './ProfileInfo.module.css';
import avataaars from '../../../assets/images/avataaars.png';
import ProfileStatusWithHooks from './ProfileStatusWithHooks'; //следить за переименованием из FC в CC
import React, { useState, ChangeEvent } from 'react';
import ProfileDataReduxForm from './ProfileDataForm';
import { ProfileType, ContactsType } from '../../../types/types'

type PropsType = {
  profile: ProfileType,
  status: string,
  updateStatus: (status: string) => void,
  isOwner: boolean,
  savePhoto: (photoFile: File) => void,
  saveProfile: (profile: ProfileType) => Promise<any>,
}

const ProfileInfo: React.FC<PropsType> = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile }) => {
  const [editMode, setEditMode] = useState(false);
  // if (props.profile === null || props.profile === undefined)
  if (!profile) {
    return <Preloader />;
  }

  const onSubmit = (formData: ProfileType) => {
    //todo: remove then
    saveProfile(formData).then(() => {
      setEditMode(false); //при успешном без ошибоксабмите убираем режим редактирования
    });
    // console.log(formData);
  };

  const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
    // debugger;
    if (e.target.files?.length) {//?необязательный(в данном случае если он есть не null)
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
              <label htmlFor='input__file' className={styles.inputFileButton}>
                <span className={styles.inputFileButtonText}>Выберите файл</span>
              </label>
            </div> //инпут спрятан за лейбл и стилизован под кнопку
          ) : (
            ''
          )}
        </div>
        <div className={styles.statusBlock}>
          <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
        </div>
        <div className={styles.dataWrapper}>
          {!editMode ? (
            <ProfileData profile={profile} isOwner={isOwner} setEditMode={setEditMode} />
          ) : (
            <ProfileDataReduxForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
          )}
        </div>
      </div>
    </div>
  );
};

type ProfileDataOwnPropsType = {
  profile: ProfileType,
  isOwner: boolean,
  setEditMode: (arg: boolean) => void,
}

const ProfileData: React.FC<ProfileDataOwnPropsType> = ({ profile, isOwner, setEditMode }) => {
  return (
    <div>
      <div>
        <p>Full name: {profile.fullName}</p>
      </div>
      <div>
        <p>About me: {profile.aboutMe}</p>
      </div>
      <div>
        <p>User id: {profile.userId}</p>
      </div>
      <div>
        <p>Looking for a job: {profile.lookingForAJob ? 'yes' : 'no'}</p>
        {profile.lookingForAJob && (
          <div>
            <p>My skills: {profile.lookingForAJobDescription}</p>
          </div>
        )}
      </div>
      <div>
        <b>Contacts: </b>
        {Object.keys(profile.contacts).map((key) => {
          //Метод Object.keys возвращает массив строковых элементов, соответствующих именам перечисляемых свойств, после мапим массив передавая в компонент ключ-значение
          return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key as keyof ContactsType]} />; //обратимся к profile.contacts и прочитаем свойство по ключу[key](наподобие точечной нотации)
        })}
      </div>
      <div>
        {isOwner && <button onClick={(goToEditMode) => setEditMode(true)}>Edit profile</button>}
      </div>
    </div>
  );
};

type ContactPropsType = {
  contactTitle: string | null, 
  contactValue: string | null,
}

const Contact: React.FC<ContactPropsType> = ({ contactTitle, contactValue }) => {
  return (
    <div className={styles.contactsWrapper}>
      {contactValue && (
        <p>
          {contactTitle}: {contactValue}
        </p>
      )}
    </div>
  );
};

export default ProfileInfo;
