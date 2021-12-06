import styles from './ProfileInfo.module.css';
import stylesForm from './../../common/FormsControls/FormsControls.module.css';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';
import { Input, Textarea } from '../../common/FormsControls/FormsControls';
import { ProfileType } from '../../../types/types'

type PropsType = {
  profile: ProfileType,
}//собственные пропсы формы

const ProfileDataForm: React.FC<InjectedFormProps<ProfileType, PropsType> & PropsType> = ({ handleSubmit, profile, error }) => {
  return (
    <form onSubmit={handleSubmit} className={styles.profileFormWrapper}>
      <div>
        <p>Full name: </p>
        <Field placeholder={'Full name'} name={'fullName'} component={Input} />
      </div>
      <div>
        <p>About me:</p>
        <Field placeholder={'About me'} name={'aboutMe'} component={Input} />
      </div>
      <div>
        <p>Looking for a job:</p>
        <Field name={'lookingForAJob'} component={Input} type={'checkbox'} />
      </div>
      <div>
        <p>About skils: </p>
        <Field
          placeholder={'about skills'}
          name={'lookingForAJobDescription'}
          component={Textarea}
        />
      </div>
      <div>
        <b>Contacts: </b>
        {Object.keys(profile.contacts).map((key) => {
          //Метод Object.keys возвращает массив строковых элементов, соответствующих именам перечисляемых свойств, после мапим массив передавая в компонент ключ-значение
          return (
            <div key={key} className={styles.contactsWrapper}>
              {key}: {<Field placeholder={key} name={'contacts.' + key} component={Input} />}
            </div>
          ); //обратимся к profile.contacts и прочитаем свойство по ключу[key](наподобие точечной нотации)
        })}
      </div>
      {error && <div className={stylesForm.formSummaryError}>{error}</div>}
      <button>Отправить</button>
    </form>
  );
};

// export type ProfileFormValuesType = {
//   fullName: string | null,
//   aboutMe: string | null,
//   lookingForAJob: boolean,
//   lookingForAJobDescription: string | null,
// }

//unique name form
//оборачиваем нашу форму HOCом reduxForm
const ProfileDataReduxForm = reduxForm<ProfileType, PropsType>({ form: 'edit-profile' })(ProfileDataForm);

export default ProfileDataReduxForm;
