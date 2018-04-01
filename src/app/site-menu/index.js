import React, { Component } from 'react'
import classNames from 'classnames'
import ScrollAwareLateralMenu from 'components/composition/scroll-aware-lateral-menu'
import globalStyles from 'app/app.module.css'
import layoutStyles from 'app/layout/layout.module.css'
import styles from './site-menu.module.css'
// images
import twitterLogo from './assets/twitter.svg'
import linkedinLogo from './assets/linkedin.svg'
import pinterestLogo from './assets/pinterest.svg'
import designerNewsLogo from './assets/designer-news.svg'
import productHuntLogo from './assets/product-hunt.svg'

const MenuItem = (props) => (
  <li {...props} className={classNames(props.className, styles.item)}>{props.children}</li>
)

const MenuTitle = (props) => (
  <li {...props} className={classNames(props.className, styles.title)}>{props.children}</li>
)

const CloseButton = ({ onCloseMenu }) => (
  <div className={styles.closeButton} onClick={onCloseMenu} onTouchStart={onCloseMenu}/>
)

const ShareButtons = () => (
  <div className={styles.shareButtons}>
    <a href='#'>
      <img src={twitterLogo} alt='twitter'/>
    </a>
    <a href='#'>
      <img src={linkedinLogo} alt='linkedin'/>
    </a>
    <a href='#'>
      <img src={pinterestLogo} alt='pinterestLogo'/>
    </a>
    <a href='#'>
      <img src={designerNewsLogo} alt='designerNews'/>
    </a>
    <a href='#'>
      <img src={productHuntLogo} alt='productHunt'/>
    </a>
  </div>
)

class SiteMenu extends Component {
  render() {
    const { onCloseMenu, isMenuOpen } = this.props
    console.log('>props', this.props)
    return (
      <ScrollAwareLateralMenu className={classNames(styles.menu, layoutStyles.menu, { open: isMenuOpen })}
                              pre={<CloseButton onCloseMenu={onCloseMenu}/>}
                              post={<ShareButtons/>}
                              onClick={onCloseMenu} >

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

        <MenuTitle>Other</MenuTitle>

        <MenuItem sectionid='contact'>
          Contact
        </MenuItem>

        <MenuTitle className={globalStyles.desktopHidden}>Share</MenuTitle>

      </ScrollAwareLateralMenu>
    )
  }
}

export default SiteMenu
