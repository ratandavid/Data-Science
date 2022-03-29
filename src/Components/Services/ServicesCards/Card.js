import React ,{useState}from 'react'
import './card.css';
import SlidercardButton from '../../SlidercardButton/SlidercardButton';
import CardsContent from'./cardcontent';
function Card() {
    const [carditems] = useState(CardsContent);
  return (
    <div className="cardContainer container">
        <div className='row'>
            {
                carditems.map((ele)=>{
                    const {id, heading, para, image}=ele
                return(
                    <>
                <div className='col-xl-4 col-md-4  mb-3'>
                <div className='mycard'>
                <div className="cardImage">
                    <img src={image} alt={heading} className="img-fluid"/>
                </div>
                <div className='cardBody'>

                    <div className='cardcontent'>
                        <h4>
                            {heading}
                        </h4>
                        <p>{para}</p>
                        <SlidercardButton name='Read More'></SlidercardButton>
                    </div>
                </div>
                </div>
                
            </div>
                    </>
                )
                })
            }
          
        </div>    
    </div>
  )
}

export default Card