import React, { Component } from 'react'
import Header from 'containers/Header'

class MainContainer extends Component {
  render() {
    return (
      <div>
        <Header/>
        {this.props.children}
      </div>
    )
  }
}

export default MainContainer
