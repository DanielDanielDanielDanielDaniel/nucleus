import React from 'react'
import classNames from 'classnames'
import withVisibilityThreshold from 'scroll-awareness/with-visibility-threshold'
import 'animate.css/animate.min.css'

const FadeIn = (props) => {
  const child = React.cloneElement(
    React.Children.only(props.children),
    Object.assign({}, props, { className: classNames(props.className) })
  )
  return child
}

export default withVisibilityThreshold({
  notShown: {
    className: classNames('hidden')
  },
  shown: {
    className: classNames('animated', 'fadeInUp')
  } 
})(FadeIn)
