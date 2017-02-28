import { combineReducers } from 'redux'

import session from 'store/Auth/reducers'

const reducers = combineReducers({
  session,
})

export default reducers
