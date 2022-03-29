import React, { useState } from "react";
import SlidercardButton from '../SlidercardButton/SlidercardButton';
import './tabcontent.css';
import Tabs from './Tabinnercontent';
function Tabcontent(props){
    const [items, setItems] = useState(Tabs);
    const filteritems = (carditem)=>{
        let updateItems = Tabs.filter((curele)=>{
            return curele.id === carditem;
        }) ;
        setItems(updateItems);
        
    }
    const [activeitem, setActiveitem] =useState();
    var active = activeitem;
    function Active(idname){
        if(active || active===idname){
            document.getElementById(active).classList.remove("active");
        }
        document.getElementById(idname).classList.add("active");
        active=idname;
        setActiveitem(active);
    }

    return(
        <>
        <div className="container">
            <div className='myTabs'>
                <ul>
                    <li onClick = {() => filteritems(1)}><a id='Research' onClick={() => Active('Research')} className='active'>Research & Solution</a></li>
                    <li onClick = {() => filteritems(2)}><a id='Design' onClick={() => Active('Design')}>Design & Strategy</a></li>
                    <li onClick = {() => filteritems(3)}><a id='Generate' onClick={() => Active('Generate')}>Generate Report</a></li>
                </ul>
            </div>
        </div>
        <div className="container">
            <div className='row'>
                    {
                        items.map((elem)=>{
                            const {id, image, heading, para, card } = elem;
                        
                            return(
                                <>
                                <div className="row tabcontent">
                                    <div className='col-xl-6 col-md-6 tabcontent_right-side'>
                                        <h4>{heading}</h4>
                                        <p>{para}</p>
                                        <SlidercardButton name='Read More'></SlidercardButton>
                                    </div> 
                                    <div className="col-xl-6 col-md-6">
                                        <img src={image} className='img-fluid'/>    
                                    </div> 
                                </div>
                               </>
                            )
                        })
                    }
                       
                                    
            </div>    
        </div>
        </>
    )
}
export default Tabcontent