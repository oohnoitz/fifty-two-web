import React, { Component } from 'react'
import { Link } from 'react-router'

import FlatButton from 'material-ui/FlatButton'

class HeaderAnon extends Component {
  static muiName = 'FlatButton'

  render() {
    const { style, ...props } = this.props

    return (
      <Link to={{ pathname: '/auth/signin' }}>
        <FlatButton style={style} label="Sign In"/>
      </Link>
    )
  }
}

export default HeaderAnon
