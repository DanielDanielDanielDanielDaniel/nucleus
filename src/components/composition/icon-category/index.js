import React from 'react'
import IconGalleryBox from 'components/presentation/icon-gallery-box'
import styles from './icon-category.module.css'

const path = filename => `/icons/${filename}`

const IconCategory = ({ title, icons, sublabel = '5.3° / 6.2°' }) => (
  <div className={styles.container}>
    <h4 className={styles.title}>{title}</h4>
    <div className={styles.iconGrid}>
      {icons.map(icon => <IconGalleryBox src={path(icon.filename)} label={icon.name} sublabel={sublabel}/>)}
    </div>
  </div>
)

export default IconCategory
