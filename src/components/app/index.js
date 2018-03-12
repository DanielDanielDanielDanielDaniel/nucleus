import React, { Component } from 'react'
import sectionWatcher from 'lib/section-watcher'
import Layout from 'components/layout'
import SiteMenu from 'components/presentation/site-menu'
import Hero from 'components/presentation/hero'
import ScrollSpy from 'components/interaction/scroll-spy'
import ContentBlock from 'components/composition/test-content-block'
import FadeIn from 'components/effects/fade-in'
import styles from './app.module.css'

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <Hero/>
        <Layout>
          <SiteMenu/>
          <ScrollSpy onScroll={sectionWatcher.update}>
            <FadeIn sectionid='block-1'>
              <ContentBlock />
            </FadeIn>
            <FadeIn sectionid='block-2'>
              <ContentBlock/>
            </FadeIn>
            <FadeIn sectionid='block-3'>
              <ContentBlock />
            </FadeIn>
            <ContentBlock sectionid='block-4' />
            <ContentBlock sectionid='block-5' />
          </ScrollSpy>
        </Layout>
      </div>
    )
  }
}

export default App
