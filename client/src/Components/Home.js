import React from "react";
import {Link} from "react-router-dom";
import "./home.css";
import data from "./data";

const Home = ()=>{
    const showProducts = () =>(
        <div class="row">
            {data.shoes.map(shoe => (
                <div class="col-sm-4">
                <Link to href="#" class="card-links">
                    <div class="card border-0">
                        <div class="card-body">
                            <img className="card-img-top" src={shoe.Image}/>
                            <h5 class="card-title">{shoe.Color + " " + shoe.Style}</h5>
                            <div className = "ratings">
                                <span>
                                    <i className="fa fa-star starIcon"/>
                                    <i className="fa fa-star starIcon"/>
                                    <i className="fa fa-star starIcon"/>
                                    <i className="fa fa-star-half-o starIcon"/>
                                </span>
                             </div>
                            
                            <p class="card-text">{shoe.Description}</p>
                            <p class="card-text card-price">{shoe.Price}</p>
                        </div>
                    </div>
                </Link>
                <hr/>
            </div>

            ))}
            
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