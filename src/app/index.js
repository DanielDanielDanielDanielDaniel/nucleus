import React, { Component } from 'react'
import sectionWatcher from 'lib/section-watcher'
import Layout from 'app/layout'
import SiteMenu from 'app/site-menu'

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
  render() {
    return (
      <div className={styles.app}>
        <Hero/>
        <Layout>
          <SiteMenu/>
          <ScrollSpy idprop='sectionid' onScroll={sectionWatcher.update}>
            <UsecaseSteak sectionid='usecases' />
            <UsecaseWatch sectionid='usecases' />
            <UsecaseJet sectionid='usecases' />
            <DesignSpecification sectionid='design-spec' />
            <HowCanBeUsed sectionid='how-to-use'/>
            {/*
               <Features sectionid='features' />
               <IconsetGallery sectionid='iconset'/>
               <Contact sectionid='contact' />
            */}

          </ScrollSpy>
        </Layout>
      </div>
    )
  }
}

export default App
