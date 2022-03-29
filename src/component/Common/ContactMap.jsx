import React, { Component } from "react";
class ContactMap extends Component {
  render() {
    return (
      <section className="pb-110">
        <div className="container">
          <div className="map-area position-relative">
            <iframe
              src="https://maps.google.com/maps?q=160%20Kendal%20Ave,%20Toronto,%20ON%20M5R%201M3&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              // style="border:0;"
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>

            
            <div className="contact-bar bg-white py-4">
              <div className="row">
                <div className="col-md-7">
                  <div className="contact-bar-info d-flex align-items-center">
                    <i className="flaticon-clock"></i>
                   
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="contact-bar-info d-flex align-items-center">
                    <i className="flaticon-gps"></i>
                    <div>
                      <span className="fs-16 text-gray">
                      160 Kendal Ave, 
                        <br /> Toronto, ON M5R 1M3
                      </span>
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
export default ContactMap;
