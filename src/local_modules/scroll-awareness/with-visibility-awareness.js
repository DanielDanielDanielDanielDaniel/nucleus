import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export class VisibilityInjector extends Component {
  constructor(Wrapped, offset, props) {
    super(props)
    this.wrappedComponent = Wrapped
    this.offset = (offset || 0)
    this.state = { visible: false, shown: false }
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
      case (top > viewportHeight): return this.setHidden()
      case (top < -height): return this.setHidden()
      case (top >= 0 && bottom < viewportHeight): return this.setFullyVisible()
      case (top >= 0): return this.setPartiallyVisible((viewportHeight - top) / height)
      case (top < 0): return this.setPartiallyVisible((top + height) / height)
      default: throw new Error('Uknown state')
    }
  }
  setHidden() {
    if (this.state.visible)
      this.setState({ visible: false, ratio: 0 })
  }
  setFullyVisible() {
    if (!this.state.visible)
      this.setState({ visible: true, ratio: 1, shown: true })
  }
  setPartiallyVisible(ratio) {
    this.setState({ visible: true, ratio, shown: true })
  }
  render() {
    const props = Object.assign({}, this.props, this.state)
    const Wrapped = this.wrappedComponent
    return <Wrapped {...props}/>
  }
}

const withVisibilityAwareness = (options = {}) => (Wrapped) => {
  return class extends VisibilityInjector {
    constructor(...args) {
      super(Wrapped, options.offset, ...args)
    }
  }
}

export default withVisibilityAwareness
