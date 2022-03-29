import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Banner from "../header/Banner";
import RestaurantList from "./RestaurantList";
import { ReactComponent as Arrow } from "../../svg/right-arrow.svg";
class Restaurants extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        {/* <!-- Breadcrumbs --> */}
        <br /><br /><br />
        <Banner title="Restaurants List" />
        <RestaurantList />
        <Footer />
      </React.Fragment>
    );
  }
}
export default Restaurants;
