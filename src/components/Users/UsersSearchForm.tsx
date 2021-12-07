// import styles from './Users.module.css';
import React from 'react';
import { Formik, Form, Field } from 'formik';
import { FilterType } from '../../redux/users-reducer';

const usersSearchFormValidate = (values: any) => {
  const errors = {};
  return errors;
};

// type FriendFormType = 'true' | 'false' | 'null'

type FormType = {
  term: string;
  friend: null;
  // friend: 'true' | 'false' | 'null';
};

type PropsType = {
  onFilterChanged: (filter: FilterType) => void;
};

const UsersSearchForm: React.FC<PropsType> = React.memo(({ onFilterChanged }) => {
  const submit = (
    values: FormType, //FormType
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void },
  ) => {
    const filter: FilterType = {
      term: values.term,
      friend: values.friend === 'null' ? null : values.friend === 'true' ? true : false,
    };
    // debugger;
    onFilterChanged(filter);
    setSubmitting(false);
  };
  return (
    <div>
      <Formik
        initialValues={{ term: '', friend: null }}
        validate={usersSearchFormValidate}
        onSubmit={submit}>
        {({ isSubmitting }) => (
          <Form>
            <Field type='text' name='term' />
            <Field name='friend' as='select'>
              <option value='null'>All</option>
              <option value='true'>Only followed</option>
              <option value='false'>Only unfollowed</option>
            </Field>
            <button type='submit' disabled={isSubmitting}>
              Find
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
});

export default UsersSearchForm;
