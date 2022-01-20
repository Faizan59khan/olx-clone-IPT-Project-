import React from 'react'
import '../App.css';
import '../Props.css';
import './Additem.css'
import { Link } from 'react-router-dom';



const Additem = ({items}) => {
 
  return (
       
     items.map((item)=>{
       return (
        <div className="add-item" key={item.id}>

       <Link to={`/items/${item.id}`} style={{ textDecoration: 'none' }}>
         
            <img src={item.img} className="item-img" />
            <div className="duration">
                <i class="far fa-clock myclock"></i>
                <span>Few minutes ago</span>
            </div>
            <div className="title-name">
            <p>
            {item.title}
            </p>
            <h3>{item.price}</h3>
            </div>
            <div className="state">
            <i class="fa fa-map-marker" aria-hidden="true"></i>
                <span>{item.location}</span>
                </div>
                <div className="item-category">{item.category}</div>
        {/* <img src={item.img} className="item-img" />
  
        <div className="title s17">{item.title}</div>
        <div className="tagline s15">{item.price}</div>
  
        <div className="ftr flex">
          <div className="location s12">{item.location}</div>
          <div className="stamp"></div>
          </div> */}
  
  
        </Link>
    </div>
      
       )
     })
    
  )
}


export default Additem;






 