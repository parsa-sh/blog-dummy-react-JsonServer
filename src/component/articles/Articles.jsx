import React from 'react'
import styled from "./Articles.module.css"
import { Link } from 'react-router-dom'

const Articles = (probs) => {
  return (
    <div className={styled.shape}>
      <img src={probs.data.imageUrl}/>
      <p>{probs.data.title}</p>
      <p>زمان خواندن {probs.data.readingtime} دقیقه</p>
      <p><Link to={probs.link}>ادامه مطلب</Link></p>
    </div>
  )
}

export default Articles