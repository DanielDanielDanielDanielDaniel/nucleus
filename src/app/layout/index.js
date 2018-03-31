import React, { Component } from 'react'
import StickyScrollContainer from 'sticky-scroll/container'
import StickyScrollBox from 'sticky-scroll/box'
import styles from './layout.module.css'

class Layout extends Component {
  render() {
    const [menu, ...rest] = React.Children.toArray(this.props.children)
    return (
      <StickyScrollContainer className={styles.layout}>
        <StickyScrollBox stickyClass={styles.fixed}>
          {menu}
        </StickyScrollBox>
        <main className={styles.mainContent}>
          {rest}
        </main>
      </StickyScrollContainer>
    )
  }
}

export default Layout
