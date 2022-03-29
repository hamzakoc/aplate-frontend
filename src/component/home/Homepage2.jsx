import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Header2 from "../header/Header2";
import Footer from "../footer/Footer";
import AboutIntro from "../Common/AboutIntro";
import SubscriptionForm from "../Common/SubscriptionForm";
import QuoteDay from "../Common/QuoteDay";
import FoodRestaurants from "../Common/FoodRestaurants";
import SubscriptionFormTwo from "../Common/SubscriptionFormTwo";
import AboutPricing from "../Common/AboutPricing";
import ChefPost from "../Common/ChefPost";
import ChefRecipes from "../Common/ChefRecipes";
import { ReactComponent as Arrow } from "../../svg/right-arrow.svg";
import "slick-carousel/slick/slick.css";
import HomeTwoSlider from "../slider/HomeTwoSlider";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

class Homepage2 extends Component {
  render() {
    return (
      <Fragment>
        <Header2 />
        {/* <!-- Slider Section --> */}
        <section className="main-slider2 position-relative">
          <HomeTwoSlider />
          <div className="container">
            <div className="kenburn-text text-center">
              <h3 className="line position-relative text-white">
                Enjoy Your Food Restaurant
              </h3>
              <h2 className="text-theme text-white">Fresh & Tasty</h2>
              <p className="mb-0">
                Explore recipes with natural cheese for delicious meals,
                appetizers, desserts, and snacks.
              </p>
            </div>
          </div>
        </section>
        {/* About Us Sec */}
        <AboutIntro />
        {/* About Us Sec */}
        <AboutPricing />
        {/* AboutPricing */}
        <ChefPost />
        {/* AboutPricing */}
        <QuoteDay />
        {/* QuoteDay */}
        <SubscriptionFormTwo />
        {/* SubscriptionFormTwo */}
        <FoodRestaurants />
        {/*FOOD RESTAURANTS*/}
        <ChefRecipes />
        {/*ChefRecipes*/}
  
        <SubscriptionForm />
        {/*SubscriptionForm*/}
        <Footer />
      </Fragment>
    );
  }
}

export default Homepage2;
