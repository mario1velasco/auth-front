/////////////
// IMPORTS //
/////////////

// BÁSICO
import React from 'react';
import { withRouter } from "react-router-dom";

// SERVICIOS
// import { userService } from '@services/user-service';

// COMPONENTES EXTERNOS
import { Formik } from 'formik';
import * as yup from 'yup';
import { Form, Col, InputGroup, Button } from 'react-bootstrap';

// COMPONENTES PROPIOS
// import Common from '@components/main-container/Common';

// CONSTANTES
import SHARED from '../../utils/global-constants.js';

const schema = yup.object({
  email: yup.string().required(),
  username: yup.string().required(),
});

class SignUp extends React.Component {
  /////////////////
  // CONSTRUCTOR //
  /////////////////
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      apiError: null,
    };
  }

  ///////////////
  // CALLBACKS //
  ///////////////
  // onSubmitForm(values, { setSubmitting }) {
  //   userService.saveUser(values, this.props.userId)
  //   .then(
  //     user => {
  //       setSubmitting(false);
  //       this.props.history.push(SHARED.HOME_PATH);
  //     },
  //     error => {
  //       setSubmitting(false);
  //       this.setState({apiError: error.message ? error.message : error })
  //     }
  //   );
  // }

  /////////////
  // RENDERS //
  /////////////
  render() {
    return (
      <div>
        {/* {this.getAllHelpers().renderError(this.state.apiError)}
        {this.getAllHelpers().renderBackButton()} */}
        <div className='container'>
          <h2>{SHARED.VIEWS.USER.FORM.TITLE}</h2>
          <Formik
            validationSchema={schema}
            onSubmit={(values, { setSubmitting }) => {
              this.onSubmitForm(values, { setSubmitting })
            }}
            initialValues={{
              email: '',
              password: '',
            }}
          >
            {({
              handleSubmit,
              handleChange,
              handleBlur,
              values,
              touched,
              isValid,
              errors,
              isSubmitting,
            }) => (
              <Form
                ref={(form) => { this.form = form }}
                onSubmit={handleSubmit}
              >
                <Form.Row>
                  <Form.Group as={Col} md="12" controlId="formTitle">
                    <Form.Label>{SHARED.MODELS.USER.FIELDS.TITLE}</Form.Label>
                    <Form.Control
                      type="text"
                      name="email"
                      value={values.email}
                      placeholder={SHARED.MODELS.USER.FIELDS.TITLE}
                      onChange={handleChange}
                      isValid={touched.email && !errors.email}
                      isInvalid={!!errors.email}
                    />
                    <Form.Control.Feedback>{SHARED.VIEWS.USER.FORM.FIELD_OK}</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      {errors.email}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="12" controlId="formDescription">
                    <Form.Label>{SHARED.MODELS.USER.FIELDS.DESCRIPTION}</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      value={values.password}
                      placeholder={SHARED.MODELS.USER.FIELDS.DESCRIPTION}
                      onChange={handleChange}
                      isValid={touched.password && !errors.password}
                      isInvalid={!!errors.password}
                    />
                    <Form.Control.Feedback>{SHARED.VIEWS.USER.FORM.FIELD_OK}</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      {errors.password}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Form.Row>
                <Button type="submit" disabled={isSubmitting}>{SHARED.VIEWS.COMMON.BUTTONS.UPDATE}</Button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    );
  }
}

////////////
// EXPORT //
////////////
export default withRouter(SignUp);