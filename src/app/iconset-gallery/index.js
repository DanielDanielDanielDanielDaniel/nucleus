import _ from 'lodash'
import React from 'react'
import IconCategory from 'components/composition/icon-category'
import iconsetData from 'config/iconset.json'
// import styles from './iconset-gallery.module.css'



const renderCategory = (icons, category) => (
  <IconCategory  title={category} icons={icons} key={category}/>
)

const IconsetGallery = () => (
  _.map(iconsetData, renderCategory)
)

export default IconsetGallery
