import React,{useState} from 'react';
import Additem from './Additem';
import Cover from '../images/c1.png'
import Add1 from '../images/a1.jpg'
import {useFetch} from '../hooks/useFetch';








function Home(props){
  
    const {data,isPending,error}=useFetch("http://localhost:3000/items");  //endpoint

    return (
      <React.Fragment>

        <div className="centre">
          <img src={Cover} className="img-fluid image" alt="Responsive image" />
        </div>

        <div style={{ marginTop: "25px" }} className="centre">
          <a href="#"><img src={Add1} className="img-fluid p10" alt="Responsive image" /></a>
        </div>

        <div className="home-page">
        <h1 className='fresh'>Fresh Recommendations</h1>
          <div className="add-list">
                

        
              {error && <p className="error">{error}</p>}
              {isPending && <p className="loading">Loading...</p>}
              {data && <Additem items={data} />}
           


          </div>

          <button className="load-more fontb anim">
            Load More
         </button>
        </div>

      </React.Fragment>
    )

    
  
}

export default Home;


