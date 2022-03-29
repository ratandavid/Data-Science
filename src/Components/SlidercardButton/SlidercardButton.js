import React from 'react';
import'./sliderbutton.css';
function SlidercardButton(props) {
  return (
    <div className='sliderButton'>
        <button className="slider-button mb-3">
           {props.name}
        </button>
    </div>
  )
}

export default SlidercardButton