import React from 'react'

const VidiPovekjeBtn = (props) => {
  const content = props.content;
  return (
    <button className='custom-button button-default-green' style={{width:"30%"}}>{content}</button>
  )
}

export default VidiPovekjeBtn
