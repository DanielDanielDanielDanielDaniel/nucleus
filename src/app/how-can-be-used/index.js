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
import devices from './assets/devices.svg'

// styles
import globalStyles from 'app/app.module.css'
import styles from './how-can-be-used.module.css'

const HowCanBeUsed = ()=> (
  <div className={globalStyles.subgrid}>
    <div className={globalStyles.btmMargin}>
      <div className={styles.devicesimg}>
        <img src={devices} alt='devices'/>
      </div>
      
      <div className={globalStyles.centeredBox}>
        <div>
          <h4>How Nucleus can be used</h4>
          <p>
            All icons are exclusively designed for digital media, especially interfaces on computers, notebooks, tablets, mobile phones, and smart watches.
          </p>
        </div>
      </div>
    </div>
    <PictureBox src={iwatchMeasurements} label='Icons are founded on a concentric grid, which improves its consistency throughout the set in all arrangements of icons.'>
    </PictureBox>
    <PictureBox src={parabolicProcess} label='The Iconjar tag search allows you to find icons based on tags through all categories and save loads of time.'>
    </PictureBox>
    <PictureBox src={thumb3} className={styles.pictureCover}
                label='Export functions make it easy for you to prepare all files for further collaboration, embedding - or as hand over format for the next user or client.'>
    </PictureBox>
    <PictureBox src={thumb4} className={styles.pictureCover}
                label='The Iconjar tag search allows you to find icons based on tags through all categories and save loads of time.'>
    </PictureBox>
  </div>
)

export default HowCanBeUsed
