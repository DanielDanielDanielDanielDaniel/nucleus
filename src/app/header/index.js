import React from 'react'
import styles from './header.module.css'
import badge from './assets/cssda-nominee-purple-vote.png'
import badge2 from './assets/awwwards_nominee_white_left@2x.png'

const Header = ({ onOpenMenu }) => (
  <div className={styles.header}>
    <span className={styles.burger}
          onClick={onOpenMenu}
          onTouchStart={onOpenMenu}/>
    <div className={styles.buttonBox}>
      <a className={styles.button} href='https://crmrkt.com/MVBWoK?u=DanielSeiler'>Buy Set</a>
    </div>
    <div className={styles.awardBadge}>
    <a href='https://www.cssdesignawards.com/sites/nucleus-iconset/32906/'>
    	<img src={badge} alt=''/>
    </a>
    </div>
    <div className={styles.awardBadge2}>
    <a href='http://www.awwwards.com'>
      <img src={badge2} alt=''/>
    </a>
      
    </div>
  </div>
)

export default Header