import React from 'react'
import { compact } from 'lodash'
import cn from 'classnames'
import styles from './video-box.module.css'

const VideoBox = (props) => {
  const { src, label, className, children, style } = props
  const { thumbnail, thumbnailx2, thumbnailx3 } = props
  const thumbs = compact([thumbnailx2, thumbnailx3])
  const srcset = thumbs.map((thumb, i) => `${thumb} ${i + 1}x`).join(',')
  return (
    <div className={cn(className, styles.container)} style={style}>
      <div className={cn('image-box', styles.imageBox)}>
        <img className={cn(styles.image, 'image')}
             srcSet={srcset}
             src={thumbnail} alt={label}/>
        <div className='video-crop'>
          <video className={cn(styles.video, 'video')}
                 loop autoPlay playsInline muted
                 ref={video => this.video = video}>
            <source src={src} type="video/mp4" />
          </video>
        </div>
      </div>
      {label && <aside className={styles.label}>{label}</aside>}
      {children && <div className={styles.content}>
          {children}
      </div>}
    </div>
  )
}
      

export default VideoBox
