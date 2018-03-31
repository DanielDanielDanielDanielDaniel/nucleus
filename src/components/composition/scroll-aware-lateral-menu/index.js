import React from 'react'
import { identity } from 'lodash'
import { nextTick } from 'lib/utils'
import sectionWatcher from 'lib/section-watcher'
import withEventEmitter from 'with-event-emitter'
import LateralMenu from 'components/composition/lateral-menu'

const ScrollAwareLateralMenu = (props) => {
  // make the children links to the sections
  const children = React.Children.map(
    props.children, (ch) => {
      if (!ch.props.sectionid) return ch
      else return React.cloneElement(ch, {
        onClick: (e) => {
          sectionWatcher.goto(ch.props.sectionid)
          nextTick(props.onClick)
        }
      })
    }
  )
  return (
    <LateralMenu {...props}>
      {children}
    </LateralMenu>
  )
}

export default withEventEmitter(sectionWatcher, {
  event: 'active',
  prop: 'activeSectionId'
})(ScrollAwareLateralMenu)
