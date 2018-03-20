import React, { Component } from 'react'

// BASE INJECTOR FOR POSITION AND VISIBLITY HERE

export class ScrollInjector extends Component {
  constructor(Wrapped, offset, props) {
    super(props)
    this.wrappedComponent = Wrapped
    this.offset = (offset || 0)
    // TODO
    this.state = this.getInitialState()
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
