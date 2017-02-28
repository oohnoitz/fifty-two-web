import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from 'store/Auth/actions'

import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

class SignIn extends Component {
  handleAuthentication = (event) => {
    event.preventDefault()

    const { username, password } = this
    const { dispatch } = this.props
    const params = {
      username: username.input.value,
      password: password.input.value,
    }

    dispatch(actions.signin(params))
  }

  render() {
    return (
      <form onSubmit={this.handleAuthentication}>
        <TextField
          floatingLabelText="Username"
          hintText="Username"
          ref={(ref) => { this.username = ref }}
        />
        <TextField
          floatingLabelText="Password"
          hintText="Password"
          type="password"
          ref={(ref) => { this.password = ref }}
        />
        <RaisedButton type="submit" label="Sign In" primary={true}/>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  const { session } = state

  return {
    session,
  }
}

export default connect(mapStateToProps)(SignIn)
