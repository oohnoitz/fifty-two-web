import React, { Component } from 'react'
import { connect } from 'react-redux'

import AppBar from 'material-ui/AppBar'
import HeaderAnon from 'components/HeaderAnon'
import HeaderUser from 'components/HeaderUser'

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = { openUserMenu: false }
  }

  handleTouchTap = (event) => {
    event.preventDefault()

    this.setState({
      openUserMenu: true,
      anchorUserMenuEl: event.currentTarget,
    })
  }

  handleCloseTap = () => {
    this.setState({
      openUserMenu: false,
    })
  }

  get userMenuProps() {
    return {
      openUserMenu: this.state.openUserMenu,
      anchorUserMenuEl: this.state.anchorUserMenuEl,
      handleTouchTap: this.handleTouchTap,
      handleCloseTap: this.handleCloseTap,
    }
  }

  render() {
    const { session } = this.props
    const { currentUser } = session

    const UserComponent = currentUser ? HeaderUser : HeaderAnon

    return (
      <AppBar
        title="FiftyTwo"
        iconElementRight={<UserComponent session={session} {...this.userMenuProps}/>}
        showMenuIconButton={false}
      />
    )
  }
}

const mapStateToProps = (state) => {
  const { session } = state

  return {
    session,
  }
}

export default connect(mapStateToProps)(Header)
