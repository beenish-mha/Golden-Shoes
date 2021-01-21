import React from "react";
import {Link} from "react-router-dom";
const Footer = () =>{
    return (
        <>
        <div className="container container-fluid foot-container">
            <div className="row">
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md aboutUs">About Us</div>
                        <div className="col-md delivery">Delivery/Collections</div>
                        <div className="col-md">Help</div>
                    </div>
                </div>
                <div className="col-6 col-md-6 social-media" >
                    <Link to= "/mail"><span className= "social-icon"><i className="fas fa-envelope"></i></span></Link>
                    <span className= "social-icon"><i className="fab fa-facebook-f"></i></span>
                    <span className= "social-icon"><i className="fab fa-twitter"></i></span>
                    <span className= "social-icon"><i className="fab fa-instagram"></i></span>
                
                </div>
            </div>
        </div>
        <div className= "container container-fluid foot-container copyrights">
            <p ><span>&#169; Golden Shoes Ltd reserve all the rights</span></p>
        </div>
        
        </>
    )
}

export default Footer;