import React from "react";
import {Link} from "react-router-dom";

const Home = ()=>{
    const showProducts = () =>(
        <div class="row">
            <div class="col-sm-3">
                <div class="card">
                    <div class="card-body">
                        <Link to = "#">
                            <img className="card-img-top" src="https://images.unsplash.com/photo-1605317143724-025ceb00651c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fGdvbGRlbiUyMHNob2VzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"/>
                        </Link>
                        <h5 class="card-title">Golden shoe name</h5>
                        <p class="card-text">great shoe to wear</p>
                        <a href="#" class="btn btn-primary">Add to the cart</a>
                    </div>
                </div>
            </div>
            <div class="col-sm-3">
                <div class="card">
                    <div class="card-body">
                        <Link to = "#">
                            <img className="card-img-top" src="https://images.unsplash.com/photo-1605317143724-025ceb00651c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fGdvbGRlbiUyMHNob2VzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"/>
                        </Link>
                        <h5 class="card-title">Golden shoe name</h5>
                        <p class="card-text">great shoe to wear</p>
                        <a href="#" class="btn btn-primary">Add to the cart</a>
                    </div>
                </div>
            </div>
            <div class="col-sm-3">
                <div class="card">
                    <div class="card-body">
                        <Link to = "#">
                            <img className="card-img-top" src="https://images.unsplash.com/photo-1605317143724-025ceb00651c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fGdvbGRlbiUyMHNob2VzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"/>
                        </Link>
                        <h5 class="card-title">Golden shoe name</h5>
                        <p class="card-text">great shoe to wear</p>
                        <a href="#" class="btn btn-primary">Add to the cart</a>
                    </div>
                </div>
            </div>
            <div class="col-sm-3">
                <div class="card">
                    <div class="card-body">
                        <Link to = "#">
                            <img className="card-img-top" src="https://images.unsplash.com/photo-1605317143724-025ceb00651c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fGdvbGRlbiUyMHNob2VzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"/>
                        </Link>
                        <h5 class="card-title">Golden shoe name</h5>
                        <p class="card-text">great shoe to wear</p>
                        <a href="#" class="btn btn-primary">Add to the cart</a>
                    </div>
                </div>
            </div>
  
        </div>
                
            


            );

    return (
        <>
        <h3>we are home</h3>
        <div>{showProducts()}</div>
        </>
    )
};

export default Home;