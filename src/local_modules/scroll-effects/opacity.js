import React from 'react'
import _ from 'lodash'
import withPositionAwareness from 'scroll-awareness/with-position-awareness'
import { vmap, vcap } from './utils'
import easingFunctions from './easing-functions'

const Opacity = (props) => {
  let child = React.Children.only(props.children)
  if (props.visible) {
    const ratio = props.ratio
    const { variance = 1, base = 1, reference = .5, range = .5 } = props
    const start = reference - range
    const stop = reference + range
    const easingFn = _.get(easingFunctions, props.easing, easingFunctions.linear)
    const mapedRatio = vmap(easingFn(ratio), start, stop, 0, 2)
    const finalRatio = vcap(Math.abs(mapedRatio - 1), 0, 1)
    const opacity = base - (variance * finalRatio)
    // style
    const style = _.assign(
      {},
      _.get(props, 'style', {}),
      _.get(child, 'props.style', {}),
      { opacity }
    )
    const childProps = _.assign({}, _.omit(props, ['children', 'visible']), { style })
    child = React.cloneElement(child, childProps)
  }
  return (child)
}

export default withPositionAwareness()(Opacity)
