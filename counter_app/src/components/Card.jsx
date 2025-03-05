import React from 'react'
import { useState } from 'react'

function Card() {
  const [bgColor,setBgColor] = useState('white');

  function toggleHandler(){
    setBgColor('red')
  }

  return (
    <>

      <button className="text-center px-6 py-3 outline outline-2 outline-bg-red-500 bg-red-200"  onClick={toggleHandler}>Dark Mode</button>
      
    </>
  )
}

export default Card
