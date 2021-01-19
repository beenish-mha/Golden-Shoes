import React from "react";
import data from "./data";
import NotFound from "./NotFound";
import Ratings from "./Ratings";

const ProductDetail = (props)=>{
    const shoe_id = parseInt(props.match.params.id);
    const product = data.shoes.find((shoe) =>(shoe._id) === shoe_id)
    if (!product){
        return (<NotFound/>);
    }
    return (
       
    <div className="container">
        <div className="row">
            <div className="col-md-8">
                <img src={product.Image} className="img-fluid" alt={product.Style}/>
            </div>
            <div className="col-md-4">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <h3>{product.Color} {product.Style}</h3>
                        <Ratings Ratings= {product.Ratings} Reviews = {product.Reviews}/>
                    </li>
                    <li className="list-group-item"><h3>{product.Price}</h3></li>
                    <li className="list-group-item">
                        <h4>Description:</h4>
                        {product.Description}
                    </li>
                </ul>
                <div className="card bg-light mb-3">
                    <div className="card-body">
                        <h5 className="card-title">
                            {product.Stock<1?(
                            <span>Out of Stock</span>): 
                            <span>In Stock</span>}
                        </h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
            
        </div>
    </div>

       
)
}

export default ProductDetail;