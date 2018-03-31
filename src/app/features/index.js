import React from 'react'
import cn from 'classnames'
import PictureBox from 'components/presentation/picture-box'
// images
import thumb1 from './assets/thumb1.png'
import thumb2 from './assets/thumb2.png'
import thumb3 from './assets/thumb3.png'
import thumb4 from './assets/thumb4.png'
import colorIcon1 from './assets/color-section-1.svg'
import colorIcon2 from './assets/color-section-2.svg'
import colorIcon3 from './assets/color-section-3.svg'
import colorIcon4 from './assets/color-section-4.svg'
import colorIcon5 from './assets/color-section-5.svg'
import colorIcon6 from './assets/color-section-6.svg'
import colorIcon7 from './assets/color-section-7.svg'
// styles
import globalStyles from 'app/app.module.css'
import styles from './features.module.css'

const Features = ()=> (
  <div className={globalStyles.subgrid}>
    <h3 className={globalStyles.sectionTitle}>Powerful Features</h3>
    <p className={globalStyles.bigSectionText}>
      Powerful features that allow you to truly customize through powerful functionality
    </p>
    <div className={styles.gridBreak}/>
    <PictureBox src={thumb1} className={styles.pictureCover}
                label='How to change sketch styles within seconds'>
      <p className={cn(globalStyles.sectionText, styles.withIcon, styles.sketch)}>
        Sketch styles allow you to customize the looks of the iconset to your needs.
      </p>
    </PictureBox>
    <PictureBox src={thumb2} className={styles.pictureCover}
                label='Change thickness and size of the icons to match their surrounding.'>
      <p className={cn(globalStyles.sectionText, styles.withIcon, styles.sketch)}>
        Scale options allow you to change the thickness and size of the icons to match their visual surrounding
      </p>
    </PictureBox>
    <PictureBox src={thumb3} className={styles.pictureCover}
                label='Export easily from sketch to your asset folders'>
      <p className={cn(globalStyles.sectionText, styles.withIcon, styles.sketch)}>
        Export functions make it easy for you to prepare all files for further collaboration, embedding - or as hand over format for the next user or client.
      </p>
    </PictureBox>
    <PictureBox src={thumb4} className={styles.pictureCover}
                label='Iconjars search is perfect for tagged elements. Easier to find than ever.'>
      <p className={cn(globalStyles.sectionText, styles.column2, styles.withIcon, styles.iconjar)}>
        The Iconjar tag search allows you to find icons based on tags through all categories and save loads of time.
      </p>
    </PictureBox>

    <div className={styles.iconStrip}>
      <img src={colorIcon1} alt='color icon 1'/>
      <img src={colorIcon2} alt='color icon 2'/>
      <img src={colorIcon3} alt='color icon 3'/>
      <img src={colorIcon4} alt='color icon 4'/>
      <img src={colorIcon5} alt='color icon 5'/>
      <img src={colorIcon6} alt='color icon 6'/>
      <img src={colorIcon7} alt='color icon 7'/>
    </div>

    <p className={cn(globalStyles.sectionText, globalStyles.sectionSeparator, globalStyles.mobileHidden)}>
      Blablablabla?
    </p>
    
  </div>
)

export default Features
