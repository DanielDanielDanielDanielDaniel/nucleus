import React, { Component } from 'react'
import classNames from 'classnames'

class LateralMenu extends Component {
  render() {
    const { activeSectionId } = this.props
    const children = React.Children.map(
      this.props.children, child => React.cloneElement(child, {
        className: classNames(child.props.className, {
          activeItem: child.props.sectionid === activeSectionId
        })
      })
    )
    return (
      <aside className={this.props.className}>
        <ul>
          {children}
        </ul>
      </aside>
    )
  }
}

export default LateralMenu
