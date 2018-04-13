import React from 'react'
import cn from 'classnames'
import IconLabelBox from 'components/presentation/icon-label-box'
import IconBox from 'components/presentation/icon-box'
import PictureBox from 'components/presentation/picture-box'
// images
import androidPhoneIcon from './assets/androidphone.svg'
import androidWatchIcon from './assets/androidwatch.svg'
import desktopMonitorIcon from './assets/desktopmonitor.svg'
import iphoneIcon from './assets/iphone.svg'
import iwatchIcon from './assets/iwatch.svg'
import notebookIcon from './assets/notebook.svg'
import tabletIcon from './assets/tablet.svg'
import iwatchMeasurements from './assets/designspecs-1.png'
import parabolicProcess from './assets/designspecs-2.png'
import headIcon from './assets/head.svg'
import slideIcon from './assets/slide.svg'
import menuIcon from './assets/menu.svg'
import penIcon from './assets/pen.svg'
import thumb3 from './assets/thumb3.png'
import thumb4 from './assets/thumb4.png'
// styles
import globalStyles from 'app/app.module.css'
import styles from './how-can-be-used.module.css'

const HowCanBeUsed = ()=> (
  <div className={globalStyles.subgrid}>
    <h3 className={globalStyles.sectionTitle}>How Nucleuscan be used</h3>
    <p className={globalStyles.sectionText}>
      All icons are exclusively designed for digital media, especially interfaces on computers, notebooks, tablets, mobile phones, and smart watches.
    </p>
    <div className={styles.iconContainer}>
      <IconBox src={iwatchIcon} />
      <IconBox src={androidWatchIcon} />
      <IconBox src={androidPhoneIcon} />
      <IconBox src={iphoneIcon} />
      <IconBox src={tabletIcon} />
      <IconBox src={notebookIcon} />
      <IconBox src={desktopMonitorIcon} />
    </div>
    <PictureBox src={iwatchMeasurements} label='Concentric Grid Visualization – V2 Looped MP4'>
      <p className={globalStyles.sectionText}>
        Icons are founded on a concentric grid, which improves its consistency throughout the set in all arrangements of icons.
      </p>
    </PictureBox>
    <PictureBox src={parabolicProcess} label='Before (foto) <> After (icon)'>
      <p className={globalStyles.sectionText}>
        Icons that resemble objects rely on industry research and provide most advanced sources from which the abstractions are derived
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
    <div className={cn(globalStyles.mobileHidden, styles.iconContainer)} style={{marginTop: '10px'}}>
      <IconLabelBox src={penIcon} label='Partnership Proposal'/>
      <IconLabelBox src={slideIcon} label='Dashboard App'/>
      <IconLabelBox src={headIcon} label='Work Experience'/>
      <IconLabelBox src={menuIcon} label='API Docs'/>
    </div>
    <p className={cn(globalStyles.sectionText, globalStyles.mobileHidden)}>
      Some highly important and much needed terminology from the digital industry has been granted a first time visualization
    </p>
    <div className={globalStyles.sectionSeparator}/>
  </div>
)

export default HowCanBeUsed
