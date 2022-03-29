import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import ContactRegistration from "../Common/ContactRegistration";
import ContactMap from "../Common/ContactMap";
import Banner from "../header/Banner";
class Contact extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        {/*  Breadcrumbs */}
        <br /><br /><br />
        <Banner title="Contact Us" />
        {/* ContactRegistration */}
        <ContactRegistration />

        {/* ContactMap */}
        <ContactMap />

        <Footer />
      </React.Fragment>
    );
  }
}
export default Contact;
