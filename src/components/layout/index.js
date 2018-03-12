import React, { Component } from 'react'
import StickyScrollContainer from 'components/interaction/sticky-scroll-container'
import StickyScrollBox from 'components/interaction/sticky-scroll-box'
import styles from './layout.module.css'

class Layout extends Component {
  render() {
    const [menu, ...rest] = React.Children.toArray(this.props.children)
    return (
      <StickyScrollContainer className={styles.layout}>
        <StickyScrollBox>
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
