import React, { Component } from "react";
import { ReactComponent as Phone } from "../../svg/phone-call.svg";
import { ReactComponent as Email } from "../../svg/mail.svg";
class ContactRegistration extends Component {
  render() {
    return (
      <section className="pt-110 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-12">
              <h3 className="contact-icon-title">
                Contact us !
              </h3>
              <p className="fs-18">
              We will be in touch soon
              </p>
              <div className="contact-icon-box d-flex align-items-center">
                <Phone />
                <strong className="text-gray fs-18">Phone: </strong>
                <span className="text-gray fs-18">( 437 ) 236-9498</span>
              </div>
              <div className="contact-icon-box d-flex align-items-center">
                <Email />
                <strong className="text-gray fs-18">Email: </strong>
                <span className="text-gray fs-18">info@aplate.ca</span>
              </div>
              <ul className="contact-social list-unstyled d-flex mt-30 mb-0">
                <li>
                  <a
                    href="#"
                    className=" d-inline-block text-center"
                    style={{ backgroundColor: "#365dce" }}
                  >
                    <i className="fa fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className=" d-inline-block text-center"
                    style={{ backgroundColor: "#e62d31" }}
                  >
                    <i className="fa fa-google-plus"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className=" d-inline-block text-center"
                    style={{ backgroundColor: "#36c9e4" }}
                  >
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className=" d-inline-block text-center"
                    style={{ backgroundColor: "#0f9cd6" }}
                  >
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-7 col-md-12">
              <form className="contact-form">
                <input className="w-100" type="text" placeholder="Complete Name" />
                <input className="w-100" type="email" placeholder="Email Address" />
                <input className="w-100" type="text" placeholder="Phone No" />
                <textarea className="w-100" placeholder="Message"></textarea>
                <button type="submit" className="theme-btn-secondary mt-20">
                  Send Messages <span></span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default ContactRegistration;
