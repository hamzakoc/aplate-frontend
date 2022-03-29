import React, { Component, Fragment } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Banner from "../header/Banner";
import RegisterPage from "./RegisterPage";

class Dashborad extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        {/* <!-- Breadcrumbs --> */}
        <br /><br /><br />
        <Banner title="Register" />
        <RegisterPage />
        <Footer />
      </React.Fragment>
    );
  }
}
export default Dashborad;
