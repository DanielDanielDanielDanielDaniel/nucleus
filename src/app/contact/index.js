import React from 'react'
import cn from 'classnames'
import valuesChart from './assets/values-chart.svg'
import globalStyles from 'app/app.module.css'
import styles from './contact.module.css'

import twitterLogo from 'app/site-menu/assets/twitter.svg'
import linkedinLogo from 'app/site-menu/assets/linkedin.svg'
import pinterestLogo from 'app/site-menu/assets/pinterest.svg'
import designerNewsLogo from 'app/site-menu/assets/designer-news.svg'
import productHuntLogo from 'app/site-menu/assets/product-hunt.svg'


const Contact = ()=> (
  <div className={cn(globalStyles.subgrid, styles.section)}>
    <div className={globalStyles.mobileHidden}/>
    
    <div className={globalStyles.gridBreak}/>
    <div className={globalStyles.sectionText}>
      <h4 className={globalStyles.descriptionTitle}>About</h4>
      <p className={globalStyles.descriptionText}>
        Nucleus Iconset is a set of stylized symbols – graphical elements that can be used to deliver meaning in a non-linguistic but graphical way.
      </p>

      <p className={globalStyles.descriptionText}>
        One uses them in combination with alphanumerical elements to specify communication.
      </p>

      <p className={globalStyles.descriptionText}>
        The icon itself affects consumption of the message which in its intention consists of a feeling to be conveyed and an information to be transferred.
      </p>

      <p className={globalStyles.descriptionText}>
        Together the consumers feeling and perceived emotion form an experience. Therefor the icons can be seen as experience building components for digital interfaces.
      </p>

    </div>

    <div className={globalStyles.sectionText}>
      <p className={globalStyles.descriptionText}>
      <br/><br/>
      The graphical style of the icon makes recipients feel a certain way.
      </p>

      <p className={globalStyles.descriptionText}>
        As tested on interviewees from a variety of age groups, 
        the dark and light version of nucleus icons seem to be associated with technology, space, science, atoms, high value, precisions, professionalism, decency, rationality, stars.
      </p>

      <p className={globalStyles.descriptionText}>
        The first icon of Nucleus Iconset was designed in September 2017.
      </p>

      <p className={globalStyles.descriptionText}>
        Iconset and website design by <a href='http://daniel-seiler.com'>Daniel Seiler</a>.<br/>
        Website development. by <a href='https://redradix.com/'>Elias Alonso</a>.
      </p>
    </div>
    <div className={globalStyles.sectionText}>
      <h4 className={globalStyles.descriptionTitle}>Contact</h4>
      <p className={globalStyles.descriptionText}>
        Specific icon requests, general feedback and questions, inquiries to
        <br/><a href='mailto:daniel@daniel-seiler.com'>daniel@daniel-seiler.com</a>
        <br/><br/>
        Copyright © 2018
        <br/><br/>
      </p>

      <div className={globalStyles.shareButtons}>
        <a href='https://ui8.net/products/nucleus-icon-set-v3'>
          <img src={twitterLogo} alt='twitter'/>
        </a>
        <a href='https://ui8.net/products/nucleus-icon-set-v3'>
          <img src={linkedinLogo} alt='linkedin'/>
        </a>
        <a href='https://ui8.net/products/nucleus-icon-set-v3'>
          <img src={pinterestLogo} alt='pinterestLogo'/>
        </a>
        <a href='https://ui8.net/products/nucleus-icon-set-v3'>
          <img src={designerNewsLogo} alt='designerNews'/>
        </a>
        <a href='https://ui8.net/products/nucleus-icon-set-v3'>
          <img src={productHuntLogo} alt='productHunt'/>
        </a>
      </div>

    </div>
    
  </div>
)

export default Contact
