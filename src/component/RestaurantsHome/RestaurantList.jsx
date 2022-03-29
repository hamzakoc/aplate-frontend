import React, { Component } from "react";
import { ReactComponent as Arrow } from "../../svg/right-arrow.svg";
import { Link } from "react-router-dom";
import axios from 'axios';

//local
const base_url = 'http://localhost:5000/api/';

//heroku
// const base_url = 'https://gbc-crud-backend.herokuapp.com/api/v1/employees/'



const Restaurants = props=>(
  
     <div className="col-lg-4 col-md-6" >
        <div className="chef-box position-relative bg-white">
          <div className="chef-box-content d-flex align-items-center">
          <figure>
                  
                  <img src={`data:${props.restaurants.logo};base64, ${Buffer.from(props.restaurants.logo.data).toString('base64')}`} alt="" width={250} height={250}/>
                  </figure>
            <div className="chef-box-info">
              <span className="text-theme fs-16 text-success" >{props.restaurants.city}</span>
              <h3 className="text-capitalize fs-30 mb-10 text-success">
                {props.restaurants.fullName}
              </h3>
              <Link
                className="rounded-circle d-inline-block text-center"
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

class RestaurantList extends Component {

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
      <section>
        <div className="sec-space">
          <div
            className="bg-fixed"
            style={{
              backgroundImage: "url(" + "assets/images/mazaa-pattern.png" + ")",
            }}
          ></div>
          <div className="container">
            
  <div className="row">
     {this.restaurantList()}
     </div>
        </div></div>
      </section>
    );
  }
}
export default RestaurantList;
