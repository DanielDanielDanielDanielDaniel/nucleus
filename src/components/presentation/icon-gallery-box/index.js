import React from 'react'
import _ from 'lodash'
import styles from './icon-gallery-box.module.css'

const IconLabelBox = ({ src, label, sublabel }) => (
  <div className={styles.box}>
    <div className={styles.iconContainer}>
      <img className={styles.icon} src={src} alt={label}/>
    </div>
    <span className={styles.separator}/>
    <span className={styles.label}>{_.capitalize(label)}</span>
    <span className={styles.sublabel}>{sublabel}</span>
  </div>
)

export default IconLabelBox
