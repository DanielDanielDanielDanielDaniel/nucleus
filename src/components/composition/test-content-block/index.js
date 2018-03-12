import React, { Component } from 'react'
import classNames from 'classnames'
import styles from './test-content-block.module.css'

class TestContentBlock extends Component {
  render() {
    return (
      <div className={classNames(styles.testContentBlock, this.props.className)}>
        <span>Just some random test content</span>
      </div>
    )
  }
}

export default TestContentBlock
