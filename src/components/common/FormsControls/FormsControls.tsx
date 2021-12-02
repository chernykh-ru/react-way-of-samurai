import { WrappedFieldProps, WrappedFieldInputProps, WrappedFieldMetaProps } from "redux-form";
import styles from './FormsControls.module.css';

type FormControlPropsType = {
  input: WrappedFieldInputProps
  meta: WrappedFieldMetaProps
}

const FormControl: React.FC<FormControlPropsType> = ({ input, meta, children, ...props }) => {
  const hasError = meta.touched && meta.error;

  return (
    <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
      <div>{children}</div>
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};


export const Textarea: React.FC<WrappedFieldProps> = (props) => {
  const { input, meta, ...restProps } = props;

  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps} />
    </FormControl>
  );
};

export const Input: React.FC<WrappedFieldProps> = (props) => {
  const { input, meta, ...restProps } = props;

  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  );
};

