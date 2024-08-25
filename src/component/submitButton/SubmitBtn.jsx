import React from 'react'
import styled from "./SubmitBtn.module.css"

function SubmitBtn(probs) {
  return (
    <div className={styled.container}>
        <button onClick={probs.change}>{probs.label}</button>
    </div>
  )
}

export default SubmitBtn