import React, { Component, } from "react";
import Header from "../../header/Header";
import Footer from "../../footer/Footer";
import TabCreateRestaurant from "./TabCreateRestaurant";
import Banner from "../../header/Banner";

class CreateRestaurant extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        {/* <!-- Breadcrumbs --> */}
        <br /><br /><br />
        <Banner title="Dashboard" />
        <TabCreateRestaurant />
        <Footer />
      </React.Fragment>
    );
  }
}
export default CreateRestaurant;
