import React, { Component } from 'react'

import FlatButton from 'material-ui/FlatButton';

class HeaderAnon extends Component {
  static muiName = 'FlatButton'

  render() {
    const { style, ...props } = this.props

    return (
      <FlatButton style={style} label="Sign In"/>
    )
  }
}

export default HeaderAnon
