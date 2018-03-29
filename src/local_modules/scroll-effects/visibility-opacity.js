import _ from 'lodash'
import React from 'react'
import withVisibilityAwareness from 'scroll-awareness/with-visibility-awareness'
import easingFunctions from './easing-functions'
import { vmap } from './utils'

const Opacity = (props) => {
  let child = React.Children.only(props.children)
  if (props.visible) {
    const ratio = props.ratio
    const { variance = 1, base = 0 } = props
    const start = base
    const stop = base + variance
    const easingFn = _.get(easingFunctions, props.easing, easingFunctions.linear)
    const opacity = vmap(easingFn(ratio), 0, 1, start, stop)
    // styles
    const style = _.assign(
      {},
      _.get(props, 'style', {}),
      _.get(child, 'props.style', {}),
      { opacity }
    )
    const childProps = _.assign({}, _.omit(props, ['children', 'visible', 'shown']), { style })
    child = React.cloneElement(child, childProps)
  }
  return (child)
}

export default withVisibilityAwareness()(Opacity)
