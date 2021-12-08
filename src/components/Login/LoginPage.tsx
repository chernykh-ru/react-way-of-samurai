import { Field, reduxForm, InjectedFormProps } from 'redux-form';
import { Input } from '../common/FormsControls/FormsControls';
import { required } from '../../utils/validators/validators';
import { login } from '../../redux/auth-reducer';
import { Redirect } from 'react-router-dom';
import styles from '../common/FormsControls/FormsControls.module.css';
import stylesLogin from './Login.module.css';
import { AppStateType } from '../../redux/redux-store';
import { useSelector, useDispatch } from 'react-redux';

type LoginFormOwnProps = {
  captchaUrl: string | null;
}; //собственные пропсы формы
//InjectedFormProps заинжекченый набор свойств redux-form(handleSubmit, error)
//LoginFormValuesType свойства формы из полей

const LoginForm: React.FC<
  InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps
> = ({ handleSubmit, error, captchaUrl }) => {
  return (
    <form onSubmit={handleSubmit} className={styles.loginFormWrapper}>
      <div>
        <Field placeholder={'Email'} name={'email'} component={Input} validate={[required]} />
      </div>
      <div>
        <Field
          placeholder={'Password'}
          name={'password'}
          type={'password'}
          component={Input}
          validate={[required]}
        />
      </div>
      <div>
        <Field component={Input} name={'rememberMe'} type={'checkbox'} />
      </div>
      {error && <div className={styles.formSummaryError}>{error}</div>}
      {captchaUrl && ( //по условию наличия в стейте капчи покажем ее на странице формы
        <div>
          <img src={captchaUrl} alt='captcha' />
          <Field placeholder={'captcha'} name={'captcha'} component={Input} validate={[required]} />
        </div>
      )}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

//handleSubmit выполнит следующие действия
//e.preventDefault
//get all form data and put them to object
//props.onSubmit(formData)

//unique name for the form
//оборачиваем нашу форму HOCом reduxForm
const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({ form: 'login' })(
  LoginForm,
);

type LoginFormValuesType = {
  email: string;
  password: string;
  rememberMe: boolean;
  captcha: string | null;
};

export const LoginPage: React.FC = () => {
  const dispatch = useDispatch();
  const { isAuth, captchaUrl } = useSelector(({ auth }: AppStateType) => auth);

  const onSubmit = (formData: LoginFormValuesType) => {
    dispatch(login(formData.email, formData.password, formData.rememberMe, formData.captcha));
  };

  if (isAuth) {
    return <Redirect to={'/profile'} />;
  }

  return (
    <div>
      <h1 className={stylesLogin.loginH1}>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl} />
      <div className={stylesLogin.loginblock}>
        <h2>Данные тестового аккаунта:</h2>
        <p>Email: free@samuraijs.com</p>
        <p>Password: free</p>
      </div>
    </div>
  );
};
