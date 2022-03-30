import React from 'react'
import Buttonimg from '../../Images/up-side-arrow.png';
import './topup.css'; 
function Topup() {
  return (
    <div className='topup'>
        <a href='#Banner'> <img src={Buttonimg} alt='topup'  className='img-fluid'/> </a>
    </div>
  )
}

export default Topup