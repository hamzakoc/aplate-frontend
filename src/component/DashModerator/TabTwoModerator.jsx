import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { ReactComponent as Motor } from "../../svg/motorbike.svg";
import axios from 'axios';

//local
// const base_url = 'http://localhost:5000/api/';

//heroku
const base_url = 'https://aplate-api.herokuapp.com/api/'


const Events = props=>(

  <div className="order-list">
    <div className="order-item brd-rd5">
      
      <div className="order-thumb brd-rd5">
        
        <a href="#" title="" itemprop="url">
        <img src={`data:${props.events.eventPhoto};base64, ${Buffer.from(props.events.eventPhoto.data).toString('base64')}`} alt="" width={100} height={100}/>
        </a>
      
      </div>
      <div className="order-info">
        <span className="red-clr">
        {props.events.eventName}
        </span>
        <h4 itemprop="headline">
          <a href="#" title="" itemprop="url">
          {props.events.restaurant}
          </a>
        </h4>
        <h4 itemprop="headline">
          <a href="#" title="" itemprop="url">
          {props.events.eve}
          </a>
        </h4>
        
        <a
      
       className="btn-danger brd-rd3 red-bg"
      
     >
      <button className="btn-danger" onClick={(e) => { props.deleteEvent(props.events._id)}}>Delete</button>
     </a>
     <a
       className="brd-rd3 green-bg"
       href={"EditEvent/" + props.events._id}
      
     >
       Edit
     </a>
     <a
       className="brd-rd3"
       href={"EventDetail/"+ props.events._id}
       title=""
       itemprop="url"
     >
       View
     </a>
   
    </div>
    </div>
  </div>

)



const Users= props=>(
  <tbody>
                       
  <tr>
    <td>
      <h5 itemprop="headline">
        <a href="#" title="" itemprop="url">
          {props.users.username}
        </a>
      </h5>
    </td>
    
    <td> {props.users.emailId}</td>

    <td>
  {props.users.role}

    </td>
    
<td>

<a
      className="brd-rd3  red-bg"
      href={"ModEditUser/" + props.users._id}
      title=""
      itemprop="url"
    ><button type="button" class="btn btn-success"><i className="fa fa- "></i> Edit</button>
  </a>

  <a
      className="brd-rd3  red-bg"
      href={"ViewUser/"+ props.users._id}
      title=""
      itemprop="url"
    ><button type="button" class="btn btn-info"><i className="fa fa- "></i> View</button>
  </a>

  <a
      className="brd-rd3  red-bg"
     title=""
      itemprop="url"
    ><button type="button" class="btn btn-danger" onClick={(e) => { props.deleteAdmin(props.users._id)}}> Delete</button>
  </a>
           
</td>
  </tr>

</tbody>
)

const Restaurants= props=>(
  <div className="restaurants-list">
  <div className="featured-restaurant-box style3 brd-rd5">
    <div className="featured-restaurant-thumb">
    <a href="#" title="" itemprop="url">
        <img src={`data:${props.restaurants.logo};base64, ${Buffer.from(props.restaurants.logo.data).toString('base64')}`} alt="" width={150} height={150}/>
        </a>
      
    </div>
    <div className="featured-restaurant-info">
      <span className="red-clr">
        {props.restaurants.address}
      </span>
      <h4 itemprop="headline">
        <a href="#" title="" itemprop="url">
        {props.restaurants.fullName}
        </a>
      </h4>
   
    </div>
    <div className="view-menu-liks">
   
      <a
        className="brd-rd3"
        href={"RestaurantDetail/"+ props.restaurants._id}
        title=""
        itemprop="url"
      >
        View
      </a>
      <a
        className="brd-rd3 green-bg"
        href={"EditRestaurant/" + props.restaurants._id}
        title=""
        itemprop="url"
      >
        Edit
      </a>
      <a
        className="brd-rd3 red-bg"

        title=""
        itemprop="url"
        onClick={(e) => { props.deleteRestaurant(props.restaurants._id)}}
      >
   Delete
      </a>
    </div>
  </div>
</div>
)

