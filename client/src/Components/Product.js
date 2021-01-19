import React from "react";
import {Link} from "react-router-dom";
import Ratings from "./Ratings";

const Product = (props) =>{
    const {shoe} = props;
    console.log ("products page" + shoe._id)
    const id = shoe._id;
    return (
<div class="col-md-4">
                <Link to = {"./ProductDetail/"+id} class="card-links"
                >
                    <div class="card border-0">
                        <div class="card-body">
                            <img className="card-img-top" src={shoe.Image}/>
                            <h5 class="card-title">{shoe.Color + " " + shoe.Style}</h5>
                            <Ratings key= {shoe._id} Reviews= {shoe.Reviews} Ratings = {shoe.Ratings}/>
                            
                            <p class="card-text">{shoe.Description}</p>
                            <p class="card-text card-price">£{shoe.Price}</p>
                        </div>
                    </div>
                </Link>
                <hr/>
                </div>
    )
}



export default Product;