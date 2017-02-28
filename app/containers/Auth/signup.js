import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from 'store/Auth/actions'

import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

class SignUp extends Component {
  handleRegistration = (event) => {
    event.preventDefault()

    const { username, password, email } = this
    const { dispatch } = this.props
    const params = {
      user : {
        email: email.input.value,
        username: username.input.value,
        password: password.input.value,
      },
    }

    dispatch(actions.signup(params))
  }

  render() {
    return (
      <form onSubmit={this.handleRegistration}>
        <TextField
          floatingLabelText="E-mail"
          hintText="E-mail"
          ref={(ref) => { this.email = ref }}
        />
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
        <RaisedButton type="submit" label="Sign Up" primary={true}/>
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

export default connect(mapStateToProps)(SignUp)
