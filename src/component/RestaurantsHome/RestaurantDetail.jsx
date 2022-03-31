import React, { Component, Fragment } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import RestaurantDetailOne from "./RestaurantDetailOne";
import BookTable from "../Common/BookTable";
import QuoteDay from "../Common/QuoteDay";
import Banner from "../header/Banner";
import EventSlider from "../slider/EventSlider";


class RestaurantDetail extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        {/* <!-- Breadcrumbs --> */}
        <br /><br /><br />
        <Banner title="Restaurant Detail" />
        <main>
          <RestaurantDetailOne />
          {/* ChefDetailOne */}

          <QuoteDay />
          {/* QuoteDay */}
          {/* <!-- Recipes Carousel --> */}
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
                      <h2 className="text-uppercase fs-45 mb-40">
                      TODAY'S EVENTS
                      </h2>
                    </div>
                  </div>
                </div>
                <EventSlider />
              </div>
            </div>
          </section>
          <section>
            {/* <!-- Book A Table  --> */}

            <BookTable />
          </section>
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}
export default RestaurantDetail;
