import React, { Component } from "react";
import { ReactComponent as Arrow } from "../../svg/right-arrow.svg";
class SubscriptionForm extends Component {
  render() {
    return (
      <div className="sec-space no-tp-space">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 mx-auto">
              <div className="newsletter-sec text-center mx-auto">
                <h2 className="fs-34">Special Offers For New Subscribers</h2>
                <p className="mt-3 w-75 mb-4 mx-auto px-lg-5">
                  Subscribe to our newsletters now and stay up to date with new
                  events.
                </p>
                <form className="newsleter-form pt-2">
                  <input type="text" placeholder="Enter Your Email Address" />
                  <button
                    className="text-center text-white rounded-circle border-0"
                    type="submit"
                  >
                    <Arrow />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default SubscriptionForm;
