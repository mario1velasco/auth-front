import React from 'react';
import { useField, Form, FormikProps, Formik } from 'formik';
import TextInput from './components/TextInput.jsx';

const MyForm = () => (
  <div>
    <h1>My Form</h1>
    <Formik
      initialValues={{
        email: '',
        firstName: 'red',
        lastName: '',
      }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
    >
        <Form>
          <TextInput
            label="First Name"
            name="firstName"
            type="text"
            placeholder="Jane"
          />
          <button type="submit">Submit</button>
        </Form>
    </Formik>
  </div>
);

////////////
// EXPORT //
////////////
export default MyForm;