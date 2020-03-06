import React from 'react';
import { useField } from 'formik';
import { Form, Col, InputGroup, Button } from 'react-bootstrap';

const TextField = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);
  // debugger
  return (
    <div>
      <Form.Group as={Col} md={props.grid} controlId="formTitle">
        <div>
          <Form.Label>{label}</Form.Label>
          <Form.Control
            type={props.type}
            name={props.name}
            value={props.value}
            placeholder={props.placeholder}
            // onChange={handleChange}
            // isValid={touched.email && !errors.email}
            // isInvalid={!!errors.email}
          />
          {/* <Form.Control.Feedback>
            {SHARED.VIEWS.COMMON.FORM.FIELD_OK}
          </Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            {SHARED.VIEWS.COMMON.FORM.FIELD_ERROR}
          </Form.Control.Feedback> */}
        </div>
      </Form.Group>
    </div>
  );

  // const [field, meta, helpers] = useField(props);
  // return (
  //   <>
  //     <label>
  //       {label}
  //       <input {...field} {...props} />
  //     </label>
  //     {meta.touched && meta.error ? (
  //       <div className='error'>{meta.error}</div>
  //     ) : null}
  //   </>
  // );
};

////////////
// EXPORT //
////////////
export default TextField;