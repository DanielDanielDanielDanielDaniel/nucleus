import React from 'react'
import Parallax from 'scroll-effects/parallax'
import phoneMock from './assets/phone-mock.png'
import styles from './usecase-steak.module.css'

const UsecaseSteak = ()=> (
  <div className={styles.container}>
    <Parallax speed={200}>
      <div className={styles.phoneMockup}>
        <img src={phoneMock} alt='app usecase'/>
      </div>
    </Parallax>
  </div>
)

export default UsecaseSteak
