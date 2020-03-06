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
// import { Form, Col, InputGroup, Button } from 'react-bootstrap';

// COMPONENTES PROPIOS
import MyForm from '../shared/form/MyForm.jsx';

// CONSTANTES
import SHARED from '../../utils/global-constants.js';



const LogIn = () => {

  return (
    <MyForm></MyForm>
  );
}

////////////
// EXPORT //
////////////
export default withRouter(LogIn);