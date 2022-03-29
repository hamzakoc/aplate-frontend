import React, { Component } from "react";
import { ReactComponent as Clock } from "../../svg/wall-clock2.svg";
import { ReactComponent as Placeholder } from "../../svg/placeholder.svg";
import { Link } from "react-router-dom";

import {
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

const SocialShare = [
  { Social: <FaFacebookF />, link: "https://www.facebook.com/aplate_ca" },
  { Social: <FaInstagram />, link: "https://www.instagram.com/aplate_ca" },
  { Social: <FaTwitter />, link: "https://twitter.com/aplate_ca" },
];
class Footer extends Component {
  render() {
    return (
      <footer className="sec-space overlay position-relative">
        <div
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "assets/images/mazaa-pattern.png"
            })`,
            backgroundRepeat: "no-repeat",
            width: "250px",
          }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="widget abt-us-widget">
                <h4 className="widget-title text-white h4 font-weight-bold">
                  About Us
                </h4>
                <p className="fs-18 text-gray2 mb-0">
                A plate is aiming to expand everyone’s networking in a social environment via its own social platform. 
                A plate offers everyone to meet new people around a table which is specified to be given some discount from the registered restaurant.
                </p>
           
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="widget contct-widget">
                <h4 className="widget-title text-white h4 font-weight-bold">
                  Get in Touch
                </h4>
                <div className="folow-us flex-row">
                  <div className="social-share-inner">
                    <ul className="social-share social-style--2 d-flex justify-content-start liststyle">
                      {SocialShare.map((val, i) => (
                        <li key={i}>
                          <a href={`${val.link}`}>{val.Social}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
            <br />
                <div className="conct-info-blk d-flex flex-row">
                  <Placeholder />
                  <p className="text-gray2 fs-18">
                    <br />
                  160 Kendal Ave, Toronto, ON M5R 1M3
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-btm text-center">
            <div className="row">
              <div className="col-md-12">
                <ul className="footer-menu  list-unstyled d-flex justify-content-between">
                  <li>
                    <Link className="fs-16 font-weight-bold" to="/" title="">
                      Home
                    </Link>
                  </li>
                  <li>
                    <a
                      className="fs-16 font-weight-bold"
                      href="javascript:void(0)"
                      title=""
                    >
                      Sitemap
                    </a>
                  </li>
                  <li>
                    <a
                      className="fs-16 font-weight-bold"
                      href="javascript:void(0)"
                      title=""
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <Link
                      className="fs-16 font-weight-bold"
                      to="/Contact"
                      title=""
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
                <br /><br />
                <p className="copy-rigts fs-16 text-gray2">
                  Copyright{" "}
                  <span className="text-white font-weight-semibold">
                    2022 Aplate
                  </span>                
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;
