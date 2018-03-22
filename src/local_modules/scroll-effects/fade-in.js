import React from 'react'
import classNames from 'classnames'
import withVisibilityThreshold from 'scroll-awareness/with-visibility-threshold'
import 'animate.css/animate.min.css'

const FadeIn = (props) => {
  const children = React.Children.map(child => React.cloneElement(
    child,
    Object.assign({}, props, { className: classNames(child.props.className, props.className) })
  ))
  return <React.Fragment>{children}</React.Fragment>
}

export default withVisibilityThreshold({
  notShown: {
    className: classNames('hidden')
  },
  shown: {
    className: classNames('animated', 'fadeInLeft')
  } 
})(FadeIn)
