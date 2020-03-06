/////////////
// IMPORTS //
/////////////

// BÁSICO
import React from 'react';
import { Switch, Route, withRouter, Redirect } from "react-router-dom";

// CONSTANTES
import SHARED from '../../utils/global-constants.js';

// COMPONENTES PROPIOS
import About from '../about/About.jsx'
import SignUp from '../sign-up/SignUp.jsx'
import LogIn from '../log-in/LogIn.jsx'

////////////////
// CONSTANTES //
////////////////
const PrivateRoute = ({ component: Component, authenticated, ...rest }) => (
  <Route
    {...rest}
    render={function(props) {
      return authenticated ? <Component {...props} /> : <Redirect to='/log-in' />
    }} />
)
const MyRouter = () => {
    //////////////////////////
  // MÉTODOS DE INSTANCIA //
  //////////////////////////
  // isAuthenticated() {
  //   return this.getCurrentUser() ? true : false;
  // }

  /////////////
  // RENDERS //
  /////////////
  return (
    <Switch>
      {/* If the current URL is /home, this route is rendered while the rest are ignored */}

      {/* ////////////// */}
      {/* RUTAS PÚBLICAS */}
      {/* ////////////// */}
      <Route path={SHARED.LOGIN_PATH} component={LogIn} />
      <Route path={SHARED.SIGNUP_PATH} component={SignUp} />


      {/* ////////////// */}
      {/* RUTAS PRIVADAS */}
      {/* ////////////// */}
      {/* <PrivateRoute
        path={SHARED.HOME_PATH}
        authenticated={this.isAuthenticated()}
        component={Home}
      /> */}

      {/* If none of the previous routes render anything,
        this route acts as a fallback.*/}
      {/* RUTA RAIZ */}
      <Route path={SHARED.ROOT_PATH} component={About} />
    </Switch>
  );
};

////////////
// EXPORT //
////////////
export default withRouter(MyRouter);