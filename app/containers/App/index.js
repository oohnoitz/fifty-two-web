import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from 'store/Auth/actions'

import Header from 'containers/Header'

class AppContainer extends Component {
  componentDidMount() {
    const { dispatch, session } = this.props
    const token = localStorage.getItem('AuthToken')

    if (token && session.currentUser === null) {
      dispatch(actions.verify(token))
    }
  }

  render() {
    return (
      <div>
        <Header/>
        {this.props.children}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { session } = state

  return {
    session,
  }
}

export default connect(mapStateToProps)(AppContainer)
