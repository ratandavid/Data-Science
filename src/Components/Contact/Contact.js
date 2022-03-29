import React,{useState} from 'react'
import './contact.css';
import ContactData from './ContactData';
import Button from'../Button/Button'
function Contact() {
    const [contactitems, Setitem] = useState(ContactData);
  return (
    <div  className='Contactfluid containerfluid' id="contact">
        <div className='container'>
            <div className='row'>
                <div className='col-xl-4 col-md-6'>
                    <div className='contactleftside'>
                        {
                            contactitems.map((ele)=>{
                                const {id, image,heading,para}=ele 
                                return(
                                    <>
                                        <div className="contactcontent row">
                                        <div className='col-xl-4'>
                                            <img src={image} alt={heading} className="img-fluid"/>
                                         </div>
                                        <div className='col-xl-8'>
                                            <h4>{heading}</h4>
                                            <p>{para}</p>
                                        </div>
                                        </div>
                                        

                                    </>
                                )
                            })
                        }
                        
                    </div>
                   
                </div>
                <div className='col-xl-8 col-md-6'>
                    <div className='Contact-formheading pb-4'>
                        <h4>We’d love to hear from you anytime</h4>
                    </div>
                    <div className='contactrightside'>
                    <div className="row">
                        <div className="col-xl-12  pb-5">
                        <input type="text" className="form-control" placeholder="First name" aria-label="First name"/>
                        </div>
                        <div className="col-xl-12 pb-5">
                        <input type="text" className="form-control" placeholder="Last name" aria-label="Last name"/>
                        </div>
                        <div className="col-xl-12">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Tell us about your project</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <Button name='Send Message'></Button>
                    </div>
                    </div>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Contact