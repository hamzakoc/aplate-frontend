import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import SubscriptionForm from "../Common/SubscriptionForm";
import SubscriptionFormTwo from "../Common/SubscriptionFormTwo";
import HomeOneSlider from "../slider/HomeOneSlider";
import EventSlider from "../slider/EventSlider";
import Service from "../Common/Service";
import TopRestaurants from "./TopRestaurants";
import SingleRecipe from "../Common/SingleRecipe";

import BookTable from "../Common/BookTable";
import TabOne from "../tab/TabOne";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Homepage extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <br /><br /><br /><br />
        <section className="slider-section position-relative">
          <HomeOneSlider />
        </section>
    
        <section>
          <Service />
        </section>
        <section>
          <SingleRecipe />
        </section>
        <section className="recipe-main">
          <div className="sec-space bg-gray">
            <div
              className="parallax"
              style={{
                backgroundImage:
                  "url(" + "assets/images/resources/bg-pattern.jpg" + ")",
              }}
            ></div>
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="sec-heading text-center">
                    <span className="text-theme theme-color fs-20 d-block mb-2">
                      New Generation Meeting
                    </span>
                    <h2 className="text-uppercase fs-45 mb-40">NEW Events</h2>
                  </div>
                </div>
              </div>
              <EventSlider />
            </div>
          </div>
        </section>
        {/* Book A Table  */}
        <BookTable />
        {/* End Book A Table  */}
        {/* Recipes Tabs  */}
        <div className="sec-space">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sec-heading text-center">
                  <span className="text-theme theme-color fs-20 d-block">
                    What you Like at
                  </span>
                  <h2 className="text-uppercase fs-50">Sociable Events</h2>
                </div>
              </div>
            </div>
            <div className="recipe-tabs">
             
              <div className="tab-content">
                <TabOne />
              </div>
            </div>
          </div>
        </div>
        {/* End Recipes Tabs  */}
        {/*Top Chefs  */}
        <TopRestaurants />
        {/* End Top Chefs  */}
        {/* News */}
        {/* End News */}
        {/* Subscription Form */}
        <br /><br /><br />
        {/* <SubscriptionForm /> */}
        <SubscriptionForm/>
        {/* <SubscriptionFormTwo/> */}
        <br /><br /><br />
        {/* End Subscription Form */}
        <Footer />
      </Fragment>
    );
  }
}
export default Homepage;
