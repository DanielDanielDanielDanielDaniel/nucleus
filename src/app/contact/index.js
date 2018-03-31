import React from 'react'
import cn from 'classnames'
import valuesChart from './assets/values-chart.svg'
import globalStyles from 'app/app.module.css'
import styles from './contact.module.css'

const Contact = ()=> (
  <div className={cn(globalStyles.subgrid, styles.section)}>
    <div className={cn(globalStyles.sectionSeparator, globalStyles.mobileHidden)}/>
    <div className={globalStyles.sectionTitle}>About</div>
    <div className={globalStyles.gridBreak}/>
    <div className={globalStyles.sectionText}>
      <p>
        Nucleus Iconset is a set of stylized symbols – graphical elements that can be used to deliver meaning in a non-linguistic but graphical way.
      </p>

      <p>
        One uses them in combination with alphanumerical elements to specify communication.
      </p>

      <p>
        The icon itself affects consumption of the message which in its intention consists of a feeling to be conveyed and an information to be transferred.
      </p>

      <p>
        Together the consumers feeling and perceived emotion form an experience. Therefor the icons can be seen as experience building components for digital interfaces.
      </p>

      <p>
        The graphical style of the icon makes recipients feel a certain way.
      </p>

      <p>
        As tested on interviewees from all age groups, the dark and light version of nucleus icons seem to be associated with technology, space, science, atoms, high value, precisions, professionalism, decency, rationality, stars.</p>

      <p>
        The first icon of Nucleus Iconset was designed in September 2017.
      </p>

      <p>
        195 professionals have purchased the pro version of Nucleus Icons <a href=''>via UI8</a> which are already in use a wider variety of apps and websites allowing for further testing and improvement.
      </p>

      <p>
        Iconset and website design by <a href=''>Daniel Seiler</a>.<br/>
        Website development. by <a href=''>Elias Alonso</a>.
      </p>

    </div>
    <div className={cn(styles.illustration, globalStyles.mobileHidden)}>
      <img src={valuesChart} alt='values chart'/>
    </div>
  </div>
)

export default Contact
