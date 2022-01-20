import React from 'react';
import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch';

export const Products = ()=> {

   const {id}=useParams();
   const url = 'http://localhost:3000/items/' + id
   const { error, isPending, data: items} = useFetch(url);

    return (
      <React.Fragment>
       {
         items && (
          <div className="flex container m9 mb10">

          <div className="album">
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img className="d-block w-100" src={items.img} width="900" height="500" alt="First slide" />
                </div>
               
              </div>
             
            </div>

            <div className="flex-col detndes m9">

              <div className="Details p5">
 

              <div className="description">
                  <h4 className="color fontl">Description</h4>
                 <div></div>

              </div>
              <hr/>

                <div className="container">
                  <div className="row">
                    <h3 className="color fontb">{items.desc}</h3>
                  </div>
                  <div className="row">
                       <div></div>
                  </div>
                </div>
              </div>
             
              
              





            </div>
          </div>






          <div className="album" >
            
          <h5 className='product-details'>Product Details</h5>
          <div className="info">
              <div>
                <h5 className='color fontl'>Product Title</h5>
                <hr/>
                <h2 className="color fontb">{items.title}</h2>
                
              </div>
            </div>


            <div className="info">
              <div>
                <h5 className='color fontl'>Product Category</h5>
                <hr/>
                <h2 className="color fontb">{items.category}</h2>
                
              </div>
            </div>
             
            <div className="info">
              <div>
                <h5 className='color fontl'>Price (In PKR)</h5>
                <hr/>
                <h2 className="color fontb">{items.price}</h2>
                
              </div>
            </div>

            <div className="info">
              <div>
                <h5 className='color fontl'>State (Pakistan)</h5>
                <hr/>
                <h2 className="color fontb">{items.location}</h2>
                
              </div>
            </div>



              {/* <div className="info-loc">
                <p className="s12">dummy data</p>
              </div> */}
            

            <div className="info m9">
              <div>
                <p className="color s20 fontl">Seller Description</p>
                <hr/>
                <p>dummy data</p>
                <p className="cG">dummy data dummy data dummy data dummy data</p>

              </div>

              <div className="info-loc">
                <p className="s12">dummy data</p>
              </div>
            </div>


          </div>

        </div>
         )
       }
      </React.Fragment>
    )
  }


export default Products;

