import React from 'react'
import IconGalleryBox from 'components/presentation/icon-gallery-box'
import VisibilityOpacity from 'scroll-effects/visibility-opacity'
import styles from './icon-category.module.css'

const path = filename => `/icons/${filename}`

const IconCategory = ({ title, icons, sublabel = '5.3° / 6.2°' }) => (
  <VisibilityOpacity base={0.1} variance={0.9} easing='easeInCubic'>
    <div className={styles.container}>
      <h4 className={styles.title}>{title}</h4>
      <div className={styles.iconGrid}>
        {icons.map(icon => <IconGalleryBox key={icon.filename} src={path(icon.filename)} label={icon.name} sublabel={sublabel}/>)}
      </div>
    </div>
  </VisibilityOpacity>
)

export default IconCategory
