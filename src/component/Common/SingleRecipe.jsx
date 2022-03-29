import React, { Component } from "react";
import { Link } from "react-router-dom";
import WOW from "wowjs";
class SingleRecipe extends Component {
  componentDidMount() {
    new WOW.WOW({
      live: false,
    }).init();
  }
  render() {
    return (
      <div className="sec-space">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="sing-recipe-img wow fadeInLeft "
                data-wow-delay="0.5s"
              >
                <img
                  className="img-fluid"
                  src="assets/images/homepage/sld2.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="sing-recipe-content">
                <div className="single-rec-desc">
                  <h2 className="mb-3">Join the event to discover new environments.</h2>
                  <p>
                  Have fun with new friends.{" "}
                  </p>
                  <p>
                  A Plate is a great way for you to have fun and socialize. 
                  We organize great events such as workshops, social meetings, game nights. 
                  If you want to meet new people and have great experiences, don't wait,  
                  join an event now.{" "}
                  </p>
                  <Link
                    className="theme-btn-secondary mt-4"
                    to="/Events"
                    title=""
                  >
                    See Events<span></span>
                  </Link>
                </div>
                <div className="sing-smal-info mb-0 wow fadeInRight" data-wow-delay="0.5s">
                  <strong className="position-relative fs-14 ">Are you ready to meet your new friends?</strong>
              
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default SingleRecipe;
