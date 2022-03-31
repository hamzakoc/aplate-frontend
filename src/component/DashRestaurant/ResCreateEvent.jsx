import React, { Component } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import ResTabCreateEvent from "./ResTabCreateEvent";
import Banner from "../header/Banner";

class CreateEvent extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        {/* <!-- Breadcrumbs --> */}
        <br /><br /><br />
        <Banner title="Dashboard" />
        <ResTabCreateEvent />
        <Footer />
      </React.Fragment>
    );
  }
}
export default CreateEvent;
