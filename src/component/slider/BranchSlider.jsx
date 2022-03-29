import React, { Component } from "react";
import Slider from "react-slick";

var settings = {
  fade: true,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
};

class BranchSlider extends Component {
  render() {
    return (
      <Slider className="branchs-caro" {...settings}>
        <div>
          <figure>
            <img src="/assets/images/resources/branch-slidr1.jpg" alt="" />
          </figure>
        </div>
        <div>
          <figure>
            <img src="/assets/images/resources/branch-slidr2.jpg" alt="" />
          </figure>
        </div>
        <div>
          <figure>
            <img src="/assets/images/resources/branch-slidr3.jpg" alt="" />
          </figure>
        </div>
        <div>
          <figure>
            <img src="/assets/images/resources/branch-slidr4.jpg" alt="" />
          </figure>
        </div>
      </Slider>
    );
  }
}
export default BranchSlider;
