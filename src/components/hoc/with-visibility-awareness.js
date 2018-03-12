import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const withVisibilityAwareness = (options) => (Wrapped) => {
  return class extends Component {
    constructor(props) {
      super(props)
      this.offset = (options.offset || 0)
      this.state = { visible: false, shown: false }
      this.handleScroll = this.handleScroll.bind(this)
    }
    componentDidMount() {
      window.addEventListener('scroll', this.handleScroll)
    }
    componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll)
    }
    handleScroll() {
      const node = ReactDOM.findDOMNode(this)
      const rect = node.getBoundingClientRect()
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
      return <Wrapped {...props}/>
    }
  }
}

export default withVisibilityAwareness
