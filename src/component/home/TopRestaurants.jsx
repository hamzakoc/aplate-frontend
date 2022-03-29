import React, { Component } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { ReactComponent as Arrow } from "../../svg/right-arrow.svg";
import { ReactComponent as Phone } from "../../svg/phone-call2.svg";
import { Link } from "react-router-dom";

import axios from 'axios';

//local
const base_url = 'http://localhost:5000/api/';

//heroku
// const base_url = 'https://gbc-crud-backend.herokuapp.com/api/v1/employees/'

const Restaurants= props=>(
  <div className="col-lg-4 col-md-6" >
                  <div className="chef-box position-relative bg-white">
                    <div className="chef-box-content d-flex align-items-center">
                      <figure>
                  
        <img src={`data:${props.restaurants.logo};base64, ${Buffer.from(props.restaurants.logo.data).toString('base64')}`} alt="" width={250} height={250}/>
        </figure>
                      <div className="chef-box-info">
                        <br /><br />
                        <span className="text-theme fs-16 text-success">{props.restaurants.city}</span>
                        <h3 className="text-capitalize fs-26 mb-3 text-success">
                          {props.restaurants.fullName}
                        </h3>
                        <Link
                          className="rounded-circle text-center"
                          to={"RestaurantDetail/"+ props.restaurants._id}
                          title=""
                        >
                          <Arrow />
                        </Link>
                      </div>
                    </div>
                  </div>
                  </div>
       
)

class TopRestaurants extends Component {
  constructor(props) {
    super(props);
    this.state = { restaurants: []};
      
  }


  componentDidMount() {
        
          //Restaurants
          axios.get(base_url+"restaurants/")
          .then(response => {
              console.log(response.data)
              console.log("********************************")
              const restaurants = response.data
              this.setState({ restaurants })
            
          })
    
          .catch((error) => {
              console.log(error);
          })
    
    
                 
      }
    
    
 
    restaurantList() {
      return this.state.restaurants.map(restaurant => {
          return <Restaurants className="card-deck card" restaurants={restaurant}  key={restaurant._id}  />;
      })
    }


  render() {
    return (
      <div className="sec-space  position-relative">
        <div
          className="bg-fixed"
          style={{
            backgroundImage:
              "url(" + "assets/images/resources/parallax2.png" + ")",
          }}
        >

        </div>
          <div className="container-fluid">
          <div className="row">a
            <div className="col-lg-12">
              <div className="sec-heading text-center">
                <span className="text-theme theme-color fs-20 d-block mb-2">
                Our partners
                </span>
                <h2 className="text-uppercase fs-45 mb-40">Top Restaurants</h2>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row">            
              

        {this.restaurantList()}
                </div>
                </div>
                
        </div>
      </div>
    );
  }
}
export default TopRestaurants;
