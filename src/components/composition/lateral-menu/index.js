import React, { Component } from 'react'
import classNames from 'classnames'

class LateralMenu extends Component {
  render() {
    const { activeSectionId, pre, post } = this.props
    const children = React.Children.map(
      this.props.children, child => React.cloneElement(child, {
        className: classNames(child.props.className, {
          activeItem: child.props.sectionid === activeSectionId
        })
      })
    )
    return (
      <aside className={this.props.className}>
        {pre}
        <ul>
          {children}
        </ul>
        {post}
      </aside>
    )
  }
}

export default LateralMenu
