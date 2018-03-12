import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class ScrollSpy extends Component {
  constructor(props) {
    super(props)
    this.children = []
    this.handleScroll = this.handleScroll.bind(this)
  }
  getChildTop(child) {
    const node = ReactDOM.findDOMNode(child)
    const { top } = node.getBoundingClientRect()
    return { [child.props.sectionid]: top };
  }
  handleScroll() {
    const childrenTops = this.children.reduce(
      (acc, child) => Object.assign(acc, this.getChildTop(child)),
      {}
    )
    this.props.onScroll(childrenTops)
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, false)
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }
  render() {
    const children = React.Children.map(
      this.props.children, child => React.cloneElement(child, { ref: ch => this.children.push(ch) })
    )
    return (children)
  }
}

export default ScrollSpy
