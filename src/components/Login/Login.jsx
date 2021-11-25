import { Field, reduxForm } from 'redux-form';
import { Input } from '../common/FormsControls/FormsControls';
import { required } from '../../utils/validators/validators';
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reducer';
import { Redirect } from 'react-router';
import styles from '../common/FormsControls/FormsControls.module.css';
import stylesLogin from './Login.module.css';

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
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
const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
  };

  if (props.isAuth) {
    return <Redirect to={'/profile'} />;
  }

  return (
    <div>
      <h1 className={stylesLogin.loginH1}>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
      <div className={stylesLogin.loginblock}>
        <h2>Данные тестового аккаунта:</h2>
        <p>Email: free@samuraijs.com</p>
        <p>Password: free</p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  captchaUrl: state.auth.captchaUrl,
});

export default connect(mapStateToProps, { login })(Login);
