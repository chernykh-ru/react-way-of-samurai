import styles from './ProfileInfo.module.css';
import stylesForm from './../../common/FormsControls/FormsControls.module.css';
import { Field, reduxForm } from 'redux-form';
import { Input, Textarea } from '../../common/FormsControls/FormsControls';

const ProfileDataForm = ({ handleSubmit, profile, error }) => {
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

//unique name for the form
//оборачиваем нашу форму HOCом reduxForm
const ProfileDataReduxForm = reduxForm({ form: 'edit-profile' })(ProfileDataForm);

export default ProfileDataReduxForm;
