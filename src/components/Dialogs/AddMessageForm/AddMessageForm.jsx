import { Field } from 'redux-form';
import { Textarea } from '../../common/FormsControls/FormsControls';
import { required, maxLengthCreator } from '../../../utils/validators/validators';

const maxLength50 = maxLengthCreator(50);

export const AddMessageForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          component={Textarea}
          name={'newMessageText'}
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
