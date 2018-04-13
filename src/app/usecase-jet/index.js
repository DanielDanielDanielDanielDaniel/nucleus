import React from 'react'

import cn from 'classnames'
import Parallax from 'scroll-effects/parallax'
import Opacity from 'scroll-effects/opacity'
import radarIcon from './assets/radar-icon.svg'
import funnelIcon from './assets/funnel-icon.svg'
import marketsIcon from './assets/capital-markets-icon.svg'
import styles from './usecase-jet.module.css'
import jet from './assets/jet.png'


const UsecaseJet = ()=> (
	<Parallax speed={-150}>
	  <div className={styles.container}>
	    <img src={jet} alt='jet'/>
	  </div>
  	</Parallax>
)

export default UsecaseJet
