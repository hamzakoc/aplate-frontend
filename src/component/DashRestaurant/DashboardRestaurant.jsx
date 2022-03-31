import React, { Component } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import RestaurantDashDetails from "./RestaurantDashDetails";
import Banner from "../header/Banner";

class Dashborad extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        {/* <!-- Breadcrumbs --> */}
        <br /><br /><br />
        <Banner title="Dashboard" />
        <RestaurantDashDetails />
        <Footer />
      </React.Fragment>
    );
  }
}
export default Dashborad;
