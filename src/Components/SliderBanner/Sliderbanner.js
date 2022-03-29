import React from 'react';
import Images from '../../Images/2.png';
import './sliderbanner.css';
import SliderImg1 from '../../Images/datascience-person.png';
import BitCoin from'../../Images/bitcoin.png';
import Data from'../../Images/data-analysis.png';
import SlidercardButton from '../SlidercardButton/SlidercardButton';
function Sliderbanner() {
  return (
    <div className='containerfluid sliderBanner' id="features">
        <div className='container'>
            <div className='row'>
                <div className='col-xl-6 col-md-6 sliderBanner_left-side animate__animated animate__backInLeft'>
                    <img src={Images} className="img-fluid"/>
                </div>
                <div className='col-xl-6 col-md-6 sliderBanner_right-side'>
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                     <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={SliderImg1} className="img-fluid" alt="..."/>
                            <div className="carousel-caption ">
                                <h5>Traget Audience</h5>
                                <p>Especially of dissimilar up attachment themselves by interested boisterous. 
                                Linen mrs seems men table. Jennings dashwood to quitting marriage bachelor in. 
                                On as conviction in of appearance apartments boisterous.</p>
                                <SlidercardButton name='Get Started'></SlidercardButton>
                            </div>
                        </div>
                    <div className="carousel-item">
                    <img src={BitCoin} className="img-fluid" alt="..."/>
                            <div className="carousel-caption ">
                                <h5>Analysis competitors</h5>
                                <p>Especially of dissimilar up attachment themselves by interested boisterous. 
                                Linen mrs seems men table. Jennings dashwood to quitting marriage bachelor in. 
                                On as conviction in of appearance apartments boisterous.</p>
                                <SlidercardButton name='Get Started'></SlidercardButton>
                            </div>
                    </div>
                    <div className="carousel-item">
                    <img src={Data} className="img-fluid" alt="..."/>
                            <div className="carousel-caption ">
                                <h5>Analysis big Data</h5>
                                <p>Especially of dissimilar up attachment themselves by interested boisterous. 
                                Linen mrs seems men table. Jennings dashwood to quitting marriage bachelor in. 
                                On as conviction in of appearance apartments boisterous.</p>
                                <SlidercardButton name='Get Started'></SlidercardButton>
                            </div>
                    </div>
                </div>
</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sliderbanner