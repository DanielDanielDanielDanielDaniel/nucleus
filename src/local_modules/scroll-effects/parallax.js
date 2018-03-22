import React from 'react'
import _ from 'lodash'
import withPositionAwareness from 'scroll-awareness/with-position-awareness'

const Parallax = (props) => {
  let child = React.Children.only(props.children)
  if (props.visible) {
    const parallaxRatio = (props.ratio - .5) * 2
    const parallaxSpeed = props.speed
    const position = parallaxSpeed * parallaxRatio
    // style
    const style = _.assign(
      {},
      _.get(props, 'style', {}),
      _.get(child, 'props.style', {}),
      { transform: `translateY(${position}px)` }
    )
    const childProps = _.assign({}, _.omit(props, ['children', 'visible']), { style })
    child = React.cloneElement(child, childProps)
  }
  return (
    child
  )
}

export default withPositionAwareness()(Parallax)

