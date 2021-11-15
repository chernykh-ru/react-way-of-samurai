import { Field, reduxForm } from 'redux-form';

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={'Login'} name={'login'} component={'input'} />
      </div>
      <div>
        <Field placeholder={'Password'} name={'password'} component={'input'} />
      </div>
      <div>
        <Field component={'input'} name={'rememberMe'} type={'checkbox'} />
      </div>
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
  const onSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export default Login;
