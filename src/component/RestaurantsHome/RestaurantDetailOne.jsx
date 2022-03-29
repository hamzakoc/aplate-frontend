import React, { Component } from "react";
import { ReactComponent as Chef } from "../../svg/chef.svg";
import { ReactComponent as Flag } from "../../svg/flag.svg";
import { ReactComponent as Phone } from "../../svg/phone-call.svg";
import { ReactComponent as Mail } from "../../svg/mail.svg";
import { Link } from "react-router-dom";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import WOW from "wowjs";
import { withRouter } from "react-router";

import axios from 'axios';


//local
const base_url = 'http://localhost:5000/api/restaurants/';

//heroku
// const base_url = 'https://gbc-crud-backend.herokuapp.com/api/v1/employees/'

class RestaurantDetailOne extends Component {

  constructor(props) {
    super(props);

    this.state = {
      id:'',
      username: '',
      fullName: '',
      emailId: '',
      address: '',
      city: '',
      phone: '',
      about: '',
      logo: '',
      photos: '',
      photo2: '',
      photo3: '',

      restaurant:[]  
    }
}

componentDidMount = () => {
  axios.get(base_url + this.props.match.params.id)
      .then(response => {
          this.setState({
            id:response.data._id,
            username: response.data.username,
            fullName: response.data.fullName,
            address: response.data.address,
            emailId: response.data.emailId,
            about: response.data.about,
            city: response.data.city,
            phone: response.data.phone,
            logo: response.data.logo ? response.data.logo.data : response.data.logo,
            photos: response.data.photos ? response.data.photos.data : response.data.photos,
            photo2: response.data.photo2 ? response.data.photo2.data : response.data.photo2,
            photo3: response.data.photo3 ? response.data.photo3.data : response.data.photo3,

          })
          console.log()
      })
      .catch(function (error) {
          console.log(error);
      })

  axios.get(base_url)
      .then(response => {
          if (response.data.length > 0) {
            const restaurants = response.data
            this.setState({ restaurants })
              this.setState({
                restaurant: response.data.map(res => res.fullName),
              })
          }
      })
      .catch((error) => {
          console.log(error);
      })

        
      new WOW.WOW({
        live: false,
      }).init();





}



  render() {
    console.log(this.state.fullName)
  return (
      <section className="py-110">
        <div className="container">
          <div className="chef-personal-info bg-gray position-relative">
            <div
              className="chef-bg wow slideInLeft"
              data-wow-delay="0.5s"
              style={{
                backgroundImage:
                  "url(" + "assets/images/resources/chef-pattern.jpg" + ")",
              }}
            ></div>
            <div className="row align-items-center">
              <div className="col-md-5">
                <div className="chef-avatar">
                <img src={`data:${this.state.logo};base64, ${Buffer.from(this.state.logo).toString('base64')}`} alt="" width={250} height={250}/>
                </div>
              </div>
              <div className="col-md-7">
                <div className="chef-title d-flex align-items-start justify-content-between">
                  <div>
                    <span className="text-theme font-weight-bold fm-arimo fs-16">
                      {/* 24 Events */}
                    </span>
                    <h3 className="fs-30">{this.state.fullName.toLocaleUpperCase()}</h3>
                  </div>
                  <Link to={"/EventsByRestaurant/"+this.state.id} className="theme-btn-secondary">
                    View Events<span></span>
                  </Link>
                </div>
                <div className="chef-meta mt-30">
                  <ul className="list-unstyled p-0 mb-0">
                    <li>
                      <Chef />
                      <strong className="text-theme font-weight-bold fm-arimo fs-16">
                      City:
                      </strong>
                      <span className="fm-arimo text-gray">{this.state.city} </span>
                    </li>
                    <li>
                      <Flag />
                      <strong className="text-theme font-weight-bold fm-arimo fs-16">
                        Location:
                      </strong>
                      <span className="fm-arimo text-gray">{this.state.address}</span>
                    </li>
                    <li>
                      <Phone />
                      <strong className="text-theme font-weight-bold fm-arimo fs-16">
                        Phone:{" "}
                      </strong>
                      <span className="fm-arimo text-gray">
                      {this.state.phone}{" "}
                      </span>
                    </li>
                    <li>
                      <Mail />
                      <strong className="text-theme font-weight-bold fm-arimo fs-16">
                        Email:{" "}
                      </strong>
                      <span className="fm-arimo text-gray">
                      {this.state.emailId}{" "}
                      </span>
                    </li>
                  </ul>
                </div>
                <ul className="chef-social list-unstyled p-0 mb-0 mt-30">
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="rounded-circle d-inline-block"
                      style={{ backgroundColor: "#365dce" }}
                    >
                      <i className="fa fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="rounded-circle d-inline-block"
                      style={{ backgroundColor: "#e62d31" }}
                    >
                      <i className="fa fa-google-plus"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="rounded-circle d-inline-block"
                      style={{ backgroundColor: "#36c8e3" }}
                    >
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="rounded-circle d-inline-block"
                      style={{ backgroundColor: "#0f9cd6" }}
                    >
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="column">
          <div className="row">
              <div className="chef-desc pt-60">
                          
                          <div class="card text-center" with={18}>
                            <div class="card-body">
                            <div class="container">
    <h1 class="display-4">ABOUT</h1>
    <p class="lead">{this.state.about}.</p>
  </div>
</div>
                            </div>
                          </div>


                          <div class="jumbotron jumbotron-fluid">
 
                  </div>
          </div>
         
                        

         
           
          </div>
          <div className="chef-gal pt-60">
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
            >
              <Masonry columnsCount={3}>
              
                {this.state.photos&& <div><a href="" data-fancybox>
                  <img src={`data:${this.state.photos};base64, ${Buffer.from(this.state.photos).toString('base64')}`} alt="" />
                  </a>
                </div>}
                {this.state.photo2&&<div>
                  <a href="" data-fancybox>
                  <img src={`data:${this.state.photo2};base64, ${Buffer.from(this.state.photo2).toString('base64')}`} alt="" />
                  </a>
                </div>}
                
                {this.state.photo3&&<div>
                  <a href="" data-fancybox>
                  <img src={`data:${this.state.photo3};base64, ${Buffer.from(this.state.photo3).toString('base64')}`} alt="" />
                  </a>
                </div>}
              
              
              </Masonry>
            </ResponsiveMasonry>
          </div>
        </div>
      </section>
    );
  }
}
export default withRouter(RestaurantDetailOne);
