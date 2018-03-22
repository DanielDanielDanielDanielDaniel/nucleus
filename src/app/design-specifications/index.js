import React from 'react'
import IconLabelBox from 'components/presentation/icon-label-box'
// import FadeIn from 'scroll-effects/fade-in'
// images
import svgLogo from './assets/svg.svg'
import epsLogo from './assets/eps.svg'
import pngLogo from './assets/png.svg'
import aiLogo from './assets/ai.png'
import iconjarLogo from './assets/iconjar.png'
import sketchLogo from './assets/sketch.png'
// styles
import globalStyles from 'app/app.module.css'
import boxStyles from 'components/presentation/icon-label-box/icon-label-box.module.css'
import styles from './design-specifications.module.css'

const IconBox = ({ src }) => (
  <div className={boxStyles.box}>
    <img className={styles.icon} src={src} alt={src}/>
  </div>
)

const DesignSpecifications = ()=> (
  <React.Fragment>
      <h3 className={globalStyles.sectionTitle}>Design specifications</h3>
      <div className={styles.container}>
        <p className={globalStyles.sectionText}>
          Exported in EPS, SVG and 4 sizes of PNG
        </p>
        <IconBox src={svgLogo}/>
        <IconBox src={pngLogo}/>
        <IconBox src={epsLogo}/>
      </div>
      <div className={styles.container}>
        <p className={globalStyles.sectionText}>
          Created for Sketch, Adobe Illustrator and IconJar
        </p>
        <IconLabelBox src={sketchLogo} label='Sketch App'/>
        <IconLabelBox src={aiLogo} label='Adobe Illustrator'/>
        <IconLabelBox src={iconjarLogo} label='Iconjar'/>
      </div>
      <div className={globalStyles.sectionSeparator}/>
  </React.Fragment>
)

export default DesignSpecifications
