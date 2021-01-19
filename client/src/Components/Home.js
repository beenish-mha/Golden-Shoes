import React from "react";
import {Link} from "react-router-dom";
import "./home.css";
import data from "./data";
import Product from "./Product";

const Home = ()=>{
    const showProducts = () =>(
        <div class="row">
            {data.shoes.map(shoe => (
                <Product key = {shoe._id} shoe = {shoe}/>

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