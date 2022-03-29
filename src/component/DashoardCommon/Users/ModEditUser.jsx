import React, { Component, Fragment } from "react";
import Header from "../../header/Header";
import Footer from "../../footer/Footer";
import ModTabEditUser from "./ModTabEditUser";
import Banner from "../../header/Banner";

class CreateEvent extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        {/* <!-- Breadcrumbs --> */}
        <br /><br /><br />
        <Banner title="Dashboard" />
        <ModTabEditUser/>
        <Footer />
      </React.Fragment>
    );
  }
}
export default CreateEvent;
