import React, { Component } from "react";
import Slider from "react-slick";

var settings = {
  fade: false,
  arrow: false,
  speed: 1000,
  autoplay: true,
  slidesToShow: 1,
};

class HomeTwoSlider extends Component {
  render() {
    return (
      <Slider className="kenburn-slider owl-carousel" {...settings}>
        <div className="kenburn-slide">
          <div
            className="parallax blk-overlay slide-image  image-layer"
            style={{
              backgroundImage: "url(" + "assets/images/slide-image.jpg" + ")",
            }}
          ></div>
        </div>
        <div className="kenburn-slide">
          <div
            className="parallax blk-overlay slide-image image-layer"
            style={{
              backgroundImage: "url(" + "assets/images/slide-2.jpg" + ")",
            }}
          ></div>
        </div>
        <div className="kenburn-slide">
          <div
            className="parallax blk-overlay slide-image image-layer"
            style={{
              backgroundImage: "url(" + "assets/images/slide-3.jpg" + ")",
            }}
          ></div>
        </div>
      </Slider>
    );
  }
}
export default HomeTwoSlider;
