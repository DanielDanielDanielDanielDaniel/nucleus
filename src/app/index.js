import React, { Component } from 'react'
import sectionWatcher from 'lib/section-watcher'
import Layout from 'app/layout'
import SiteMenu from 'app/site-menu'

import Header from 'app/header'
import Hero from 'app/hero'
import UsecaseSteak from 'app/usecase-steak'
import UsecaseWatch from 'app/usecase-watch'
import UsecaseJet from 'app/usecase-jet'
import DesignSpecification from 'app/design-specifications'
import HowCanBeUsed from 'app/how-can-be-used'
import Features from 'app/features'
import IconsetGallery from 'app/iconset-gallery'
import Contact from 'app/contact'

import ScrollSpy from 'scroll-spy'
// import ContentBlock from 'app/test-content-block'
// import FadeIn from 'scroll-effects/fade-in'
// import Parallax from 'scroll-effects/parallax'

import 'normalize.css'
import styles from './app.module.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { menuOpen: false }
    // handlers
    this.onOpenMenu = () => this.setState({ menuOpen: true })
    this.onCloseMenu = () => this.setState({ menuOpen: false})
  }
  render() {
    return (
      <div className={styles.app}>
        <Header onOpenMenu={this.onOpenMenu}/>
        <Hero/>
        <Layout>
          <SiteMenu onCloseMenu={this.onCloseMenu} isMenuOpen={this.state.menuOpen}/>
          <ScrollSpy idprop='sectionid' onScroll={sectionWatcher.update}>
            <HowCanBeUsed sectionid='how-to-use'/>
            <UsecaseSteak sectionid='usecases' />
            <DesignSpecification sectionid='design-spec' />
            <UsecaseWatch sectionid='usecases' />
            <Features sectionid='features' />
            
            <IconsetGallery sectionid='iconset'/>
            <Contact sectionid='contact' />
          </ScrollSpy>
        </Layout>
      </div>
    )
  }
}

export default App
