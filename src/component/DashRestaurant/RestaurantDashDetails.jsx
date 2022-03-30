import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
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

const Guests = props=>(  

<tr>
  <td>{props.guests.eventName}</td>
  <td>{props.guests.eventDate}</td>
  <td>{props.guests.registeredUser.map(users=><ul><i>{users.emailId}</i></ul>)}</td>
 
</tr>


)
const Reviews = props=>(
   <div className="review-box brd-rd5">
<h4 itemprop="headline">
  <a href="#" title="" itemprop="url">
    Event Name: 
    {props.reviews.eventName}
    <hr />
  </a>
</h4>

<p itemprop="description">
{props.reviews.reviews.map(rev=><>  <img
    className="brd-rd50"
    src="/assets/images/commentIcon.png" width={50}
    alt="reviewr-img1.jpg"
    itemprop="image"
  /><p>{rev.comment}</p>  <p>{rev.created_at}</p><hr /></>)}
</p>
<div className="review-info">
 
  <div className="review-info-inner">
    
   
  </div>
</div>
</div>)




class TabTwo extends Component {

  constructor(props) {
    super(props);
    this.state = { events: [],loggedUser:[], guests:[], reviews:[], signedLogo:[]};
      
  }

  componentDidMount() {

//LoggedUser

if ("userD" in localStorage) {
  const userSesion = JSON.parse(localStorage.getItem("userD"))
  const userDetail = userSesion.id


  //Signed restaurant
          axios.get(base_url+"restaurants/"+userDetail)
          .then(response => {
            console.log("Signed restaurant")
              console.log(response.data)
              const loggedUser = response.data
              this.setState({ loggedUser })
              this.setState({ signedLogo: response.data.logo.data })

              
              console.log(this.state.logo + "logo")
            
          })

          .catch((error) => {
              console.log(error);
          })



          axios.get(base_url+"events/createdbyrest/"+userDetail)
          .then(response => { 
            
            console.log("Events by restaurant")
              console.log(response.data)
              const events = response.data
              this.setState({ events })
            
          })
  
          .catch((error) => {
              console.log(error);
          })

  ///Get registered users populated by db
          axios.get(base_url+"events/guests/"+userDetail)
          .then(response => {
            console.log("Registered Users")
              console.log(response.data)
            
              const guests = response.data
              this.setState({ guests })
            
          })
  
          .catch((error) => {
              console.log(error);
          })

      ///Get reviews given to restaurants' event populated by db
          axios.get(base_url+"events/reviewsforrest/"+userDetail)
          .then(response => {
            console.log("Given reviews")
              console.log(response.data)
            
              const reviews = response.data
              this.setState({ reviews })
            
          })
  
          .catch((error) => {
              console.log(error);
          })





        }



             
  }


eventList() {
    return this.state.events.map(event => {
        return <Events className="card-deck card" events={event}  key={event._id} deleteEvent={this.deleteEvent} />;
    })
}

guestList() {
  return this.state.guests.map(guest => {
      return <Guests className="card-deck card" guests={guest}  key={guest._id}  />;
  })
}

reviewList() {
  return this.state.reviews.map(review => {
      return <Reviews className="card-deck card" reviews={review}  key={review._id} />;
  })
}


  deleteEvent(id) {

    axios.delete(base_url + id)
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
                      <div className="user-info green-bg">
                        <img
                          className="brd-rd50"
                          src="/assets/images/commentIcon.png"
                          alt="user-avatar.jpg"
                          itemprop="image"
                          width={100}
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
                            <i className="fa fa-dashboard"></i> Dashboard
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
                          <a href="#my-orders">
                            <i className="fa fa-shopping-basket"></i> Event List
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
                          <a href="#shortlists">
                            <i className="fa fa-heart"></i> Event's Guests
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
                            <i className="fa fa-comments"></i> Event Review
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
                       
                        <img
                          src="assets/images/resource/welcome-note-img.png"
                          alt="welcome-note-img.png"
                          itemprop="image"
                        />
                      
                      </div>
                

                          <a
                            className="brd-rd3  red-bg"
                            href="/ResCreateEvent"
                            title=""
                            itemprop="url"
                          ><button type="button" class="btn btn-success"><i className="fa fa-plus "></i> Create Event</button>
                           </a>
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
                <TabPanel>
                  <div
                    className="tab-panel"
                    id="v-pills-statement"
                    role="tabpanel"
                    aria-labelledby="v-pills-settings-tab"
                  >
                    <div className="tabs-wrp brd-rd5">
                      <h4 itemprop="headline">Events Guests</h4>
                  
                      <div className="statement-table">
                        <table>
                          <thead>
                            <tr>
                              <th>EVENT NAME</th>
                              <th>DATE</th>
                              <th>REGISTERED USERS</th>
                            </tr>
                          </thead>
                          <tbody>
                          {this.guestList()}
                                                         
                          </tbody>
                        </table>
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
                  </div>
                </TabPanel>

                <TabPanel>
                  <div
                    className="tab-pane"
                    id="v-pills-messages"
                    role="tabpanel"
                    aria-labelledby="v-pills-messages-tab"
                  >
                    <div className="tabs-wrp brd-rd5">
                      <h4 itemprop="headline">EVENT REVIEWS</h4>
                    
                      <div className="review-list">
                       {this.reviewList()}
                                          
                      </div>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div
                    className="tab-pane"
                    id="v-pills-account"
                    role="tabpanel"
                    aria-labelledby="v-pills-settings-tab"
                  >
                    <div className="tabs-wrp account-settings brd-rd5">
                      <h4 itemprop="headline">Account Info</h4>
                      <div className="account-settings-inner">
                        <div className="row">
                          <div className="col-md-4 col-sm-4 col-lg-4">
                            <div className="profile-info text-center">
                             
                     
                            </div>
                          </div>
                          <div className="col-md-8 col-sm-8 col-lg-8">
                            <div className="profile-info-form-wrap">
                              <form className="profile-info-form">
                                <div className="row mrg20">
                                  <div className="col-md-12 col-sm-12 col-lg-12">
                                    <label>
                                      Full Name
                                    </label>
                                    <input
                                      value={this.state.loggedUser.fullName}
                                      className="brd-rd3"
                                      type="text"
                                      readOnly
                                    />
                                  </div>
                                  <div className="col-md-12 col-sm-12 col-lg-12">
                                    <label>
                                      Email Address <sup>*</sup>
                                    </label>
                                    <input
                                      className="brd-rd3"
                                      type="email"
                                      value={this.state.loggedUser.emailId}
                                      readOnly
                                    />
                                  </div>
                                  <div className="col-md-12 col-sm-12 col-lg-12">
                                    <label>
                                      Phone No <sup>*</sup>
                                    </label>
                                    <input
                                      className="brd-rd3"
                                      type="text"
                                      value={this.state.loggedUser.phone}
                                      readOnly
                                    />
                                  </div>
                                  <div className="col-md-12 col-sm-12 col-lg-12">
                                    <label>
                                      Address <sup>*</sup>
                                    </label>
                                    <input
                                      className="brd-rd3"
                                      type="text"
                                      value={this.state.loggedUser.address}
                                      readOnly
                                    />
                                  </div>
                                
                            
                                  <div className="col-md-12 col-sm-12 col-lg-12">
                                    <label>
                                      City <sup>*</sup>
                                    </label>
                                    <input
                                      className="brd-rd3"
                                      type="text"
                                      value={this.state.loggedUser.city}
                                      readOnly
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
