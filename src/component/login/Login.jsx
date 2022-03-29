import React, { Component, Fragment } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import LoginPage from "./LoginPage";
import Banner from "../header/Banner";

class Dashborad extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        {/* <!-- Breadcrumbs --> */}
        <br /><br /><br />
        <Banner title="Login" />
        <LoginPage />
        <Footer />
      </React.Fragment>
    );
  }
}
export default Dashborad;
