import React, { Component } from "react";
import { ReactComponent as Kabab } from "../../svg/kebab.svg";
import { ReactComponent as Cabbage } from "../../svg/cabbage.svg";
import { ReactComponent as Arrow } from "../../svg/right-arrow.svg";
import { ReactComponent as Cheese } from "../../svg/cheese.svg";
import { ReactComponent as Bonbon } from "../../svg/bonbon.svg";
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

      </div>
    );
  }
}
export default Service;
