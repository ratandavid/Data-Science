import React,{useState} from 'react'
import './process.css';
import ProcessData from'../Process/processdata';
function Process() {
    const[processitem,Setprocessitem]=useState(ProcessData)

  return (
    <div className='processFluid containerfluid' id="process">
        <div className='container'>
            <div className='row'>
                <div className='col-xl-12'>
                    <h4 className='weprocess'>We process</h4>
                    <p className='discriptionprocess'>How We Work</p>
                </div>
                {
                    processitem.map((ele)=>{
                        const {id, image, heading, para}=ele
                    return(
                        <>
                    <div className='col-xl-4 col-md-4'>
                    <div className='processCard'>
                        <div className='cardImage'>
                            <img src={image} className="Img-fluid"/>
                        </div>
                        <div className='cardBody'>
                            <div className='cardcontent'>
                                <h4>{heading}</h4>
                                <p>{para}</p>
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
    </div>
  )
}

export default Process