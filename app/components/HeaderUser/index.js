import React, { Component } from 'react'

import FlatButton from 'material-ui/FlatButton'
import Popover from 'material-ui/Popover'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'

class HeaderUser extends Component {
  static muiName = 'FlatButton'

  render() {
    const { style, ...props } = this.props

    return (
      <div>
        <FlatButton
          onTouchTap={props.handleTouchTap}
          style={style}
          label="User"
        />
        <Popover
          open={props.openUserMenu}
          anchorEl={props.anchorUserMenuEl}
          anchorOrigin={{horizontal: 'right', vertical: 'top'}}
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
          onRequestClose={props.handleCloseTap}
        >
          <Menu>
            <MenuItem onClick={props.handleSignOut} primaryText="Sign Out"/>
          </Menu>
        </Popover>
      </div>
    )
  }
}

export default HeaderUser
