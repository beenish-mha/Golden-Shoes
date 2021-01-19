import React, { useEffect, useState } from "react";
import axios from "axios";
import "./home.css";

import Product from "./Product";

const Home = ()=>{

const [shoes, setShoes] = useState([]);
const [loading, setLoadding] = useState(false);
const [error, setError] = useState(false);

useEffect(() =>{
    const fetchData = async() =>{
        const {data} = await axios.get("/shoes");
    
    setShoes(data);
}
fetchData();
}, [])




    const showProducts = () =>(
        <div className="row">
            {shoes.map(shoe => (
                <Product key = {shoe._id} shoe = {shoe}/>

            ))}
            
        </div>
   );

    return (
        <div>  
             
            <h3 className = "home-heading">
                <span >
                    <i className="shoe-icon fas fa-shoe-prints"/>
                </span>
                Good shoes take you good places!
                <span >
                    <i className=" shoe-icon fas fa-shoe-prints"/>
                </span>
            </h3>
            <div>{showProducts()}</div>
        </div>
    )
};

export default Home;