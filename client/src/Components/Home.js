import React from "react";
import {Link} from "react-router-dom";
import "./home.css";

const Home = ()=>{
    const showProducts = () =>(
        <div class="row">
           
            <div class="col-sm-4">
                <Link to href="#" class="card-links">
                    <div class="card border-0">
                        <div class="card-body">
                            <img className="card-img-top" src="./images/pic2.jpg"/>
                            <span>
                                <h5 class="card-title">Golden shoe name</h5>
                                <i className="fa fa-star starIcon"/>
                                <i className="fa fa-star starIcon"/>
                                <i className="fa fa-star starIcon"/>
                                <i className="fa fa-star starIcon"/>
                            </span><p class="card-text">great shoe to wear</p>
                            <p class="card-text card-price">£65</p>
                        </div>
                    </div>
                </Link>
                <hr/>
            </div>
            <div class="col-sm-4">
                <Link to href="#" class="card-links">
                    <div class="card border-0">
                        <div class="card-body">
                            <img className="card-img-top" src="./images/pic1.jpg"/>
                            <h5 class="card-title">Golden shoe name</h5>
                            <span>
                                <i className="fa fa-star starIcon"/>
                                <i className="fa fa-star starIcon"/>
                                <i className="fa fa-star starIcon"/>
                                <i className="fa fa-star starIcon"/>
                            </span>
                            <p class="card-text">great shoe to wear</p>
                            <p class="card-text card-price">£65</p>
                        </div>
                    </div>
                </Link>
                <hr/>
            </div>
            <div class="col-sm-4">
                <Link to href="#" class="card-links">
                    <div class="card border-0">
                        <div class="card-body">
                            <img className="card-img-top" src="./images/pic3.jpg"/>
                            <h5 class="card-title">Golden shoe name</h5>
                            <div className = "ratings">
                                <span>
                                    <i className="fa fa-star starIcon"/>
                                    <i className="fa fa-star starIcon"/>
                                    <i className="fa fa-star starIcon"/>
                                    <i className="fa fa-star-half-o starIcon"/>
                                </span>
                             </div>
                            
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