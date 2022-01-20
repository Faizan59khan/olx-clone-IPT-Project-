import React, {useEffect,useState} from "react";
import {BrowserRouter as Router, Route,} from "react-router-dom";
import Header from '../Components/Header.jsx'
import Footer from '../Components/Footer.js'
import Products    from '../Components/Products.js'
import Home from '../Components/Home.js'
import Signup from '../Components/Signup.jsx'
import Sell from '../Components/Sell.jsx'
import {BrowserRouter,Routes,Route} from 'react-router-dom'





class Approuter extends React.Component{ 
    
render(){
return(


    <BrowserRouter>
        <Header />
        <Routes>


            <Route exact path="/" component={Home} />
            <Route exact path="/Products" component={Products} />
            <Route exact path="/Signup" component={Signup} />
            <Route exact path="/Sell" component={Sell} />

        </Routes>
        <Footer />
    </BrowserRouter>
)
}
}

export default Approuter;