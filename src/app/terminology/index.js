import React from 'react'
import cn from 'classnames'
import IconLabelBox from 'components/presentation/icon-box'
import PictureBox from 'components/presentation/picture-box-trio'

// images
import thumb1 from './assets/thumb1.png'
import thumb2 from './assets/thumb2.png'

import term1 from './assets/term1.svg'
import term2 from './assets/term2.svg'
import term3 from './assets/term3.svg'
import term4 from './assets/term4.svg'
import term5 from './assets/term5.svg'
import term6 from './assets/term6.svg'
import term7 from './assets/term7.svg'

import styleLight from './assets/style_light.png'
import styleDark from './assets/style_dark.png'
import styleBinary from './assets/style_binary.png'

// styles
import globalStyles from 'app/app.module.css'
import styles from './features.module.css'

const Features = ()=> (
  <div className={globalStyles.subgrid}>
    <div className={globalStyles.btmMarginTight}>
      <div className={globalStyles.centeredBox}>
        <div>
          <h4>Styles</h4>
          <p>
          All of the 1000 icons come in these 3 styles for fast customization.
          </p>
        </div>
      </div>
    </div>
    <PictureBox src={styleLight}>
    </PictureBox>
    <PictureBox src={styleDark}>
    </PictureBox>
    <PictureBox src={styleBinary}>
    </PictureBox>
    <div className={globalStyles.btmMarginTight}></div>
  </div>
)

export default Features
