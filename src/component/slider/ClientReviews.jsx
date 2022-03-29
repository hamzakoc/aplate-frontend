import React, { Component } from "react";
import Slider from "react-slick";
const Sliderimg1 = (
  <img src="assets/images/resources/testi-avatar.jpg" alt="Sliderimg" />
);
const Sliderimg2 = (
  <img src="assets/images/resources/testi-avatar.jpg" alt="Sliderimg" />
);
const Sliderimg3 = (
  <img src="assets/images/resources/testi-avatar.jpg" alt="Sliderimg" />
);
const SliderContent = [
  {
    image: Sliderimg1,
    title: "James Smith",
    description:
      "Torn between a rooftop bar and a tranquil ile country setting? Take inspiration from our ui restaurant collections.",
  },
  {
    image: Sliderimg2,
    title: "Chicken Reshmi Kabab",
    description:
      "Torn between a rooftop bar and a tranquil ile country setting? Take inspiration from our ui restaurant collections.",
  },
  {
    image: Sliderimg3,
    title: "Albie Liam",
    description:
      " Torn between a rooftop bar and a tranquil ile country setting? Take inspiration from our ui restaurant collections.",
  },
];

var settings = {
  fade: true,
  infinite: true,
  speed: 500,
  arrows: true,
  slidesToShow: 1,
};

class ClientReviews extends Component {
  render() {
    return (
      <Slider className="testi-caro owl-carousel" {...settings}>
        {SliderContent.map((value, index) => (
          <div className="testi-item bg-gray position-relative" key={index}>
            <p className="fs-22 font-style-italic mb-40">{value.description}</p>
            <div className="testi-meta">
              <h4 className="h4 font-weight-bold">{value.title}</h4>
              <div className="testi-rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
            </div>
            <div className="testi-avatar">{value.image}</div>
          </div>
        ))}
      </Slider>
    );
  }
}
export default ClientReviews;
