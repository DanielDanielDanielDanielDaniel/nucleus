import React, { Component } from 'react'
import sectionWatcher from 'lib/section-watcher'
import Layout from 'app/layout'
import SiteMenu from 'app/site-menu'
import Hero from 'app/hero'
import ScrollSpy from 'scroll-spy'
import ContentBlock from 'app/test-content-block'
import FadeIn from 'scroll-effects/fade-in'
import Parallax from 'scroll-effects/parallax'
import styles from './app.module.css'

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <Hero/>
        <Layout>
          <SiteMenu/>
          <ScrollSpy idprop='sectionid' onScroll={sectionWatcher.update}>
            <div>
              <h1>Something</h1>
              <Parallax speed={200}>
                <h1>Something else</h1>
              </Parallax>
            </div>
            {/*
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
            */}
          </ScrollSpy>
        </Layout>
      </div>
    )
  }
}

export default App
