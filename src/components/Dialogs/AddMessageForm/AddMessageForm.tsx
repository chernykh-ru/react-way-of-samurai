import { Field, reduxForm, InjectedFormProps } from 'redux-form';
import { Textarea } from '../../common/FormsControls/FormsControls';
import { required, maxLengthCreator } from '../../../utils/validators/validators';
import {DialogMessageFormType} from '../Dialogs'

const maxLength50 = maxLengthCreator(50);

// type DialogMessageFormValuesKeysType = Extract<keyof DialogMessageFormType, string>//ключи для кастомных функций

type PropsType = {}//добавлены пока для единообразия с прицелом на дальнейшее развитие

const AddMessageForm: React.FC<InjectedFormProps<DialogMessageFormType, PropsType> & PropsType> = ({ handleSubmit }) => {
  // const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          component={Textarea}
          name={'message'}
          placeholder={'Enter your message'}
          validate={[required, maxLength50]}
        />
      </div>
      <div>
        <button>Add message</button>
      </div>
    </form>
  );
};

export const AddMessageFormRedux = reduxForm<DialogMessageFormType>({ form: 'dialogAddMessageForm' })(AddMessageForm);
