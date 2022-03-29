import React, { Component } from "react";
import { ReactComponent as Arrow } from "../../svg/right-arrow.svg";
class QuoteDay extends Component {
  render() {
    return (
      <section>
        <div className="sec-space no-tp-space">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <div className="quote-sec text-center">
                  <h2 className="font-weight-bold fs-22 text-uppercase">
                    Quote of the Day?
                  </h2>
                  <p className="font-weight-bold theme-color fs-35 mb-0">
                    "Torn between a rooftop bar and a tranquil country setting?
                    Take inspiration from our restaurant collections"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default QuoteDay;
