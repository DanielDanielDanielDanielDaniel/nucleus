import React from 'react'
import Parallax from 'scroll-effects/parallax'
import phoneMock from './assets/phone-mock@2x.png'
import styles from './usecase-steak.module.css'

const UsecaseSteak = ()=> (
  <div className={styles.container}>
    <Parallax speed={-80}>
      <div className={styles.phoneMockup}>
        <img src={phoneMock} alt='app usecase'/>
      </div>
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