const Reviews= props=>(
  <div className="review-box brd-rd5">
                          
                          <h4 itemprop="headline">
                          
                          </h4>
                        
                        
                          <p itemprop="description">
                         {props.reviews.comment}
                          </p>
                          <div className="review-info">
                         
                            <div className="review-info-inner">
                              <h5 itemprop="headline">Posted By: {props.reviews.user.emailId}</h5>
                              <i className="red-clr">Posted At:{props.reviews.created_at}</i>
                            </div>
                            
                          </div>
                          <a
        className="brd-rd3 red-bg"

        title=""
        itemprop="url"
        onClick={(e) => { props.deleteReview(props.reviews._id)}}
      ><button type="button" class="btn btn-danger"><i className="fa fa-cros "></i>Delete</button>
                            </a>
                        </div>
                     
)


class TabTwo extends Component {

  constructor(props) {
    super(props);
    this.state = {users:[], restaurants:[],events: [], reviews:[], loggedUser:[]};
      
  }

  componentDidMount() {


//LoggedUser

if ("userD" in localStorage) {
  const userSesion = JSON.parse(localStorage.getItem("userD"))
  const userDetail = userSesion.id

          axios.get(base_url+"admins/"+userDetail)
          .then(response => {
              console.log(response.data)
              console.log("********************************")
              const loggedUser = response.data
              this.setState({ loggedUser })
            
          })

          .catch((error) => {
              console.log(error);
          })
        }




//Events
        axios.get(base_url+"events/")
        .then(response => {
            console.log(response.data)
            console.log("********************************")
            const events = response.data
            this.setState({ events })
          
        })

        .catch((error) => {
            console.log(error);
        })
//Admins
        axios.get(base_url+"admins/")
        .then(response => {



            const usersFiltered = response.data
            .map(user=>user)
            .filter(user =>
               user.role=="user"||user.role=="deactive")
            const users = usersFiltered
            this.setState({ users })
            

           
          
        })

        .catch((error) => {
            console.log(error);
        })



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


    //Reviews
    axios.get(base_url+"reviews/")
    .then(response => {
        console.log(response.data)
        console.log("********************************")
        const reviews = response.data
        this.setState({ reviews })
      
    })

    .catch((error) => {
        console.log(error);
    })

             
  }


eventList() {
    return this.state.events.map(event => {
        return <Events className="card-deck card" events={event}  key={event._id} deleteEvent={this.deleteEvent} />;
    })
}


userList() {
  return this.state.users.map(user => {
      return <Users className="card-deck card" users={user}  key={user._id} deleteAdmin={this.deleteAdmin} />;
  })
}
restaurantList() {
  return this.state.restaurants.map(restaurant => {
      return <Restaurants className="card-deck card" restaurants={restaurant}  key={restaurant._id} deleteRestaurant={this.deleteRestaurant} />;
  })
}
reviewList() {
  return this.state.reviews.map(review => {
      return <Reviews className="card-deck card" reviews={review}  key={review._id} deleteReview={this.deleteReview} />;
  })
}



//DELETE
  deleteEvent(id) {

    axios.delete(base_url + "events/" + id)
        .then(response => { console.log(response.data) });

    window.location.reload(false);
}


deleteAdmin(id) {

  axios.delete(base_url+ "admins/" + id)
      .then(response => { console.log(response.data) });

  window.location.reload(false);
}


deleteRestaurant(id) {

  axios.delete(base_url + "restaurants/"+ id)
      .then(response => { console.log(response.data) });

  window.location.reload(false);
}

deleteReview(id) {

  axios.delete(base_url + "reviews/"+ id)
      .then(response => { console.log(response.data) });

  window.location.reload(false);
}

signOut(){
  localStorage.clear()
  setTimeout(() => {
    window.location.href="/"
  }, 1000);
  
}

