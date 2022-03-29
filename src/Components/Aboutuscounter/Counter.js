import React, { useState, useEffect } from 'react';
import './counter.css';
import Number from'./countercontent'
function Counter() {
    const [counteritem] = useState(Number);
    
    useEffect(() => {
        const counter = document.querySelectorAll('.counter');
        const speed = 200;
        counter.forEach(ele =>{
            const updatecount = () =>{
                const target = ele.getAttribute('data-target');
                const count = +ele.innerText;
                const inc  = target / speed;
                
                if (count<target){
                    ele.innerText = count + inc;
                        setTimeout(updatecount, 10);
                }
                else {
                    ele.innerText = target;
                }
            }
            
            updatecount();
        })
    })
        
    
  return (
    <div className='containerfluid'>
        <div className='container'>
            <div className='row Counterrow'>
                {
                    counteritem.map((ele)=>{
                        const { number, content ,datatarget} = ele;
                        return(
                            <>
                                <div className='col-xl-3 col-md-3 CounterContent'>
                                    <div className="counter" data-target={datatarget}>{number}</div>
                                    <h4>{content}</h4>
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

export default Counter