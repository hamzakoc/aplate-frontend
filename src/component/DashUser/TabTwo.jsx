import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { ReactComponent as Motor } from "../../svg/motorbike.svg";
import axios from 'axios';

//Local
// const base_url = 'http://localhost:5000/api/';

//Heroku
const base_url = 'https://aplate-api.herokuapp.com/api/';




const Booking=props=>(      
   <tr>

<td>{props.events.restaurant}</td>
  <td>
    <h5 itemprop="headline">
      <a href="#" title="" itemprop="url">
        {props.events.eventName}
      </a>
    </h5>
  </td>
  <td>{props.events.eventDate}</td>
  

 
</tr>)


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

    this.state = {
      loggedUser:[],registeredEvents:[],givenReviews:[]
    }
  }


componentDidMount = () => {

  if ("userD" in localStorage) {
    const user =JSON.parse(localStorage.getItem("userD"))
    const userDetail = user.id
    console.log(userDetail)
    
      axios.get(base_url+"admins/"+userDetail)
          .then(response => {

            const loggedUser = response.data
            this.setState({ loggedUser })

          })
          .catch(function (error) {
              console.log(error);
          })


  ///Get registered events
  axios.get(base_url+"events/registeredevents/"+userDetail)
  .then(response => {
  
          const registeredEvents = response.data
      this.setState({ registeredEvents })
    
  })

  .catch((error) => {
      console.log(error);
  })

///Get reviews given to restaurants' event populated by db
  axios.get(base_url+"events/givenreviews/"+userDetail)
  .then(response => {
    console.log("Given reviews")
    
      const givenReviewsByUser = response.data.map((element) => {
        return {...element, reviews: element.reviews.filter((subElement) => subElement.user._id ==userDetail)}
      })

      const givenReviews = givenReviewsByUser
      console.log(givenReviewsByUser)

      this.setState({ givenReviews })
    
  })

  .catch((error) => {
      console.log(error);
  })


} else {
    window.location.href="/Login"
}



}

signOut(){
  localStorage.clear()
  setTimeout(() => {
    window.location.href="/"
  }, 1000);
  
}



bookingList() {
  return this.state.registeredEvents.map(event => {
      return <Booking className="card-deck card" events={event}  key={event._id}  />;
  })
}

reviewList() {
  return this.state.givenReviews.map(review => {
      return <Reviews className="card-deck card" reviews={review}  key={review._id} />;
  })
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
                      <div className="user-info red-bg">
                        <img
                          className="brd-rd50"
                          src="assets/images/resources/profile-thumb1.jpg"
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
                          <a href="#my-bookings">
                            <i className="fa fa-file-text"></i> MY BOOKINGS
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
                            <i className="fa fa-comments"></i> MY REVIEWS
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
                            <i className="fa fa-cog"></i> ACCOUNT INFO
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
                        <h4 itemprop="headline">  {this.state.loggedUser.firstName}, welcome to your account </h4>
                                                <img
                          src="assets/images/resource/welcome-note-img.png"
                          alt="welcome-note-img.png"
                          itemprop="image"
                        />
                     
                      
                      </div>
                  
                    </div>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div
                    className="tab-pane"
                    id="v-pills-profile"
                    role="tabpanel"
                    aria-labelledby="v-pills-profile-tab"
                  >
                    <div className="tabs-wrp brd-rd5">
                      <h4 itemprop="headline">MY BOOKINGS</h4>
                     
                      <div className="booking-table">
                        <table>
                          <thead>
                            <tr>
                              <th>RESTAURANT NAME</th>
                              <th>EVENT NAME</th>
                              <th>DATE</th>
                            </tr>
                          </thead>
                          <tbody>
                     {this.bookingList()}
                                                           
                       
                          </tbody>
                        </table>
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
                      <h4 itemprop="headline">MY REVIEWS</h4>
                   
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
                      <h4 itemprop="headline">ACCOUNT INFO</h4>
                      <div className="account-settings-inner">
                        <div className="row">
                          <div className="col-md-4 col-sm-4 col-lg-4">
                            <div className="profile-info text-center">
                              <div className="profile-thumb brd-rd50">
                                <img
                                  id="profile-display"
                                  src="assets/images/resources/profile-thumb1.jpg"
                                  alt="profile-img1.jpg"
                                  itemprop="image"
                                />
                              </div>
                            
                             
                           
                            </div>
                          </div>
                          <div className="col-md-8 col-sm-8 col-lg-8">
                            <div className="profile-info-form-wrap">
                              <form className="profile-info-form">
                                <div className="row mrg20">
                                  <div className="col-md-12 col-sm-12 col-lg-12">
                                    <label>
                                      Complete Name
                                    </label>
                                    <input
                                      className="brd-rd3"
                                      type="text"
                                      value={this.state.loggedUser.firstName+" "+this.state.loggedUser.firstName}
                                      readOnly
                                    />
                                  </div>
                                  <div className="col-md-12 col-sm-12 col-lg-12">
                                    <label>
                                      Email Address 
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
