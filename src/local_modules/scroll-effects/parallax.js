import React from 'react'
import _ from 'lodash'
import withPositionAwareness from 'scroll-awareness/with-position-awareness'
import 'animate.css/animate.min.css'

const Parallax = (props) => {
  console.log('>>', props)
  let child = React.Children.only(props.children)
  if (props.visible) {
    const parallaxRatio = (props.ratio - .5) * 2
    const parallaxSpeed = props.speed
    const position = parallaxSpeed * parallaxRatio
    console.log('s:', parallaxSpeed, 'r:', parallaxRatio, 'p:', position)
    // style
    const style = _.assign(
      {},
      _.get(props, 'style', {}),
      _.get(child, 'props.style', {}),
      { transform: `translateY(${position}px)` }
    )
    const childProps = _.assign({}, _.omit(props, ['children']), { style })
    child = React.cloneElement(child, childProps)
  }
  return (
    <div>{child}</div>
  )
}

export default withPositionAwareness()(Parallax)

