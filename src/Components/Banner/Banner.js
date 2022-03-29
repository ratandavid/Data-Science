import React from 'react'
import './banner.css';
import Button from '../Button/Button';
import Images from'../../Images/1.png';
function Banner() {
  return (
    <div className='bannerfluid containerfluid'>
        <div className='container'>
            <div className='row'>
                <div className='col-xl-6 col-md-6 banner_right-side'>
                    <p>Applying Data Science</p>
                    <h2>And Techniques with Systems</h2>
                    <span>Contented continued any happiness instantly objection
                     yet her allowance. Use correct day new brought tedious. 
                     Kept easy or sons my it done.</span>
                    <Button name='Get Started'></Button>
                </div>
                <div className='col-xl-6 col-md-6 banner_left-side '>
                    <img src={Images} className="img-fluid"/>
                </div>
            </div>
        </div>
    </div>    
  )
}

export default Banner