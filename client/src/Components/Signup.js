import React from "react";
import {Link} from "react-router-dom";
import "./signup.css";

const Signup = ()=>{
    const signupForm =()=>(
        <form className = "signupForm form-group">
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text">
                    <i className="fa fa-user"/>
                    </span>
                </div>
                <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text">
                        <i className="fas fa-envelope"/>
                    </span>
                </div>
                <input type="email" className="form-control" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text">
                        <i className= "fas fa-key"/>
                    </span>
                </div>
                <input type="password" className="form-control" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text">
                        <i className="fas fa-key"></i>
                     </span>
                </div>
                <input type="password" className="form-control" placeholder="Confirm Password" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
            <div className="form-group">
            <button type="submit" class="btn btn-primary btn-lg btn-block">
               Sign Up
            </button>
            </div>
            <div>
            <p>
                <Link to ="/signin">Sign In</Link>
            </p>
            </div>
            
        </form>
    )


    return (
        <div className= "signupContainer ">
            <div className= " row vh-100 justify-content-md-center align-items-center px-2" >
                <div className="col-md-5 ">
                {signupForm()}
                </div>
            </div>
         </div>
        
    )
};

export default Signup;