import React from 'react'
import Parallax from 'scroll-effects/parallax'
import VideoBox from 'components/presentation/video-box'
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
