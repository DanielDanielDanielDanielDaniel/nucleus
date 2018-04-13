import React from 'react'
import cn from 'classnames'
import IconLabelBox from 'components/presentation/icon-box'

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
// styles
import globalStyles from 'app/app.module.css'
import styles from './features.module.css'

const Features = ()=> (
  <div className={globalStyles.subgrid}>
    <div className={globalStyles.btmMargin}>
      <div className={globalStyles.centeredBox}>
        <div>
          <h4>Communicate Meaning</h4>
          <p>
            Your advanced progress needs the right terminology. Many new tech and business world buzzwords have been turned into icons for the first time and added to the set.
          </p>
        </div>
      </div>
    </div>
    <div className={styles.iconContainer}>
      <IconLabelBox src={term1} label='Partnership Proposal'/>
      <IconLabelBox src={term2} label='Dashboard App'/>
      <IconLabelBox src={term3} label='Work Experience'/>
      <IconLabelBox src={term4} label='API Docs'/>
      <IconLabelBox src={term5} label='Growth'/>
      <IconLabelBox src={term6} label='Statistical Analysis'/>
      <IconLabelBox src={term7} label='Native Advertising'/>
    </div>
    
  </div>
)

export default Features
