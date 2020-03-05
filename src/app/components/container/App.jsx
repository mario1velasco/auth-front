/////////////
// IMPORTS //
/////////////

// BÁSICO
import React, { useState } from 'react'
import { withRouter, Router } from "react-router-dom";

// // HELPERS
import { historyHelper } from '../../helpers/history';

// // COMPONENTES PROPIOS
// import Header from '@components/misc/header/Header'
import MyRouter from './MyRouter.jsx'

// COMPONENTES EXTERNOS
import { Alert } from 'react-bootstrap';

const App = () => {
  const [open, setOpen] = useState(false)

  return (
    <Router history={historyHelper}>
      <div className="App">
        <MyRouter></MyRouter>
      </div>
    </Router>
  )
}

export default withRouter(App);