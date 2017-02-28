import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducers from './reducers'

const configureStore = (initialState) => {
  const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore)
  const store = createStoreWithMiddleware(reducers, initialState)

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const newReducers = require('./reducers')
      store.replaceReducer(newReducers)
    })
  }

  return store
}

export default configureStore
