import React from 'react'
import cn from 'classnames'
import styles from './video-box.module.css'

const VideoBox = ({ src, thumbnail, label, className, children }) => (
  <div className={cn(className, styles.container)}>
    <div className={styles.imageBox}>
      <img className={styles.image} src={thumbnail} alt={label}/>
      <video className={styles.video}loop autoPlay playsInline muted
             ref={video => this.video = video}>
        <source src={src} type="video/mp4" />
      </video>
    </div>
    <aside className={styles.label}>{label}</aside>
    <div className={styles.content}>
      {children}
    </div>
  </div>
)

export default VideoBox
