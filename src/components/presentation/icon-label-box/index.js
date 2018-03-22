import React from 'react'
import styles from './icon-label-box.module.css'

const IconLabelBox = ({ src, label }) => (
  <div className={styles.box}>
    <div className={styles.iconContainer}>
      <img className={styles.icon} src={src} alt={label}/>
    </div>
    <span className={styles.separator}/>
    <span className={styles.label}>{label}</span>
  </div>
)

export default IconLabelBox
