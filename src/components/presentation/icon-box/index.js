import React from 'react'
import cn from 'classnames'
import styles from './icon-box.module.css'

const IconBox = ({ src, label, style }) => (
  <div className={cn(styles.boxcontainer)} style={style}>
  <div className={cn(styles.box, 'icon-box')} style={style}>
    <div className={styles.iconContainer}>
      <pre>{JSON.stringify()}</pre>
      <img className={styles.icon} src={src} alt={label}/>
    </div>  	
  </div>
   	<span className={styles.label}>{label}</span>
  </div>
)

export default IconBox
