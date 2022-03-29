import React from 'react';
import './aboutus.css';
import Tabcontent from '../TabContent/Tabcontent';
import Counter from'../Aboutuscounter/Counter';
function Aboutus() {
  return (
    <div className='AboutusFluid containerfluid' id="about">
        <div className='container'>
            <div className='row'>
                <div className='col-xl-12'>
                    <h4>ABOUT US</h4>
                    <h2>We provide big data analytics Techniques & realtime data Solutions</h2>
                    <p>Whole front do of plate heard oh ought. His defective nor convinced residence own. 
                        Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. 
                        Friendly bachelor entrance to on by. Extremity as if breakfast agreement. Off now mistress provided out horrible opinions. 
                        Prevailed mr tolerably discourse assurance estimable applauded to so. Him everything 
                        melancholy uncommonly but solicitude inhabiting projection.</p>
                </div>
            </div>
        </div>
        
        <Tabcontent></Tabcontent>
        <Counter></Counter>

    </div>
  )
}

export default Aboutus