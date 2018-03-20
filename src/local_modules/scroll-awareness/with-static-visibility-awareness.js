import ReactDOM from 'react-dom'
import { VisibilityInjector } from './with-visibility-awareness'

export class StaticVisibilityInjector extends VisibilityInjector {
  calculateRect() {
    if (!this.rect) {
      const node = ReactDOM.findDOMNode(this)
      this.rect = node.getBoundingClientRect()
    }
    return this.rect
  }
}

const withStaticVisibilityAwareness = (options = {}) => (Wrapped) => {
  return class extends StaticVisibilityInjector {
    constructor(...args) {
      super(Wrapped, options.offset, ...args)
    }
  }
}

export default withStaticVisibilityAwareness
