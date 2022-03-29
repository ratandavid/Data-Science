import React from 'react'
import './button.css'
function Button(prop) {
  return (
    <div className='button'>
    <button className='getStarted'>
        {prop.name}
    </button>

 </div>
  )
}

export default Button