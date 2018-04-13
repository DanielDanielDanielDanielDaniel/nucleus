import React from 'react'
import IconLabelBox from 'components/presentation/icon-label-box'

// import FadeIn from 'scroll-effects/fade-in'
// images
import svgLogo from './assets/designspecs.svg'
import organisms from './assets/organisms.png'
// styles
import globalStyles from 'app/app.module.css'
import boxStyles from 'components/presentation/icon-label-box/icon-label-box.module.css'
import styles from './design-specifications.module.css'
import Parallax from 'scroll-effects/parallax'



const IconBox = ({ src }) => (
  <div className={boxStyles.box}>
    <img className={styles.icon} src={src} alt={src}/>
  </div>
)

const DesignSpecifications = ()=> (
  <div className={globalStyles.subgrid}>
      <div className={globalStyles.btmMargin}>
        <div className={styles.devicesimg}>
          <img src={svgLogo} alt='devices'/>
        </div>
        <div className={globalStyles.centeredBox}>
          <div>
            <h4>Design specifications</h4>
            <p>
              Nucleus is a Sketch first design and 100% optimized for. It also features Adobe Illustrator and IconJar searchability.
              For export and fastest integration all icons are readily available for SVG, PNG and EPS.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.hitler}>
      </div>
      <Parallax speed={-200}>
        <div className={styles.organisms}>
          <img src={organisms} alt=''/>
        </div>
      </Parallax>
  </div>
)

export default DesignSpecifications