  render() {
    return (
      <div className="sec-box">
        <Tabs>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <TabList>
                  <div
                    className="profile-sidebar brd-rd5 wow fadeIn"
                    data-wow-delay="0.2s"
                  >
                    <div className="profile-sidebar-inner brd-rd5">
                      <div className="user-info blue-bg">
                        <img
                          className="brd-rd50"
                          src="assets/images/resources/profile-thumb5.jpg"
                          alt="user-avatar.jpg"
                          itemprop="image"
                        />
                        <div className="user-info-inner">
                          <h5 itemprop="headline">
                            <a href="#" title="" itemprop="url">
                              Welcome
                            </a>
                          </h5>
                          <span>
                            <a href="#" title="" itemprop="url">
                            {this.state.loggedUser.emailId}
                            </a>
                          </span>
                          <button className="fa fa-sign-out" onClick={this.signOut}>SIGN OUT</button> 
                        </div>
                      </div>
                      <div
                        className="dashboard-tabs nav flex-column nav-pills me-3"
                        id="v-pills-tab"
                        role="tablist"
                        aria-orientation="vertical"
                      >
                        <Tab
                          className="nav-link active nav-style"
                          data-bs-toggle="pill"
                          data-bs-target="#v-pills-home"
                          type="button"
                          role="tab"
                          aria-controls="v-pills-home"
                          aria-selected="true"
                        >
                          <a href="#dashboard">
                            <i className="fa fa-dashboard"></i> DASHBOARD
                          </a>
                        </Tab>

                       
                        
                        <Tab
                          className="nav-link nav-style"
                          id="v-pills-profile-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#v-pills-profile"
                          type="button"
                          role="tab"
                          aria-controls="v-pills-profile"
                          aria-selected="false"
                        >
                          <a href="#users">
                            <i className="fa fa-file-text"></i>  Users
                          </a>
                        </Tab>

                        <Tab
                          className="nav-link nav-style"
                          id="v-pills-order-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#v-pills-order"
                          type="button"
                          role="tab"
                          aria-controls="v-pills-order"
                          aria-selected="false"
                        >
                          <a href="#restaurants">
                            <i className="fa fa-shopping-basket"></i> Restaurants
                          </a>
                        </Tab>
                        <Tab
                          className="nav-link nav-style"
                          id="v-pills-shortlist-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#v-pills-shortlist"
                          type="button"
                          role="tab"
                          aria-controls="v-pills-shortlist"
                          aria-selected="false"
                        >
                          <a href="#events">
                            <i className="fa fa-heart"></i>Events
                          </a>
                        </Tab>

                        <Tab
                          className="nav-link nav-style"
                          id="v-pills-messages-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#v-pills-messages"
                          type="button"
                          role="tab"
                          aria-controls="v-pills-messages"
                          aria-selected="false"
                        >
                          <a href="#my-reviews">
                            <i className="fa fa-comments"></i> Reviews
                          </a>
                        </Tab>

                        <Tab
                          className="nav-link nav-style"
                          id="v-pills-account-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#v-pills-account"
                          type="button"
                          role="tab"
                          aria-controls="v-pills-account"
                          aria-selected="false"
                        >
                          <a href="#account-settings">
                            <i className="fa fa-cog"></i> Account Info
                          </a>
                        </Tab>
                    
                      </div>
                    </div>
                  </div>
                </TabList>
              </div>
              <div className="col-md-8">
                <TabPanel>
                  <div
                    className="tab-box-content fade show active tab-box-content"
                    role="tabpanel"
                    aria-labelledby="v-pills-home-tab"
                  >
                    <div className="dashboard-wrapper brd-rd5">
                      <div className="welcome-note yellow-bg brd-rd5">
                        <h4 itemprop="headline">WELCOME TO YOUR ACCOUNT</h4>
                                       
                     
                      </div>
                      
                 
                    
                    <br /><br /><br />
                    <a
                        className="brd-rd3 "
                          href="/CreateUser/user"
                        title=""
                         itemprop="url"
                      ><button type="button" class="btn btn-info"><i className="fa fa-plus "></i> Create User</button>
                    </a>
                    
                    <br /><br /><br />
                       
                    <a
                        className="brd-rd3 "
                          href="/CreateRestaurant"
                        title=""
                         itemprop="url"
                      ><button type="button" class="btn btn-info"><i className="fa fa-plus "></i> Create Restaurant</button>
                    </a>
                    <br /><br /><br />
                    <a
                        className="brd-rd3 "
                          href="/CreateEvent"
                        title=""
                         itemprop="url"
                      ><button type="button" class="btn btn-warning"><i className="fa fa-plus "></i> Create Event</button>
                    </a>
              
                    </div>
                  </div>
                </TabPanel>
             
            
                <TabPanel id="users">
                  <div
                    className="tab-pane"
                    id="v-pills-profile"
                    role="tabpanel"
                    aria-labelledby="v-pills-profile-tab"
                  >
                    <div className="tabs-wrp brd-rd5">
                     
                      <a
                        className="brd-rd3 "
                          href="/CreateUser/user"
                        title=""
                         itemprop="url"
                      ><button type="button" class="btn btn-success"><i className="fa fa-plus "></i> Create User</button>
                    </a>
                    <br />
                    <br />
                    <h4 itemprop="headline">User List</h4>
                      <div className="booking-table table-hover">
                        <table>
                          <thead>
                            <tr>
                              <th>User Name</th>
                              <th>Email</th>
                              <th>Status</th>
                              <th></th>
                            </tr>
                          </thead>
                          {this.userList()}
                        </table>
                      </div>
                    </div>
                  </div>
                </TabPanel>


                <TabPanel>
                  <div
                    className="tab-pane"
                    id="v-pills-shortlist"
                    role="tabpanel"
                    aria-labelledby="v-pills-settings-tab"
                  >
                    <br />
                      <a
                        className="brd-rd3 "
                          href="/CreateRestaurant"
                        title=""
                         itemprop="url"
                      ><button type="button" class="btn btn-success"><i className="fa fa-plus "></i> Create Restaurant</button>
                    </a>
                    <div className="tabs-wrp brd-rd5">
                      
                      <h4 itemprop="headline">Restaurants</h4>
                    
                    {this.restaurantList()}
                                        
                      <div className="pagination-wrapper text-center style2">
                        <nav className="pt-60">
                          <ul className="pagination d-flex justify-content-center mb-0">
                            <li className="prev-page">
                              <a href="javascript:void(0)">
                                <i className="fa fa-angle-left"></i>Prev
                              </a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">1</a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">2</a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">3</a>
                            </li>
                            <li className="page-on">......</li>
                            <li>
                              <a href="javascript:void(0)">28</a>
                            </li>
                            <li className="next-page">
                              <a href="javascript:void(0)">
                                Next<i className="fa fa-angle-right"></i>
                              </a>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                </TabPanel>

             
                <TabPanel>

                <div
                      className="tab-pane"
                      id="v-pills-order"
                      role="tabpanel"
                      aria-labelledby="v-pills-settings-tab"
                    >
                      <div className="tabs-wrp brd-rd5">
                        <h4 itemprop="headline">Event List</h4>
                      
                        <div className="order-list">
                        {this.eventList()}
                        </div>
                      </div>
                      <div className="pagination-wrapper text-center style2">
                                          <nav className="pt-60">
                                            <ul className="pagination d-flex justify-content-center mb-0">
                                              <li className="prev-page">
                                                <a href="javascript:void(0)">
                                                  <i className="fa fa-angle-left"></i>Prev
                                                </a>
                                              </li>
                                              <li>
                                                <a href="javascript:void(0)">1</a>
                                              </li>
                                              <li>
                                                <a href="javascript:void(0)">2</a>
                                              </li>
                                              <li>
                                                <a href="javascript:void(0)">3</a>
                                              </li>
                                              <li className="page-on">......</li>
                                              <li>
                                                <a href="javascript:void(0)">28</a>
                                              </li>
                                              <li className="next-page">
                                                <a href="javascript:void(0)">
                                                  Next<i className="fa fa-angle-right"></i>
                                                </a>
                                              </li>
                                            </ul>
                                          </nav>
                                        </div>
                    </div>                               
                </TabPanel>
         

                
                <TabPanel id="reviews">
                  <div
                    className="tab-pane"
                    id="v-pills-messages"
                    role="tabpanel"
                    aria-labelledby="v-pills-messages-tab"
                  >
                    <div className="tabs-wrp brd-rd5">
                      <h4 itemprop="headline">Reviews</h4>
                      <div className="select-wrap-inner">
                        <div className="select-wrp2">
                          <select>
                            <option>New Reviews</option>
                            <option>Old Reviews</option>
                            <option>Popular Reviews</option>
                          </select>
                        </div>
                        <div className="select-wrp2">
                          <select>
                            <option>Select Date Range</option>
                            <option>Select Date Range</option>
                            <option>Select Date Range</option>
                          </select>
                        </div>
                      </div>
                      <div className="review-list">
                        {this.reviewList()}
                     
                        
                      </div>
                    </div>
                  </div>
                </TabPanel>

                <TabPanel id="seetings">
                  <div
                    className="tab-pane"
                    id="v-pills-account"
                    role="tabpanel"
                    aria-labelledby="v-pills-settings-tab"
                  >
                    <div className="tabs-wrp account-settings brd-rd5">
                      <h4 itemprop="headline">ACCOUNT INFO, Current Role: {this.state.loggedUser.role}</h4>
                      <div className="account-settings-inner">
                        <div className="row">
                          <div className="col-md-4 col-sm-4 col-lg-4">
                            <div className="profile-info text-center">
                              <div className="profile-thumb brd-rd50">
                              <img
                          className="brd-rd50"
                          src="assets/images/resources/profile-thumb5.jpg"
                          alt="user-avatar.jpg"
                          itemprop="image"
                        />
                              </div>
                           
                             
                              <div className="default-img-lst">
                               
                             
                             
                             
                              </div>
                            </div>
                          </div>
                          <div className="col-md-8 col-sm-8 col-lg-8">
                            <div className="profile-info-form-wrap">
                              <form className="profile-info-form">
                                <div className="row mrg20">
                                  <div className="col-md-12 col-sm-12 col-lg-12">
                                    <label>
                                      Complete Name <sup></sup>
                                    </label>
                                    <input
                                      className="brd-rd3"
                                      type="text"
                                      readOnly
                                      value={this.state.loggedUser.firstName +" "+ this.state.loggedUser.lastName }
                                    />
                                  </div>
                                  <div className="col-md-12 col-sm-12 col-lg-12">
                                    <label>
                                      Email Address <sup></sup>
                                    </label>
                                    <input
                                      className="brd-rd3"
                                      type="email"
                                      readOnly
                                      value={this.state.loggedUser.emailId}
                                    />
                                  </div>
                                  <div className="col-md-12 col-sm-12 col-lg-12">
                                    <label>
                                      Phone No <sup></sup>
                                    </label>
                                    <input
                                      className="brd-rd3"
                                      type="text"
                                      readOnly
                                      value={this.state.loggedUser.phone}
                                    />
                                  </div>
                               
                             
                               </div>
                              </form>
                            </div>
                          </div>
                          <div className="col-md-12 col-sm-12 col-lg-12">
                            <div className="loc-map2">
                              <div
                                className="loc-map brd-rd3"
                                id="loc-map"
                              ></div>

                              <div className="loc-srch">
                             
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPanel>
                
              </div>
            </div>
          </div>
        </Tabs>
      </div>
    );
  }
}
export default TabTwo;
