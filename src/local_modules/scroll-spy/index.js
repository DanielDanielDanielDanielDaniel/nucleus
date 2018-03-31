import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'


class Wrapper extends Component {
  render() {
    return (React.cloneElement(this.props.child, this.props.props));
  }
}

class ScrollSpy extends Component {
  constructor(props) {
    super(props)
    this.children = []
    this.idProp = props.idprop
    this.handleScroll = this.handleScroll.bind(this)
  }
  getChildTop(child) {
    const node = ReactDOM.findDOMNode(child)
    if (!node) return {}
    const { top } = node.getBoundingClientRect()
    const key = child.props && child.props[this.idProp]
    return key ? { [key]: top } : {}
  }
  mergeValues(a, b) {
    if (a && b) return Math.min(a, b)
  }
  handleScroll() {
    const childrenTops = this.children.reduce(
      (acc, child) => _.mergeWith(acc, this.getChildTop(child), this.mergeValues),
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
    this.children = []
    const wrapped = React.Children.map(
      this.props.children, child => (
        <Wrapper child={child} props={child.props}
                 {...{ [this.idProp]: child.props[this.idProp] }}
                 ref={ch => this.children.push(ch)}/>
      )
    )
    return (wrapped);
  }
}

export default ScrollSpy
