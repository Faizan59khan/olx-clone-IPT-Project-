import { useState, useRef, useEffect } from 'react'
import  {useFetch}  from '../hooks/useFetch'
import { useNavigate } from 'react-router-dom'

const Sell = () => {

    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState(0)
    const [img, setImg] = useState('')
    const [location, setLocation] = useState('')
    const [desc, setDesc] = useState('')

    const fileInputRef = useRef();

    const { postData, data } = useFetch('http://localhost:3000/items', 'POST')
    const history = useNavigate()
    
    const handleSubmit = (e) => {
      e.preventDefault()
      postData({ title, category,price,img,location,desc })
    }
  
    const uploadImage = (e) => {
      const { files } = e.target
      if (files.length > 0) {
          console.log(files[0])
          const url = URL.createObjectURL(files[0])
          console.log(url);
          setImg(url)
      } else {
          setImg(null)
      }
  }
  const triggerUpload = () => {
    fileInputRef.current.click();    //works on mouse click
}
  
    // redirect the user when we get data response
    useEffect(() => {
      if (data) {
        history('/')
      }
    }, [data, history])

    return (
        <div className='post-ad-form'>
            <h1 className='sell-heading'>Post Your Ad</h1>
            <form id='form-details' onSubmit={handleSubmit}>
                <h3>INCLUDE SOME DETAILS</h3>
                <label>
                    <p>Ad title</p>
                    <input type='text' 
                     onChange={(e) => setTitle(e.target.value)}
                     value={title}
                     required
                    />
                    <h5>Mention the key features of your item (e.g. brand, model, age, type)</h5>
                </label>
               
                <label>
                    <p>Category</p>
                    <input type='text'
                     onChange={(e) => setCategory(e.target.value)}
                     value={category}
                     required
                    />
                </label>
                <label className='discription'>
                    <p>Description</p>
                    <textarea type='text' 
                     onChange={(e) => setDesc(e.target.value)}
                     value={desc}
                     required
                    />
                    <h5>
                    Include condition, features and reason for selling</h5>
                </label>
                <hr/>
                <h3>SET A PRICE (IN PKR)</h3>
                <label>
                    <p>Price</p>
                    <input type='number' 
                     onChange={(e) => setPrice(e.target.value)}
                     value={price}
                     required
                    />
                </label>
                <hr/>
                <h3>SET YOUR PRODUCT IMAGE</h3>
                <label>
                    <p>Image</p>
                    <input type='file' accept='image/*' capture='camera' className='uploadInput' 
                    onChange={uploadImage} ref={fileInputRef}
                    //  style={{visibility: 'hidden'}} 
                    />
                    <button className='uploadImage' onClick={triggerUpload}>Upload Image</button>
                </label>
                <hr/>
                <h3>CONFIRM YOUR LOCATION</h3>
                <label>
                    <p>State</p>
                    <select id='state'  onChange={(e) => setLocation(e.target.value)}
                     value={location}
                     required>
                         <option value="Pakistan"></option>
                         <option value="Azad Kashmir">Azad Kashmir</option>
                         <option value="Balochistan">Balochistan</option>
                         <option value="Islamabad">Islamabad Capital Territory</option>
                          <option value="Kyber Pakhtunkhwa">KPK</option>
                           <option value="Punjab">Punjab</option>
                            <option value="Sindh">Sindh</option>
                            <option value="Northern Areas">Northern Area</option>
                            </select>
                    {/* <input type='text' 
                     onChange={(e) => setLocation(e.target.value)}
                     value={location}
                     required
                    /> */}
                </label>
                <hr/>
                <button className='submit'>Post Now</button>
            </form>
            
        </div>
       
    )
}

export default Sell;

