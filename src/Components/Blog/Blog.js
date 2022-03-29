import React from 'react'
import './blog.css';
import Button from '../Button/Button';
import Card from'../Blog/Cards/Card';
function Blog() {
  return (
    <div className='BlogFluid containerfluid' id='blog'>
        <div className='container'>
            <div className='row'>
                <div className='col-xl-6 col-md-6'>
                    <h2>Stay Update with Anada from latest & popular News</h2>
                </div>
                <div className='col-xl-6 col-md-6'>
                    <p>Everything melancholy uncommonly but solicitude inhabiting projection off. Connection stimulated estimating excellence an to impression.</p>
                     <Button name='View All' ></Button>
                </div>
                <Card></Card>
            </div>
        </div>
    </div>
  )
}

export default Blog