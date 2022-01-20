import React,{ Component } from 'react'
import '../App.css';
import axios from 'axios';



class Signup extends Component {

    constructor(){
        super();
        this.state={
          /*   name:"",
            email:"",
            password:"",           
            vPassword:"", */

        };
     
        this.subMit=this.subMit.bind(this);
        this.handleForm=this.handleForm.bind(this);
    }

handleForm(e){
  
    this.setState({
      
        [e.target.name] : e.target.value,
    })
  
}
subMit(e){
    
    e.preventDefault();
   console.log(this.state);
  /* const data =new FormData();
    data.append('email',this.state.femail);
   data.append('password',this.state.fpassword);
   data.append('name',this.state.fname);
   data.append('verifiedPassword',this.state.fverifiedPassword); */

  const data ={
       name:this.state.fname,
       email:this.state.femail,
       password:this.state.fpassword,
       verifiedPassword:this.state.fverifiedPassword,       
   }
   
  
    
   axios.post('http://localhost:5000/api/user-register',data)
   .then((response)=>{
       alert(response.data.msg);
   })
   .catch((error)=>{
      alert(`Error=> ${error.response.data.msg}`);
   })

   
}
 
  render(){
     
    return (
        <div className="Sign_UpContainer">
            <form className="Sign_UpForm">
                <label>Name</label>
                <input type="text" placeholder="Enter your name" name="fname" value={this.state.fname} onChange={this.handleForm}/>
                <label>Email</label>
                <input type="email" placeholder="Enter your email" name="femail" value={this.state.femail} onChange={this.handleForm}/>
                <label>Password</label>
                <input type="password" placeholder="Enter your password" name="fpassword" value={this.state.fpassword} onChange={this.handleForm}/>
                <label>Verified Password</label>
                <input type="password" placeholder="Verified password" name="fverifiedPassword" value={this.state.fverifiedPassword} onChange={this.handleForm}/>

                <button onClick={this.subMit}>Submit</button>
            </form>
        </div>
    )
  }
  }


export default Signup;
