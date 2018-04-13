import React from 'react'
import Parallax from 'scroll-effects/parallax'
import watchMock from './assets/watch-mock.png'
import rocket from './assets/rocket.png'
import styles from './usecase-watch.module.css'



const UsecaseWatch = ()=> (
<div className={styles.container}>
	<Parallax speed={-150}>
		<div className={styles.rocket}>
		  <img src={rocket} alt=''/>
		</div>
	</Parallax>
  <Parallax speed={-80}>
    <div className={styles.watchMockup}>
      <img src={watchMock} alt='watch usecase'/>
    </div>
  </Parallax>
  <Parallax speed={-20}>
    <div className={styles.description}>
    	<h4>Your secret weapon</h4>
    	<p>The set consists of 100s of hours intense design work, a passion project and accessible to you in order to add flavour to the world.
Sounds a bit shitty
</p>
    </div>
  </Parallax>
</div>
)


export default UsecaseWatch
