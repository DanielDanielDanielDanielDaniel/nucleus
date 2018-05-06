import React from 'react'
import Parallax from 'scroll-effects/parallax'
import VideoBox from 'components/presentation/video-box'
import styles from './usecase-watch.module.css'
// images
import watchMock from './assets/watch-mock.png'
import rocket from './assets/rocket.png'
// videos
import demoVideo from './assets/demo.mp4'


const UsecaseWatch = ()=> (
<div className={styles.container}>
	<Parallax speed={-200}>
		<div className={styles.rocket}>
		  <img src={rocket} alt=''/>
		</div>
	</Parallax>

  <Parallax speed={-20}>
    <div className={styles.description}>
    	<h4>Your secret weapon</h4>
    	<p>Build your own unique visual aesthetic and skip huge efforts of designing everything yourself by using the iconset as a key component for your brand.
</p>
    </div>
  </Parallax>

  <Parallax speed={-80}>
    <VideoBox thumbnail={watchMock}
              className={styles.videoBox}
              src={demoVideo}>
    </VideoBox>
  </Parallax>

</div>
)


export default UsecaseWatch
