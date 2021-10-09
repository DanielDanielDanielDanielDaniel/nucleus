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
		  <div>
			<a className={styles.button} href='https://drive.google.com/file/d/19e00ZUo8vt6c5bD6ePByZI4estDloYFv/view?usp=sharing'>Download Free Version</a>
			<a className={styles.button2} href='https://crmrkt.com/MVBWoK?u=DanielSeiler'>Buy Set – from $75</a>
		  </div>
      	</div>
    </div>
  </div>
)

export default Hero
