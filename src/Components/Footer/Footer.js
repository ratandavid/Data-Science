import React from 'react';
import navlogo from '../../Images/logo.png';
import './footer.css';

function Footer() {
  return (
    <div className='containerfluid Footerfluid'>
        <div className='container'>
            <div className='row'>
                <div className='col-xl-4 col-md-4'>
                    <div className='row'>
                        <div className='col-xl-12'>
                            <div className='footlogo'>
                                <img src={navlogo}/>
                            </div>
                            <p>Required honoured trifling eat pleasure man relation. Assurance yet bed was improving furniture man. Distrusts delighted</p>
                        </div>
                    </div>
                </div>
                <div className='col-xl-2 col-md-2'>
                    <h4>UseFull Links</h4>
                    <ul>
                        <li><a>Classic Business</a></li>
                        <li><a>Blog</a></li>
                        <li><a>Project</a></li>
                        <li><a>About Us</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                </div>
                <div className='col-xl-2 col-md-2'>
                    <h4>Services</h4>
                    <ul>
                        <li><a>Marketing & Sales</a></li>
                        <li><a>Manufacturing</a></li>
                        <li><a>Supply Chain</a></li>
                        <li><a>Data Visualization</a></li>
                        <li><a>Big Data</a></li>
                    </ul>
                </div>
                <div className='col-xl-4 col-md-4'>
                    <h4>Contact Info</h4>
                    <ul>
                        <li>Possible offering at contempt mr distance stronger an. Attachment excellence announcing</li>
                        <li>Email: @gmail.com</li>
                        <li>Contact: +91-25-123-4567</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer