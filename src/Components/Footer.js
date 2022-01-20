import React from 'react';
import { Link } from 'react-router-dom';
import Cover from '../images/phone-app.webp'
import Cover2 from '../images/ribbon.png'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';

class Footer extends React.Component{
    constructor(){
        super()
        
    }

    render(){
        return(
       <React.Fragment>

    
            <div className="centre add">
               <a target="blank" href="https://try.digitalocean.com/developerbrand/?utm_campaign=global_brand_rtg-community_en_display&utm_adgroup=community_visitors_all_30_days&_keyword=&_device=c&_adposition=none&utm_medium=display&utm_source=google&gclid=CjwKCAjwlbr8BRA0EiwAnt4MTuzBbnRMuLrez6BcRhwOH6puCpzpWhomA3H_r1oS3Tm4CsOP1LefshoCrz0QAvD_BwE"><img src={Cover2} className="img-fluid" alt="Responsive image"/></a>
            </div>
        
        <div style={{ background: "#f9f9f9"}}>
           <div className="app-ribbon flex container aic">

            
                <div className="img">
                    <img src={Cover}/>
                </div>

                <div className="meta">
                  <h2 className="title s30 color fontb">TRY THE OLX APP</h2>
                  <p className="s18 color">Buy, sell and find just about anything using the app on your mobile.</p>
                </div>

                <div className="links">
                    <h2 className="title color s16">GET YOUR APP TODAY</h2>

                    <div className="flex as">
                    <a href="#" className="noul bl"><img src="https://statics.olx.com.pk/external/base/img/appstore_2x.webp"/></a>
                    <a href="#" className="noul bl"><img src="https://statics.olx.com.pk/external/base/img/playstore_2x.webp"/></a>
                    </div>
                </div>
           

            </div>
         </div>


            <div className="footer flex ">
                <div className="block flex flex-col">
                    <h2 className="title s17 fontb color">Popular Categories</h2>
                    <Link to="/" className="noul noulh font s14 color">Cars</Link>
                    <Link to="/" className="noul noulh font s14 color">Flats for rent</Link>
                    <Link to="/" className="noul noulh font s14 color">Jobs</Link>
                    <Link to="/" className="noul noulh font s14 color">Mobile Phones</Link>

                </div>
                <div className="block flex flex-col">
                    <h2 className="title s17 fontb color">Trending Searches</h2>
                    <Link to="/" className="noul noulh font s14 color">Cars</Link>
                    <Link to="/" className="noul noulh font s14 color">Flats for rent</Link>
                    <Link to="/" className="noul noulh font s14 color">Jobs</Link>
                    <Link to="/" className="noul noulh font s14 color">Mobile Phones</Link>

                </div>
                <div className="block flex flex-col">
                    <h2 className="title s17 fontb color">About Us</h2>
                    <Link to="/" className="noul noulh font s14 color">Cars</Link>
                    <Link to="/" className="noul noulh font s14 color">Flats for rent</Link>
                    <Link to="/" className="noul noulh font s14 color">Jobs</Link>
                    <Link to="/" className="noul noulh font s14 color">Mobile Phones</Link>

                </div>
                <div className="block flex flex-col">
                    <h2 className="title s17 fontb color">OLX</h2>
                    <Link to="/" className="noul noulh font s14 color">Cars</Link>
                    <Link to="/" className="noul noulh font s14 color">Flats for rent</Link>
                    <Link to="/" className="noul noulh font s14 color">Jobs</Link>
                    <Link to="/" className="noul noulh font s14 color">Mobile Phones</Link>

                </div>

                <div className="block flex flex-col">
                    <h2 className="title s17 fontb color">Follow us</h2>
                    
                    <div className="flex">
                         <a href="#" className="cB p-1"><FacebookIcon/></a>
                         <a href="#" className="cB p-1"><TwitterIcon/></a>
                         <a href="#" className="cB p-1"><YouTubeIcon/></a>
                         <a href="#" className="cB p-1"><InstagramIcon/></a>
                    </div>
                
                <div className="flex as m11">
                    <a href="#" className="noul bl m-1"><img width="100" src="https://statics.olx.com.pk/external/base/img/appstore_2x.webp"/></a>
                    <a href="#" className="noul bl m-1"><img width="100" src="https://statics.olx.com.pk/external/base/img/playstore_2x.webp"/></a>
                </div>

                </div>

            </div>

            

            <div className="footer1 flex">
                 <h2 className="cff font s13">Other Countries India - South Africa - Indonesia</h2>
                 <h2 className="r cff font s13">Free Classifieds in Pakistan. © 2006-2020 OLX</h2>
            </div>
            

            </React.Fragment>
        )

        
    }
}

export default Footer;