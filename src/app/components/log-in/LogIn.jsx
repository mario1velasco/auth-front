/////////////
// IMPORTS //
/////////////

// BÁSICO
import React from 'react';
import { withRouter } from "react-router-dom";

// SERVICIOS
import { userService } from '@services/user-service';

// COMPONENTES EXTERNOS
import { Formik } from 'formik';
import * as yup from 'yup';
import { Form, Col, InputGroup, Button } from 'react-bootstrap';

// COMPONENTES PROPIOS
import Common from '@components/main-container/Common';

// CONSTANTES
import SHARED from '@utils/global-constants';

// const schema = yup.object({
//   email: yup.string().required(),
//   username: yup.string().required(),
// });

class UsersForm extends Common {
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
  // ///////////////
  // componentDidMount() {
  //   // Si es edición llamar API
  //   if (this.props.userId) {
  //     userService.getUser(this.props.userId)
  //     .then(
  //       user => {
  //         this.setState({
  //           user: user
  //         })
  //       },
  //       error => {
  //         this.setState({apiError: error.message ? error.message : error })
  //       }
  //     );
  //   }
  // }

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
    if (this.state.user){
      return (
        <div>
          {/* {this.getAllHelpers().renderError(this.state.apiError)}
          {this.getAllHelpers().renderBackButton()} */}
          <div className='container'>
            <h2>{SHARED.USER_VIEWS.FORM.TITLE}</h2>
            <Formik
              validationSchema={schema}
              onSubmit={(values, { setSubmitting }) => {
                this.onSubmitForm(values, { setSubmitting })
              }}
              initialValues={{
                email: this.state.user.email,
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
                    <Form.Group as={Col} md="6" controlId="formEmail">
                      <Form.Label>{SHARED.USER_MODEL.FIELDS.EMAIL}</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={values.email}
                        placeholder={SHARED.USER_MODEL.FIELDS.EMAIL}
                        disabled
                      />
                    </Form.Group>
                  </Form.Row>
                  <Button type="submit" disabled={isSubmitting}>{SHARED.BUTTONS.UPDATE}</Button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

////////////
// EXPORT //
////////////
export default withRouter(UsersForm);