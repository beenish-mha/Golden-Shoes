import React from "react";
import {Link} from "react-router-dom";

const Product = (props) =>{
    const {shoe} = props;
    return (
<div class="col-md-4">
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
    )
}



export default Product;