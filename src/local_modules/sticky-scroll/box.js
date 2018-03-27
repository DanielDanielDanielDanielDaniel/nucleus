import React, { Component } from 'react'
import styles from './sticky-scroll-box.module.css'

class StickyScrollBox extends Component {
  render() {
    const { scrolloffset, stickyClass = styles.fixed } = this.props
    return (
      <div className={scrolloffset > 0 ? stickyClass : ''}>
        {this.props.children}
      </div>
    )
  }
}

export default StickyScrollBox
