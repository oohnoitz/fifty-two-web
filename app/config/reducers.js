import { combineReducers } from 'redux'

import session from '../components/auth/reducer'

const reducers = combineReducers({
  session,
})

export default reducers
