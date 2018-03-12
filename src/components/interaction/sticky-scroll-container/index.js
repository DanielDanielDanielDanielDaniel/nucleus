import React, { Component } from 'react'

class StickyScrollContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { offset: 0 }
    this.onScroll = this.onScroll.bind(this)
  }
  onScroll(e) {
    const { top } = this.box.getBoundingClientRect()
    const { threshold = 10 } = this.props
    if (top < threshold) {
      this.setState({ offset: threshold - top })
    } else {
      this.setState({ offset: 0 })
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.onScroll, false)
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll)
  }
  render() {
    const { offset } = this.state
    const children = React.Children.map(
      this.props.children, ch => React.cloneElement(ch, { scrolloffset: offset })
    )
    return (
      <div ref={box => this.box = box} className={this.props.className}>
        {children}
      </div>
    )
  }
}

export default StickyScrollContainer
