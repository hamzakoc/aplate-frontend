import React, { Component } from "react";
import { ReactComponent as Arrow } from "../../svg/right-arrow.svg";
import { Link } from "react-router-dom";



const ServiceCat = [
  {
    link: "recipe-list-view.html",
    bgImage: "cat-pattern.jpg",
    category: "Get more Discounts",
    icon: <i class="fa fa-fw fa-percent"></i>,
  },
  {
    link: "recipe-list-view.html",
    bgImage: "cat-pattern.jpg",
    category: "meet new people",
    icon: <i class="fa fa-fw fa-users"></i>,
  },
  {
    link: "recipe-list-view.html",
    bgImage: "cat-pattern.jpg",
    category: "socialize while eating",
    icon: <i class="fa fa-fw fa-comments"></i>,
  },
  {
    link: "recipe-list-view.html",
    bgImage: "cat-pattern.jpg",
    category: "expand your network",
    icon: <i class="fa fa-fw fa-exchange"></i>,
  },
  
];

class Service extends Component {
  render() {
    return (
      <div className="sec-space no-bottom">
      <div className="container">
        <div className="row">
          {ServiceCat.map((value, index) => (
            <div className="col-lg-3 col-md-6 col-sm-12" key={index}>
              <div className="food-cat-box text-center position-relative">
                <div
                  className="cat-hover position-absolute"
                  style={{
                    backgroundImage:
                      "url(" +
                      "assets/images/resources/" +
                      value.bgImage +
                      ")",
                  }}
                ></div>
                <div className="food-cat-inner">
                  {value.icon}
                  <h4 className="text-capitalize fs-26 mb-0 mt-1">
                    <a href="{value.link}" title="">
                      {value.category}
                    </a>
                  </h4>
                </div>
                <Link
                  to="/Events"
                  className="go-detail d-inline-block rounded-circle"
                >
                  <Arrow />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    );
  }
}
export default Service;
