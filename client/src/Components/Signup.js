import React from "react";

const Signup = ()=>{
    const signupForm =()=>(
        <form className = "signupForm">
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
                        <i class="fas fa-envelope"/>
                    </span>
                </div>
                <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text">
                        <i className="fas fa-key"/>
                    </span>
                </div>
                <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text">
                        <i className="fas fa-key"></i>
                     </span>
                </div>
                <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
        </form>
    )


    return (
        <p>{signupForm()}</p>
    )
};

export default Signup;