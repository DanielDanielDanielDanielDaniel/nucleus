import React from 'react'
import styles from './hero.module.css'

const Hero = ()=> (
  <div className={styles.herowrap}>
    <div className={styles.hero}>
   		<div>
	      <h1 className={styles.title}>Nucleus Iconset</h1>
	      <p className={styles.subtitle}>
	        400 icons for those who build the future
	      </p>
      	</div>
    </div>
  </div>
)

export default Hero
