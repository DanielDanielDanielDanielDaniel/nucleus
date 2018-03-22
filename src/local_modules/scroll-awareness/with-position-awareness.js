import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const SAFE_MARGIN = 100;

export class PositionInjector extends Component {
  constructor(Wrapped, offset, props) {
    super(props)
    this.wrappedComponent = Wrapped
    this.offset = (offset || 0)
    this.state = { visible: false, ratio: 0 }
    this.handleScroll = this.handleScroll.bind(this)
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }
  calculateRect() {
    const node = ReactDOM.findDOMNode(this)
    if (!node) return { height: 0, top: 0, bottom: 0 }
    return node.getBoundingClientRect()
  }
  handleScroll() {
    const rect = this.calculateRect()
    const top = rect.top + this.offset
    const height = rect.height
    const bottom = top + height
    const viewportHeight = window.innerHeight
    switch(true) {
      case (top > (viewportHeight + SAFE_MARGIN)): return this.setHidden()
      case (bottom < (0 - SAFE_MARGIN)): return this.setHidden()
      default: return this.setPosition(top, bottom, viewportHeight)
    }
  }
  setHidden() {
    if (this.state.visible)
      this.setState({ visible: false, ratio: 0 })
  }
  setPosition(top, bottom, viewportHeight) {
    const width = bottom - top
    const range = viewportHeight + width
    const position = top + width
    const ratio = (position / range)
    this.setState({ visible: true, ratio })
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
