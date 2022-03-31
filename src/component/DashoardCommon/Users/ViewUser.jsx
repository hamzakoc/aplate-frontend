import React, { Component } from "react";
import Header from "../../header/Header";
import Footer from "../../footer/Footer";

import Banner from "../../header/Banner";
import TabViewUser from "./TabViewUser";

class CreateEvent extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        {/* <!-- Breadcrumbs --> */}
        <br /><br /><br />
        <Banner title="Dashboard" />
      <TabViewUser/>
        <Footer />
      </React.Fragment>
    );
  }
}
export default CreateEvent;
