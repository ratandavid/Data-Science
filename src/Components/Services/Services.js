import React from 'react';
import './services.css';
import Button from '../Button/Button';
import ServicesCards from'./ServicesCards/Card';
function Services() {
  return (
    <div className='Servicesfluid containerfluid' id="services">
        <div className='container'>
            <div className="row">
                <div className='col-xl-6 col-md-6'>
                    <h2>We offer a wide range of services and provide realtime data Solutions</h2>
                </div>
                <div className='col-xl-6 col-md-6'>
                    <p>Everything melancholy uncommonly but solicitude inhabiting projection off. Connection stimulated estimating excellence an to impression.</p>
                    <Button name='View All'></Button>
                </div>
            </div>
        </div>
        
        <ServicesCards></ServicesCards>
        
    </div>
  )
}

export default Services