import React, { Component } from "react";
import { Link } from "react-router-dom";
class BookTable extends Component {
  render() {
    return (
      <div className="sec-space no-bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="book-tble-content pr-lg-5">
                <h2 className="h1 mb-3 font-weight-bold">
                We invite you to our social area
                </h2>
                <p>
                Socialize while eating, expand your network while socializing. 
                Being at this table is priceless.What are you waiting for?  Take your place now.{" "}
                </p>
                
                <Link className="theme-btn-secondary" to="/Events" title="">
                  Book a table<span></span>
                </Link>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="vid-area">
                <figure className="mb-0 position-relative">
                  <img
                    className="img-fluid"
                    src="assets/images/homepage/sld3.jpg"
                    alt=""
                  />
                
                </figure>
              </div>
            </div>
          </div>
        </div>
        <br /><br /><br />
      </div>
    );
  }
}
export default BookTable;
