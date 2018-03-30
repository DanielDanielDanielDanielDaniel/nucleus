import React from 'react'
import _ from 'lodash'
import withPositionAwareness from 'scroll-awareness/with-position-awareness'
import { vmap, vcap } from './utils'

const Parallax = (props) => {
  let child = React.Children.only(props.children)
  const parallaxRatio = vmap(props.ratio, 0, 1, -1, 1)
  const parallaxSpeed = props.speed
  const position = parallaxSpeed * parallaxRatio
  // style
  const style = _.assign(
    {},
    _.get(props, 'style', {}),
    _.get(child, 'props.style', {}),
    // leave it in its original position when not visible to recalculate
    // the scroll position
    props.visible ? { transform: `translateY(${position}px)` } : {}
  )
  const childProps = _.assign({}, _.omit(props, ['children', 'visible']), { style })
  child = React.cloneElement(child, childProps)
  return (
    child
  )
}

export default withPositionAwareness()(Parallax)

