import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import routes from './routes'
import configureStore from 'store'

const store = configureStore({})

const RootContainer = () => {
  return (
    <MuiThemeProvider>
      <Provider store={store}>
        <Router history={browserHistory} routes={routes}/>
      </Provider>
    </MuiThemeProvider>
  )
}

export default RootContainer
