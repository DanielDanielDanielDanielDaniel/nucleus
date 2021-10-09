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
      What makes Nucleus unique is the style, the quality of the crafted icon-illustrations and the timely and carefully researched motives.
      </p>

      <p className={globalStyles.descriptionText}>
      The iconset captures the conceptual meaning of most recent trends to turn them into graphical elements.
      </p>

      <p className={globalStyles.descriptionText}>
      Nucleus empowers you with novel icons in Artifical Intelligence, Augmented and Virtual Reality, Blockchain, Spatial Design, Sustainability and more.
      </p>

    </div>

    <div className={globalStyles.sectionText}>
      <p className={globalStyles.descriptionText}>
      <br/><br/>
      The first icon of Nucleus Iconset was designed in September 2017.
      </p>

      <p className={globalStyles.descriptionText}>
        Get the fitting Nucleus font: GT America by <a href='https://www.grillitype.com/'>GrilliType</a>.
      </p>

      <p className={globalStyles.descriptionText}>
        Download <a href='https://geticonjar.com/'>Iconjar</a> for best icon management.
      </p>

      <p className={globalStyles.descriptionText}>
        Iconset and website design by <a href='https://www.linkedin.com/in/oezden/'>Özden Seiler</a> and <a href='https://aucta.io'>Daniel Seiler</a>.
      </p>

      <p className={globalStyles.descriptionText}>
        Download the <a href='https://drive.google.com/file/d/19e00ZUo8vt6c5bD6ePByZI4estDloYFv/view?usp=sharing'>Free Version</a> of Nucleus Icons.
        <br/><br/>
      </p>

    </div>
    <div className={globalStyles.sectionText}>
      <h4 className={globalStyles.descriptionTitle}>Contact</h4>
      <p className={globalStyles.descriptionText}>
        Specific icon requests, general feedback and questions, inquiries to
        <br/><a href='mailto:daniel@daniel-seiler.com'>daniel@daniel-seiler.com</a>
        <br/><br/>
        Nucleus v1.7 – Last updated Oct 2021
        <br/><br/>
        Copyright © 2017-2021
        <br/><br/>
      </p>

      

      <div className={globalStyles.shareButtons}>
        <a href='https://crmrkt.com/MVBWoK?u=DanielSeiler'>
          <img src={twitterLogo} alt='twitter'/>
        </a>
        <a href='https://crmrkt.com/MVBWoK?u=DanielSeiler'>
          <img src={linkedinLogo} alt='linkedin'/>
        </a>
        <a href='https://crmrkt.com/MVBWoK?u=DanielSeiler'>
          <img src={pinterestLogo} alt='pinterestLogo'/>
        </a>
        <a href='https://crmrkt.com/MVBWoK?u=DanielSeiler'>
          <img src={designerNewsLogo} alt='designerNews'/>
        </a>
        <a href='https://crmrkt.com/MVBWoK?u=DanielSeiler'>
          <img src={productHuntLogo} alt='productHunt'/>
        </a>
      </div>

    </div>
    
  </div>
)

export default Contact
