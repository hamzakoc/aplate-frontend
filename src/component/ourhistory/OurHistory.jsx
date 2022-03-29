import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { FcRight } from "react-icons/fc";
import Banner from "../header/Banner";
import StartRestaurent from "../Common/StartRestaurent";
import HistoryBlock from "../Common/HistoryBlock";
import SubscriptionFormTwo from "../Common/SubscriptionFormTwo";
import HistoryList from "../Common/HistoryList";

class OurHistory extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Banner title="Our History" />
        <main>
          <StartRestaurent />
          {/* StartRestaurent */}

          <SubscriptionFormTwo />
          {/* SubscriptionFormTwo */}

          <HistoryBlock />
          {/* HistoryBlock */}

          <HistoryList />
          {/* HistoryList */}
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}
export default OurHistory;
