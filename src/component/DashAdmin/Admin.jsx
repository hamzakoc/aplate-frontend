import React, { Component, Fragment } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import TabTwoAdmin from "./TabTwoAdmin";
import Banner from "../header/Banner";

class Dashborad extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        {/* <!-- Breadcrumbs --> */}
        <br /><br /><br />
        <Banner title="Dashboard" />
        <TabTwoAdmin />
        <Footer />
      </React.Fragment>
    );
  }
}
export default Dashborad;
