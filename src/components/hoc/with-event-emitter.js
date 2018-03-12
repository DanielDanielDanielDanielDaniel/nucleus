import React, { Component } from 'react'

const withEventEmitter = (emitter, options) => (Wrapped) => {
  const { event, prop } = options
  return class extends Component {
    constructor(props)  {
      super(props)
      this.state = { value: null }
      this.updateValue = this.updateValue.bind(this)
    }
    componentDidMount() {
      emitter.on(event, this.updateValue)
    }
    componentWillUnmount() {
      emitter.removeListener(event, this.updateValue)
    }
    updateValue(value) {
      this.setState({ value })
    }
    render() {
      const props = Object.assign({}, this.props, { [prop]: this.state.value })
      return (<Wrapped {...props} />)
    }
  }
}

export default withEventEmitter
