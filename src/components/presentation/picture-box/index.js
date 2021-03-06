import React from 'react'
import cn from 'classnames'
import styles from './picture-box.module.css'

const PictureBox = ({ src, label, className, children }) => (
  <div className={cn(className, styles.container)}>
    <div className={styles.imageBox}>
      <img className={styles.image} src={src} alt={label}/>
    </div>
    <aside className={styles.label}>{label}</aside>
    <div className={styles.content}>
      {children}
    </div>
  </div>
)

export default PictureBox
