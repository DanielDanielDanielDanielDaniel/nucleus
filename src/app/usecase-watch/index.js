import React from 'react'
import Parallax from 'scroll-effects/parallax'
import watchMock from './assets/watch-mock.png'
import rocket from './assets/rocket.png'
import styles from './usecase-watch.module.css'



const UsecaseWatch = ()=> (
<div className={styles.container}>
	<Parallax speed={-200}>
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
    	<p>Build your own unique visual aesthetic and skip huge efforts of designing everything yourself by using the iconset as a key component for your brand.
</p>
    </div>
  </Parallax>
</div>
)


export default UsecaseWatch
