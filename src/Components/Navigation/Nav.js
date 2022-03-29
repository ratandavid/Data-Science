import React from 'react';
import './nav.css';
import navlogo from '../../Images/logo.png'
function Nav() {
    

  function Sidenav(){
    document.getElementById('sidenav').style.right='0px';
  }
  function Hidenav(){
    document.getElementById('sidenav').style.right='-100%';
  }  
  return (
    

<>
<div className='nav containerfluid'>
  <div className="navbarcontainer container">
      <div className='row mynav'>
          <div className="col-xl-2 col-md-2 col-6 navlogo">
            <img src={navlogo} className='img-fluid'/>
          </div>
          <div className="col-xl-8 col-md-8 desktopmenu">
              <ul>
                <li className="nav-item">
                  <a className="nav-link" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#features">Features</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">About</a>
                </li>    
                <li className="nav-item">
                  <a className="nav-link" href="#services">Services</a>
                </li>    
                <li className="nav-item">
                  <a className="nav-link" href="#process">Process</a>
                </li>    
                <li className="nav-item">
                  <a className="nav-link" href="#blog">Blog</a>
                </li>    
                <li className="nav-item">
                  <a className="nav-link" href="#contact">Contact</a>
                </li>    
              </ul>
          </div>
          <div className='col-xl-2 col-6 mobilemenu'>
            <div className='Button' onClick={Sidenav}>
              <i className="fa fa-bars"></i>

            </div>
            <div className='mobilemenucontent' id="sidenav">
            <div><button className='closenav' onClick={Hidenav}>X</button></div>

            <ul>
                <li className="nav-item">
                  <a className="nav-link" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#features">Features</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">About</a>
                </li>    
                <li className="nav-item">
                  <a className="nav-link" href="#services">Services</a>
                </li>    
                <li className="nav-item">
                  <a className="nav-link" href="#process">Process</a>
                </li>    
                <li className="nav-item">
                  <a className="nav-link" href="#blog">Blog</a>
                </li>    
                <li className="nav-item">
                  <a className="nav-link" href="#contact">Contact</a>
                </li>    
              </ul>
            </div>
          </div>
      </div>
  </div>
</div>
   
</>
  )
}

export default Nav