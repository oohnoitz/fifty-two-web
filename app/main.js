import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import MainLayout from './common/layouts/main'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import routes from './config/routes'
import configureStore from './config/store'

const store = configureStore({})

const RootContainer = () => {
  return (
    <MuiThemeProvider>
      <Provider store={store}>
        <MainLayout>
          <Router history={browserHistory} routes={routes}/>
        </MainLayout>
      </Provider>
    </MuiThemeProvider>
  )
}

export default RootContainer
