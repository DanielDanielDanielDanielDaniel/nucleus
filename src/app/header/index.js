import React from 'react'
import styles from './header.module.css'

const Header = () => (
  <div className={styles.header}>
    <span className={styles.burger}/>
    <div className={styles.buttonBox}>
      <a className={styles.button}>Newsletter</a>
      <a className={styles.button}>Buy Set</a>
    </div>
  </div>
)

export default Header
