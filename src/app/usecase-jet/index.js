import React from 'react'

import cn from 'classnames'
import Parallax from 'scroll-effects/parallax'
import Opacity from 'scroll-effects/opacity'
import radarIcon from './assets/radar-icon.svg'
import funnelIcon from './assets/funnel-icon.svg'
import marketsIcon from './assets/capital-markets-icon.svg'
import styles from './usecase-jet.module.css'

const UsecaseJet = ()=> (
  <div className={styles.container}>
    <Parallax speed={10}>
      <Opacity reference={0.7} range={0.2} base={0.3} variance={0.2}>
        <img src={radarIcon} className={cn(styles.icon, styles.radarIcon)} alt='icon'/>
      </Opacity>
    </Parallax>
    <Parallax speed={20}>
      <Opacity reference={0.4} range={0.4} base={0.45} variance={0.4}>
        <img src={funnelIcon} className={cn(styles.icon, styles.funnelIcon)} alt='icon'/>
      </Opacity>
    </Parallax>
    <Parallax speed={70}>
      <Opacity reference={0.2} range={0.2} base={0.5} variance={0.4}>
        <img src={marketsIcon} className={cn(styles.icon, styles.marketsIcon)} alt='icon'/>
      </Opacity>
    </Parallax>
  </div>
)

export default UsecaseJet
