import React from 'react'
import styled from "./../../component/articlesTextarea/articlesTextarea.module.css"

function ArticlesTextarea(probs) {
  return (
    <div className={styled.container}>
        <label>{probs.label}</label>
        <textarea name={probs.name} onChange={probs.change}></textarea>
    </div>
  )
}

export default ArticlesTextarea