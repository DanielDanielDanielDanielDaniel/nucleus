import React from 'react'
import Parallax from 'scroll-effects/parallax'
import phoneMock from './assets/phone-mock.png'
import styles from './usecase-steak.module.css'

const UsecaseSteak = ()=> (
  <div className={styles.container}>
    <Parallax speed={100}>
      <img src={phoneMock} className={styles.phoneMockup} alt='app usecase'/>
    </Parallax>
  </div>
)

export default UsecaseSteak
