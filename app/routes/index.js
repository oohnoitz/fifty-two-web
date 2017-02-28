import React from 'react'
import { Route } from 'react-router'

import AppContainer from 'containers/App'
import AuthContainer from 'containers/Auth'

export default (
  <Route path="/" component={AppContainer}>
    <Route path="/auth/signin" component={AuthContainer.SignIn}/>
    <Route path="/auth/signup" component={AuthContainer.SignUp}/>
  </Route>
)
