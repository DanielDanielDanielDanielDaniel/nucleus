import React from 'react'
import styles from './header.module.css'
import badge from './assets/cssda-nominee-purple-vote.png'


const Header = ({ onOpenMenu }) => (
  <div className={styles.header}>
    <span className={styles.burger}
          onClick={onOpenMenu}
          onTouchStart={onOpenMenu}/>
    <div className={styles.buttonBox}>
      <a className={styles.button} href='https://ui8.net/products/nucleus-icon-set-v3?rel=doge'>Buy Set</a>
    </div>
    <div className={styles.awardBadge}>
    <a href='https://www.cssdesignawards.com/sites/nucleus-iconset/32906/'>
    	<img src={badge} alt=''/>
    </a>
      
    </div>
  </div>
)

export default Header
