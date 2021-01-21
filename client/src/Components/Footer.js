import React from "react";
import {Link} from "react-router-dom";
const Footer = () =>{
    return (
        <>
     
<footer class="bg-light text-center text-lg-start">

  <div class="container p-4">

    <div class="row">
     
      <div class="col-lg-4 col-md-12 mb-4 mb-md-0">
        <h5 class="text-uppercase">About Us</h5>

        <ul class="list-unstyled mb-0 footer-ul">
          <li>
            <a href="#!" class="text-dark footer-a">About Golden Shoe Company</a>
          </li>
          <li>
            <a href="#!" class="text-dark footer-a">Our Design</a>
          </li>
          <li>
            <a href="#!" class="text-dark footer-a">Terms and Conditions</a>
          </li>
          <li>
            <a href="#!" class="text-dark footer-a">Link 4</a>
          </li>
        </ul>
      </div>

      <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
        <h5 class="text-uppercase">Contact Us</h5>

        <ul class="list-unstyled mb-0" footer-ul>
          <li>
          <Link to= "/mail" class = "email footer-a footer-email">Send Us an Email
                <span><i className="fas fa-envelope"></i>
                </span>
            </Link>
          </li>
          
          <li>
          <h6 className="footer-h6">Write us a Letter at </h6>
            <p>Golden Shoes Main Office, 45 Shopping Store , Manchester, MA12 3YU</p>
          </li>
          <li>
          <h6 footer-h6>Call Us at</h6>
            <p>01234 567890</p>
          </li>
        </ul>
      </div>
   
      <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
        <h5 class="text-uppercase mb-0">You can follow us</h5>

        <ul class="list-unstyled footer-ul">
          <li>
            <a href="#!" class="text-dark footer-a" >Twitter 
                <span><i className="fab fa-twitter"></i>
                </span>
            </a>
          </li>
          <li>
            <a href="#!" class="text-dark footer-a" >Instagram 
                <span><i className="fab fa-instagram"></i>
                </span>
            </a>
          </li>
          <li>
            <a href="#!" class="text-dark footer-a" >FaceBook
                <span><i className="fab fa-facebook-f"></i>
                </span>
            </a>
          </li>
          
        </ul>
      </div>
    
    </div>
   
  </div>


 
  <div class="text-center p-3" >
    © 2020 Copyright:
    <a class="text-dark" href="#">GoldenShoes.com</a>
  </div>

</footer>

        </>
    )
}

export default Footer;