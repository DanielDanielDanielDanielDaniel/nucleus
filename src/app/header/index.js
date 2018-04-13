import React from 'react'
import styles from './header.module.css'

const Header = ({ onOpenMenu }) => (
  <div className={styles.header}>
    <span className={styles.burger}
          onClick={onOpenMenu}
          onTouchStart={onOpenMenu}/>
    <div className={styles.buttonBox}>
      <a className={styles.button} href='https://ui8.net/products/nucleus-icon-set-v3?rel=doge'>Buy Set</a>
    </div>
  </div>
)

export default Header
