import React from 'react'
import styles from './hero.module.css'

const Hero = ()=> (
  <div className={styles.hero}>
    <div>
      <h1 className={styles.title}>Nucleus Iconset</h1>
      <p className={styles.subtitle}>
        An identity creating tool with 400 premium icons for <br/>
        precision, tech and professionalism
      </p>
    </div>
  </div>
)

export default Hero
