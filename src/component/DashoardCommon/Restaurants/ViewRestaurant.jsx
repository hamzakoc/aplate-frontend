import React, { Component, Fragment } from "react";
import Header from "../../header/Header";
import Footer from "../../footer/Footer";

import Banner from "../../header/Banner";
import TabViewRestaurant from "./TabViewRestaurant";

class ViewRestaurant extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        {/* <!-- Breadcrumbs --> */}
        <br /><br /><br />
        <Banner title="Dashboard" />
       <TabViewRestaurant/>
        <Footer />
      </React.Fragment>
    );
  }
}
export default ViewRestaurant;
