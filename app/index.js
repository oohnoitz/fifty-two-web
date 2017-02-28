import React from 'react'
import ReactDOM from 'react-dom'
import ReactTapEventPlugin from 'react-tap-event-plugin'
import RootContainer from './main'
import { AppContainer } from 'react-hot-loader'

const render = Component => {
  return ReactDOM.render(
    <AppContainer>
      <Component/>
    </AppContainer>,
    document.getElementById('main')
  )
}

ReactTapEventPlugin()
render(RootContainer)

if (module.hot) {
  module.hot.accept('./main', () => {
    const NewRootContainer = require('./main').default
    return ReactDOM.render(
      <AppContainer>
        <NewRootContainer/>
      </AppContainer>,
      document.getElementById('main')
    )
  })
}
