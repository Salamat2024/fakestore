import React from 'react'

const Detail = ({setNum}) => {
    let a = 10
 
  return (
    <div onClick={() => setNum(a)}>Detail</div>
  )
}

export default Detail