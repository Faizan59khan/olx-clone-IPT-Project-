import React,{useState} from 'react';
import logo from '../images/23_OLX-512.png';
import SearchIcon from '@material-ui/icons/Search';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import AddIcon from '@material-ui/icons/Add';
import Modal from './Modal';

import { Link } from 'react-router-dom';


function Header (){
 
 // const [items,setItems]=useState(item.item);
  const [searchItem,setSearchItem]=useState('');
  const [modalOpen, setModalOpen] = useState(false);

 

    const nav = [
       {ID: 1,label:"Mobile Phones"},
       {ID: 2,label:"Cars"},
       {ID: 3,label:"Motorcycles"},
       {ID: 4,label:"Houses"},
       {ID: 5,label:"TV - Video - Audio"},
       {ID: 6,label:"Tablets"},
       {ID: 7,label:"Land & Plots"},
    ]  

    return (
        <React.Fragment>
        <div className="header fixed flex aic">
           <div className="logo">
            <img src={logo}/>
          </div>
          <div className="location flex aic rel s16">
          <div className="ico"><SearchIcon/></div>
            <input type="text" className="s15 font label" placeholder="Pakistan"/>
            <button className="arro s24">
              <KeyboardArrowDownIcon/>
            </button>
        
          </div>
          <div className="search flex aic">

        
             <input type="text" className="s15 font query" placeholder="Find Cars, Mobile Phones and more..." />
             <button className="go s20 cff" >
             <SearchIcon/>
             </button>
          

          </div>
          <div className="actions flex aic">
            
          <Link to="/SignUp" className="fontb s15" style={{ paddingBottom:'10px' }} className="openModalBtn"
        onClick={() => {
          setModalOpen(true);
        }}>LOGIN</Link> 
            <button className="sell flex aic">
              <img src="https://www.olx.com.pk/assets/iconSellBorder_noinline.d9eebe038fbfae9f90fd61d971037e02.svg" className='border-img'/>
              <div className='sell-content'>
                <div className="s12 ico"><i class="fas fa-plus"></i>
                <Link to="/sell"><span className="s15 m7 fontb" >SELL</span></Link>
                </div> 
               </div>
            </button>
          </div>
        </div>
          
          <div className="hnav fixed flex aic">
               <button className="view-cates flex aic">
                   <h2 className="s16 m7 fontb color">All Categories</h2>
                   <button className="arro s15"><KeyboardArrowDownIcon/></button>
               </button>
               {
                 nav.map(item =>{
                    return(
                    <Link to={"/browser/"+item.ID} key={item.ID} className="noul bl noulh color font s15">{item.label}</Link>
                    )
                 }
  
                 )
               }
          </div>
          <div className="space">
            {/* MODAL YAHAN SHOW KARAYA HUA HAI */}
            {modalOpen && <Modal setOpenModal={setModalOpen} />}
          </div>
          
        </React.Fragment>
    )
}








export default Header;

