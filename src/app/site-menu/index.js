import React, { Component } from 'react'
import classNames from 'classnames'
import ScrollAwareLateralMenu from 'components/composition/scroll-aware-lateral-menu'
import layoutStyles from 'app/layout/layout.module.css'
import styles from './site-menu.module.css'

const MenuItem = (props) => (
  <li {...props} className={classNames(props.className, styles.item)}>{props.children}</li>
)

const MenuTitle = (props) => (
  <li {...props} className={classNames(props.className, styles.title)}>{props.children}</li>
)

class SiteMenu extends Component {
  render() {
    return (
      <ScrollAwareLateralMenu className={classNames(styles.menu, layoutStyles.menu)}>

        <MenuTitle>Intro</MenuTitle>

        <MenuItem sectionid='hero'>
          Nucleus
        </MenuItem>

        <MenuItem sectionid='usecases'>
          Use Cases
        </MenuItem>

        <MenuItem sectionid='design-spec'>
          Design specification
        </MenuItem>

        <MenuItem sectionid='how-to-use'>
          How to Use
        </MenuItem>

        <MenuItem sectionid='features'>
          Features
        </MenuItem>

        <MenuTitle>Product</MenuTitle>

        <MenuItem sectionid='iconset'>
          Iconset
        </MenuItem>

        <MenuTitle>Contact</MenuTitle>

        <MenuItem sectionid='contact'>
          Contact
        </MenuItem>

      </ScrollAwareLateralMenu>
    )
  }
}

export default SiteMenu
