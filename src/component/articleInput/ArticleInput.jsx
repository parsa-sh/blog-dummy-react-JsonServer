import React from 'react'
import styled from "./ArticleInput.module.css"
function ArticleInput(probs) {
  return (
    <div className={styled.container}>
        <label>{probs.label}</label>
        <input name={probs.name} type="text"  onChange={probs.change}/>
    </div>
  )
}

export default ArticleInput