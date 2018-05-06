import React from 'react'
import cn from 'classnames'
import VideoBox from 'components/presentation/video-box'
// images
import thumb1 from './assets/thumb1.png'
import thumb2 from './assets/thumb2.png'
// videos
import video1 from './assets/video1.mp4'
import video2 from './assets/video2.mp4'

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
    <div className={globalStyles.btmMargin}>
    
      <div className={globalStyles.centeredBox}>
        <div>
          <h4>Discover the power of customization</h4>
          <p>
            With total control through the sketch file you can further customize to any style you want and apply to all 400 icons within seconds.
          </p>
        </div>
      </div>
    </div>
    
    <VideoBox thumbnail={thumb1} className={styles.pictureCover}
              src={video1}
              label='Sketch styles allow you to customize the looks of the iconset to your needs.'>
    </VideoBox>
    <VideoBox thumbnail={thumb2} className={styles.pictureCover}
              src={video2}
              label='Scale options allow you to change the thickness and size of the icons to match their visual surrounding'>
    </VideoBox>
    
  </div>
)

export default Features


// <div className={styles.iconStrip}>
//   <img src={colorIcon1} alt='color icon 1'/>
//   <img src={colorIcon2} alt='color icon 2'/>
//   <img src={colorIcon3} alt='color icon 3'/>
//   <img src={colorIcon4} alt='color icon 4'/>
//   <img src={colorIcon5} alt='color icon 5'/>
//   <img src={colorIcon6} alt='color icon 6'/>
//   <img src={colorIcon7} alt='color icon 7'/>
// </div>
