import smoothScroll from 'smoothscroll'
import EventEmitter from 'eventemitter3'
import _ from 'lodash'

const OFFSET = 50

class SectionWatcher extends EventEmitter {
  constructor(...args) {
    super(...args)
    this.update = this.update.bind(this)
    this.goto = this.goto.bind(this)
  }
  findActiveSection(sectionScrollData) {
    const pairs = _.entries(sectionScrollData)
    const viewed = _.filter(pairs, ([k, v]) => v <= OFFSET)
    if (_.isEmpty(viewed)) return null
    const [active] = _.head(_.sortBy(viewed, ([k, v]) => Math.abs(v)))
    return active
  }
  update(sectionScrollData) {
    this.sectionScrollData = sectionScrollData
    const activeSection = this.findActiveSection(sectionScrollData)
    this.emit('active', activeSection)
  }
  goto(section) {
    // if the section does not exist, scroll to the top
    const target = (this.sectionScrollData[section] || -window.scrollY - OFFSET)
    const ref = window.scrollY
    smoothScroll(ref + target - OFFSET)
  }
}

const sectionWatcher = new SectionWatcher()
export default sectionWatcher
