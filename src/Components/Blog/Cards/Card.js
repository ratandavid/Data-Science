import React, { useState } from 'react';
import './card.css'
import Cardata from './cardata';
import SlidercardButton from '../../SlidercardButton/SlidercardButton';
function Card() {
    const[carditem,Setcarditem]=useState(Cardata)
    
  return (
    <div className='containerfluid'>
        <div className='container px-0'>
            <div className='row'>
                {
                    carditem.map((ele)=>{
                        const {id,image, heading, para,date,year}=ele;
                        return(
                            <>
                            <div className='col-xl-4 col-md-4 mb-3'>
                                <div className='blog card'>
                    <div className='cardimg'>
                        <img src={image} className='img-fluid'/>
                        <div className='datecontent'><p>{date}</p><b>{year}</b></div>
                    </div>
                    <div className='cardbody'>
                        
                        <p>{para}</p>
                        <h3>{heading}</h3>
                        <SlidercardButton name='Read More'></SlidercardButton>
                    </div>

                                </div>
                </div>
                            </>
                        )
                    })
                }
                
            </div>
        </div>
    </div>
  )
}

export default Card