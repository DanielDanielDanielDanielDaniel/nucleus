import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { vmap, vcap } from './lib/utils'

const SAFE_MARGIN = 100
const ABOVE = 'above'
const BELOW = 'below'

export class PositionInjector extends Component {
  constructor(Wrapped, offset, props) {
    super(props)
    this.wrappedComponent = Wrapped
    this.offset = (offset || 0)
    this.state = { visible: true, ratio: 0 }
    this.handleScroll = this.handleScroll.bind(this)
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }
  findDOMNode() {
    if (!this.node) {
      this.node = ReactDOM.findDOMNode(this)
    }
    return this.node
  }
  calculateRect(forceUpdate = false) {
    const node = this.findDOMNode()
    if (!node) return { height: 0, top: 0 }
    if (forceUpdate || !this.top) {
      // cache all this to avoid touching the DOM on subsequent events
      const rect = node.getBoundingClientRect()
      this.top = rect.top + window.scrollY
      this.height = rect.height
    }
    return { top: this.top, height: this.height }
  }
  handleScroll() {
    const rect = this.calculateRect()
    const top = rect.top + this.offset - window.scrollY
    const height = rect.height
    const bottom = top + height
    const viewportHeight = window.innerHeight
    switch(true) {
      case (top > (viewportHeight + SAFE_MARGIN)): return this.setHidden(BELOW)
      case (bottom < (0 - SAFE_MARGIN)): return this.setHidden(ABOVE)
      default: return this.setPosition(top, height, viewportHeight)
    }
  }
  setHidden(position) {
    if (this.state.visible) {
      this.setState({ visible: false, ratio: (position === ABOVE) ? 0 : 1})
    }
    // recalculate the screen position when hidden
    this.calculateRect(true)
  }
  setPosition(top, height, viewportHeight) {
    const ratio = vmap(top, -height, viewportHeight, 0, 1)
    this.setState({ visible: true, ratio: vcap(ratio, 0, 1) })
  }
  render() {
    const props = Object.assign({}, this.props, this.state)
    const Wrapped = this.wrappedComponent
    return <Wrapped {...props}/>
  }
}

const withPositionAwareness = (options = {}) => (Wrapped) => {
  return class extends PositionInjector {
    constructor(...args) {
      super(Wrapped, options.offset, ...args)
    }
  }
}

export default withPositionAwareness
