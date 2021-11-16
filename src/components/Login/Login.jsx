import { Field, reduxForm } from 'redux-form';
import { Input } from '../common/FormsControls/FormsControls';
import { required } from '../../utils/validators/validators';
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reducer';
import { Redirect } from 'react-router';
import styles from '../common/FormsControls/FormsControls.module.css';

const LoginForm = (props) => {
  // debugger;
  return (
    <form onSubmit={props.handleSubmit}>
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
      {props.error && <div className={styles.formSummaryError}>{props.error}</div>}
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
//оборачиваем нашу форму HOCом
const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

const Login = (props) => {
  // debugger;
  const onSubmit = (formData) => {
    // console.log(formData);
    props.login(formData.email, formData.password, formData.rememberMe);
  };

  if (props.isAuth) {
    return <Redirect to={'/profile'} />;
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
