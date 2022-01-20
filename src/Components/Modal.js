import React from "react";
import "./Modal.css";
import modalLogo from '../images/modalLogo.jpg'
import {Link} from 'react-router-dom'
import googleLogo from '../images/google.png'
import facebookLogo from '../images/facebook.png' 

function Modal({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
           <i class="fas fa-times" style={{color:'grey'}}></i>
          </button>
        </div>
        <div className="title">
          <img src={modalLogo}/>
          <h2>WELCOME TO OLX</h2>
        </div>
        <div className="body">
          <h2>The trusted community of buyers and sellers.</h2>
        </div>
        <div className="footer">
          <button>
            <Link to="/login">Login</Link>
          </button>
          <button>
          <i class="fab fa-google"></i>
          <span>Continue with Google</span>
          </button>
          <button>
          <i class="fab fa-facebook"></i>
            <span>Continue with Facebook</span>
            </button>
          <button>
          <i class="fas fa-envelope"></i>
          <span>Continue with Email</span>
          </button>
          <button>
          <i class="fas fa-phone"></i>
          <span>Continue with Phone</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;