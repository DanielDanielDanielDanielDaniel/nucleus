import React from 'react'
import Parallax from 'scroll-effects/parallax'
<<<<<<< HEAD
import phoneMock from './assets/galaxy@2x.png'
=======
import VideoBox from 'components/presentation/video-box'
>>>>>>> 4fea2c0b6021ed093ea0d080ae78a03db560a67f
import styles from './usecase-steak.module.css'
// images
import phoneMock from './assets/galaxy_transparent@2x.png'
// videos
import demoVideo from './assets/demo.mp4'


const UsecaseSteak = ()=> (
  <div className={styles.container}>
    <Parallax speed={-80}>
      <VideoBox thumbnail={phoneMock}
                className={styles.phoneMockup}
                src={demoVideo}>
      </VideoBox>
    </Parallax>
    <Parallax speed={30}>
      <div className={styles.description}>
      	<h4>Create Smarter</h4>
      	<p>Nucleus Features a toolbox of icons for anyone to use. Pick your favorite icons from the set and upgrade your project to tech professional level.
  </p>
      
      </div>
    </Parallax>
  </div>
)

export default UsecaseSteak
