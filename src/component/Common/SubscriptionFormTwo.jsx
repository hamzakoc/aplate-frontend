import React, { Component } from "react";
import WOW from "wowjs";
class SubscriptionFormTwo extends Component {
  componentDidMount() {
    new WOW.WOW({
      live: false,
    }).init();
  }
  render() {
    return (
      <section>
        <div className="sec-space">
          <div
            className="parallax"
            style={{
              backgroundImage:
                "url(" + "assets/images/resources/member-bg-4.png" + ")",
            }}
          ></div>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mx-auto">
                <div
                  className="becom-membr wow bounce"
                  data-wow-delay="0.5s"
                  style={{
                    backgroundImage:
                      "url(" +
                      "assets/images/resources/background-circle.jpg" +
                      ")",
                  }}
                >
                  <div className="membr-contnt text-center">
                    <h2 className="h2 font-weight-bold fs-50 mb-0">
                    Special Offers For New Subscribers
                    </h2>
                    <span className="fm-arimo fs-18 text-gray">
                      Start and Book Your Table.
                    </span>
                    <form className="bcom-membr mt-30">
                      <input
                        type="text"
                        placeholder="Enter Your Email Address...."
                      />
                      <button type="submit" className="theme-btn">
                      Subscribe
                      </button>
                    </form>
                    <div className="signup-mem mt-30">
                      <span>Not a member? </span>
                      <a href="/Register" title="">
                        Join today
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default SubscriptionFormTwo;
