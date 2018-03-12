import _ from 'lodash'
import React, { Component } from 'react'
import withVisibilityAwareness from './with-visibility-awareness'

function mergeProps(props, target = {}) {
  return _.merge({}, props, target, {
    className: `${props.className || ''} ${target.className || ''}`
  })
}

const withVisibilityThreshold = (options) => (Wrapped) => {
  class Wrapper extends Component {
    render() {
      const { shown, visible } = this.props
      let props = this.props
      if (shown) {
        props = mergeProps(props, options.shown)
      } else {
        props = mergeProps(props, options.notShown)
      }
      if (visible) {
        props = mergeProps(props, options.visible)
      } else {
        props = mergeProps(props, options.notVisible)
      }
      return <Wrapped {...props} />
    }
  }
  return withVisibilityAwareness({ offset: options.threshold })(Wrapper)
}

export default withVisibilityThreshold
