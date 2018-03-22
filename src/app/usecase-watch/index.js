import React from 'react'
import Parallax from 'scroll-effects/parallax'
import watchMock from './assets/watch-mock.png'
import styles from './usecase-watch.module.css'

const UsecaseWatch = ()=> (
  <div className={styles.container}>
    <Parallax speed={100}>
      <img src={watchMock} className={styles.watchMockup} alt='watch usecase'/>
    </Parallax>
  </div>
)

export default UsecaseWatch
