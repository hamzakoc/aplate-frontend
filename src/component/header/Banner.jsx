import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../svg/shopping-bag.svg";

class Banner extends Component {
  render() {
    return (
      <section className="position-relative top-banner bg-gray">
        <div
          className="bg-fixed"
          style={{
            backgroundImage: "url(" + "assets/images/mazaa-pattern.png" + ")",
          }}
        ></div>
        <div className="top-banner-content text-center">
          <div className="baner-name">
            <h2 className="fs-50 text-uppercase">{this.props.title}</h2>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center p-0 mb-0">
                <li className="breadcrumb-item text-gray fs-18 fm-arimo">
                  <a href="index.html">Home</a>
                </li>
                <li className="breadcrumb-item active text-theme fs-18 fm-arimo">
                  <a href="javascript:void(0)">{this.props.title}</a>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>
    );
  }
}

export default Banner;
