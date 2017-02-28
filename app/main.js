import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppContainer from 'containers/App'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import routes from './routes'
import configureStore from 'store'

const store = configureStore({})

const RootContainer = () => {
  return (
    <MuiThemeProvider>
      <Provider store={store}>
        <AppContainer>
          <Router history={browserHistory} routes={routes}/>
        </AppContainer>
      </Provider>
    </MuiThemeProvider>
  )
}

export default RootContainer
