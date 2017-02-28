import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'

class MainLayout extends Component {
  render() {
    return (
      <div>
        <AppBar
          title="FiftyTwo"
          iconElementLeft={<div/>}
        />
        {this.props.children}
      </div>
    )
  }
}

export default MainLayout
