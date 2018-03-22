import React, { Component } from 'react'

class MainContent extends Component {
  render() {
    return (
      <main>
        {this.props.children}
      </main>
    )
  }
}

export default MainContent
