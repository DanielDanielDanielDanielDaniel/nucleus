import React from 'react'
// import IconGalleryBox from 'components/presentation/icon-gallery-box'
import IconBox from 'components/presentation/icon-box'
import VisibilityOpacity from 'scroll-effects/visibility-opacity'
import styles from './icon-category.module.css'

const path = filename => `${process.env.PUBLIC_URL}/icons/${filename}`

const IconCategory = ({ title, icons}) => (
  <div className={styles.container}>
    <h4 className={styles.title}>{title}</h4>
    <div className={styles.iconGrid}>
      {icons.map(icon => (
        <VisibilityOpacity key={icon.filename} base={0.8} variance={1} easing='easeInQuad'>
          <IconBox src={path(icon.filename)}/>
        </VisibilityOpacity>
      ))}
    </div>
  </div>
)

export default IconCategory


// const IconCategory = ({ title, icons, sublabel = '5.3° / 6.2°' }) => (

// <IconBox src={path(icon.filename)} label={icon.name}/>
