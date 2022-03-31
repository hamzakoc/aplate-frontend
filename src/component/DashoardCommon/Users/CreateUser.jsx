import React, { Component,  } from "react";
import Header from "../../header/Header";
import Footer from "../../footer/Footer";
import TabCreateUser from "./TabCreateUser";
import Banner from "../../header/Banner";

class CreateEvent extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        {/* <!-- Breadcrumbs --> */}
        <br /><br /><br />
        <Banner title="Dashboard" />
        <TabCreateUser />
        <Footer />
      </React.Fragment>
    );
  }
}
export default CreateEvent;
