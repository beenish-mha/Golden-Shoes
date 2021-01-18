import React from "react";
import {Link} from "react-router-dom";
import "./home.css";

const Home = ()=>{
    const showProducts = () =>(
        <div class="row">
           <div class="col-sm-3">
                <Link to href="#" class="card-links">
                    <div class="card border-0">
                        <div class="card-body">
                            <img className="card-img-top" src="https://images.unsplash.com/photo-1605317143724-025ceb00651c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fGdvbGRlbiUyMHNob2VzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"/>
                            <h5 class="card-title">Golden shoe name</h5>
                            <p class="card-text">great shoe to wear</p>
                            <p class="card-text card-price">£65</p>
                        </div>
                    </div>
                </Link>
                <hr/>
            </div>
            <div class="col-sm-3">
                <Link to href="#" class="card-links">
                    <div class="card border-0">
                        <div class="card-body">
                            <img className="card-img-top" src="https://images.unsplash.com/photo-1605317143724-025ceb00651c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fGdvbGRlbiUyMHNob2VzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"/>
                            <h5 class="card-title">Golden shoe name</h5>
                            <p class="card-text">great shoe to wear</p>
                            <p class="card-text card-price">£65</p>
                        </div>
                    </div>
                </Link>
                <hr/>
            </div>
            <div class="col-sm-3">
                <Link to href="#" class="card-links">
                    <div class="card border-0">
                        <div class="card-body">
                            <img className="card-img-top" src="https://images.unsplash.com/photo-1605317143724-025ceb00651c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fGdvbGRlbiUyMHNob2VzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"/>
                            <h5 class="card-title">Golden shoe name</h5>
                            <p class="card-text">great shoe to wear</p>
                            <p class="card-text card-price">£65</p>
                        </div>
                    </div>
                </Link>
                <hr/>
            </div>
            <div class="col-sm-3">
                <Link to href="#" class="card-links">
                    <div class="card border-0">
                        <div class="card-body">
                            <img className="card-img-top" src="https://images.unsplash.com/photo-1605317143724-025ceb00651c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fGdvbGRlbiUyMHNob2VzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"/>
                            <h5 class="card-title">Golden shoe name</h5>
                            <p class="card-text">great shoe to wear</p>
                            <p class="card-text card-price">£65</p>
                        </div>
                    </div>
                </Link>
                <hr/>
            </div>
        </div>
   );

    return (
        <div>  
             
            <h3 className = "home-heading">
                <span >
                    <i class="shoe-icon fas fa-shoe-prints"/>
                </span>
                Good shoes take good you places!
                <span >
                    <i class=" shoe-icon fas fa-shoe-prints"/>
                </span>
            </h3>
            <div>{showProducts()}</div>
        </div>
    )
};

export default Home;