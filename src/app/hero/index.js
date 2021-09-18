import React from 'react'
import styles from './hero.module.css'

const Hero = ()=> (
  <div className={styles.herowrap}>
    <div className={styles.hero}>
   		<div>
	      <h1 className={styles.title}>Nucleus Iconset</h1>
	      <p className={styles.subtitle}>
	        1000 premium icons – 3 unique styles – duotone
	      </p>
		  <a className={styles.button} href='https://crmrkt.com/MVBWoK?u=DanielSeiler'>Buy Set</a>
      	</div>
    </div>
  </div>
)

export default Hero
