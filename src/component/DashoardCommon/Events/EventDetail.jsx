import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Header from "../../header/Header";
import Footer from "../../footer/Footer";
import Banner from "../../header/Banner";
import { ReactComponent as Login } from "../../../svg/login.svg";
import axios from 'axios';
import { ReactComponent as Restaurant } from "../../../svg/restaurant.svg";
import { ReactComponent as Clock } from "../../../svg/wall-clock.svg";
import { ReactComponent as Reload } from "../../../svg/reload.svg";
import { ReactComponent as Chef } from "../../../svg/chef2.svg";
import WOW from "wowjs";
import Moment from 'moment';

//Local
// const base_url = 'http://localhost:5000/api/';



const base_url = 'https://aplate-api.herokuapp.com/api/';







const Reviews= props=>(
  <div className="woocommerce-Reviews mt-5">
  <img src="/assets/images/commentIcon.png" alt="product" width={50}/>
  <div className="comment-text">
    <div className="comment-date d-flex justify-content-between">
      <div className="comment-1">
       
        <span className="theme-color">{props.reviews.created_at}</span>
      </div>
  
    </div>
    <p>
 {props.reviews.comment}
    </p>
  </div>
</div>
)


class EventDetail extends Component {



  constructor(props) {
    super(props);

    this.state = {
      id:'',
      eventName: '',
      eventDate: '',
      city:'',
      seat:'',
      desciription: '',      
      foodOption: '',
      restaurant: '',
      eventPhoto: '',
      optionalImage: '',
      createdAt:'',
      registeredUser:[],
      reviews:[],
      event:[],
      comment:'',
      signedRestaurantId:'',
      bookingStatus:false,
      postedRestaurantName:'',
      postedRestaurantDesc:''
    }
}


componentDidMount = () => {
  axios.get(base_url+"events/" + this.props.match.params.id)
      .then(response => {
          this.setState({
            id:response.data._id,
            eventName: response.data.eventName,
            eventDate: response.data.eventDate,
            desciription: response.data.desciription,
            city: response.data.city,
            seat: response.data.seat,
            foodOption: response.data.foodOption,
            restaurant: response.data.restaurant,
            reviews:response.data.reviews,
            registeredUser:response.data.registeredUser,
            eventPhoto: response.data.eventPhoto.data,
            optionalImage: response.data.optionalImage.data,
            createdAt:response.data.createdAt,
            signedRestaurantId:response.data.restaurantId
          })

          console.log(response.data)
          
        axios.get(base_url+"restaurants/" + response.data.restaurantId)
        .then(response => {
          
                this.setState({
                    postedRestaurantName: response.data.username,
                    postedRestaurantDesc: response.data.about

                })
                console.log(response.data)
                
            
  })
  .catch((error) => {
      console.log(error);
  })

      })
      .catch(function (error) {
          console.log(error);
      })

  axios.get(base_url+"events/")
      .then(response => {
          if (response.data.length > 0) {
              this.setState({
                  event: response.data.map(event => event.eventName),
                  bookingStatus:true
              })
          }
      })
      .catch((error) => {
          console.log(error);
      })


 

      new WOW.WOW({
        live: false,
      }).init();
    
      console.log(this.state.bookingStatus)

}

reviewList() {
  return this.state.reviews.map(review => {
      return <Reviews className="card-deck card" reviews={review}  key={review._id} deleteReview={this.deleteReview} />;
  })
}



onChangeComment = (e) => {
  this.setState({
    comment: e.target.value
  })
}




registerEvent= (e) => {

  if ("userD" in localStorage) {
    const user =JSON.parse(localStorage.getItem("userD"))
    const userId= user.id
    const userRole= user.role

    console.log(this.state.id)
    console.log(JSON.parse(localStorage.getItem("userD")).id)
   
        if(userRole=="user"||userRole=="admin"||userRole=="moderator"){

          console.log("logged in")
          this.setState({bookingStatus:true})
          console.log(this.state.bookingStatus)

          const element=  document.getElementById('booking')
          element.innerHTML = "You have booked a Table"
          element.setAttribute( 'class', 'p-3 mb-2 bg-success text-white' );


          setTimeout(() => {
            const element=  document.getElementById('booking')
            element.innerHTML = ""
            element.setAttribute( 'class', '' );
          }, 3000);
           
              const register = {
                eventId: this.state.id,
                userId: JSON.parse(localStorage.getItem("userD")).id,

              }
  
            axios.post(base_url+"events/register", register)
              .then(res => console.log(res.data));

            }else{
              this.setState({bookingStatus:true})
              console.log(this.state.bookingStatus)
            }

      
}else{
     const element=  document.getElementById('booking')
     element.innerHTML = "Login in to book a table"
     element.setAttribute( 'class', 'p-3 mb-2 bg-danger text-white' );



          setTimeout(() => {
            const element=  document.getElementById('booking')
            element.innerHTML = ""
            element.setAttribute( 'class', '' );

          }, 3000);
          
    
     
}


}




onSubmitReview = (e) => {


  if ("userD" in localStorage) {
    const user =JSON.parse(localStorage.getItem("userD"))
    const userId= user.id
    const userRole= user.role

  
        if(userRole=="user"||userRole=="admin"||userRole=="moderator"){
          
              const comments = {
                eventId: this.state.id,
                userId: JSON.parse(localStorage.getItem("userD")).id,
                comment: this.state.comment

               }
  
          axios.post(base_url+"events/comment", comments)
        .then(res => console.log(res.data));
        }else{
       
          const postReview=  document.getElementById('postReview')
          postReview.innerHTML = "Login in to book a table"
          postReview.setAttribute( 'class', 'p-3 mb-2 bg-danger text-white' );
     
     
               setTimeout(() => {
                
                 const postReview=  document.getElementById('booking')
                 postReview.innerHTML = ""
                 postReview.setAttribute( 'class', '' );
               }, 3000);
        }

}


}


  render() {

    const { bookingStatus } = this.state;

    return (
      <React.Fragment>
        <Header />
        {/* <!-- Breadcrumbs --> */}
        <br /><br /><br />
        <Banner title="Event details" />
        <main>
        <section className="pt-110 pb-60">
        <div className="container">
          <div className="recipe-detail-box position-relative">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div
                  className="recipe-detail-img wow fadeInLeft"
                  data-wow-delay="0.5s"
                >
                   <img src={`data:${this.state.eventPhoto};base64, 
                   ${Buffer.from(this.state.eventPhoto).toString('base64')}`}
                    alt="" width={300} />


                  <img
                    className="img-fluid"
                    src="assets/images/events/event8.jpg"
                    alt=""
                    width={300}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="recipe-quick-info">
                  <h3 className="fs-45 mb-2" >{this.state.eventName}</h3>
                  <div className="recipe-quick-meta">
                    <span>
                      Published on{" "}
                      <strong className="theme-color">{Moment(this.state.createdAt).format('d MMM yy')}</strong>{" "}
                    </span>
                    <span>in {this.state.city} </span>
                   
                  </div>
                  <div className="recipe-prep-box bg-theme d-sm-flex justify-content-between flex-wrap position-relative">
                    <div className="prep-icon-box d-flex align-items-center">
                      <Reload />
                      <div className="pl-2">
                        <span className="d-block fs-16"></span>
                        <strong className="text-white fs-20">{Moment(this.state.eventDate).format('d MMM yy')}</strong>
                      </div>
                    </div>
                    <div className="prep-icon-box d-flex align-items-center">
                      <Clock />
                      <div className="pl-2">
                        <span className="d-block fs-14 fs-16"></span>
                        <strong className="text-white fs-20">{Moment(this.state.eventDate).format('H : mm A')}</strong>
                      </div>
                    </div>
                    <div className="prep-icon-box d-flex align-items-center">
                      <Chef />
                      <div className="pl-2">
                        <span className="d-block fs-16"> </span>
                        <strong className="text-white fs-20">{this.state.restaurant}</strong>
                      </div>
                    </div>
                    <div className="prep-icon-box d-flex align-items-center">
                      <Restaurant />
                      <div className="pl-2">
                        <strong className="text-white fs-20">{this.state.seat}</strong>
                      </div>
                    </div>
                  </div>
           <br /> <br /><br />

                  <Link className="theme-btn-secondary" to="#" title="" onClick={this.registerEvent}>
                  Book a table<span> </span>
                </Link>
                 <div id="booking"></div> 

                  <ul className="contact-social list-unstyled d-flex mt-30 mb-0">
                    <li>
                      <a
                        href="javascript:void(0)"
                        className="text-white d-inline-block text-center"
                        style={{ backgroundColor: "#365dce" }}
                      >
                        <i className="fa fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0)"
                        className="text-white d-inline-block text-center"
                        style={{ backgroundColor: "#e62d31" }}
                      >
                        <i className="fa fa-google-plus"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0)"
                        className="text-white d-inline-block text-center"
                        style={{ backgroundColor: "#36c8e3" }}
                      >
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0)"
                        className="text-white d-inline-block text-center"
                        style={{ backgroundColor: "#0f9cd6" }}
                      >
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
          {/* RecipeDetail */}
          <section className="pb-110">
            <div className="container">
              <div className="row">
                <div className="col-lg-10 mx-auto">
                  <div className="recipe-detail-content">
                    <p className="fs-16">
                    {this.state.desciription}
                    </p>

                    

                    <div className="meal-cooking">
                      <div className="row">
                        <div className="col-md-5">
                          <h6 className="fs-38 mb-4">Food Options</h6>
                          <ul className="p-0 m-0 list-unstyled meal-indi">
                            <li>
                              <i className="fa fa-check"></i>{this.state.foodOption}
                            </li>
                                     
                          
                          </ul>
                        </div>
                        <div className="col-md-7">
                          <div className="vid-area">
                            <figure className="mb-0 position-relative">
                           
                           
                            </figure>
                          </div>
                        </div>
                      </div>
             
                    </div>

                    <div className="recipe-gal pt-60 pb-70">
                      <div className="row">
                        <div className="col-md-4">
                        
                        <img src={`data:${this.state.optionalImage};base64, 
                              ${Buffer.from(this.state.optionalImage).toString('base64')}`}
                                alt="" width={300} />
                      
                        </div>
                   
                     
                      
                      
                      </div>
                    </div>

                    <div className="about-chef-box position-relative">
                      <div
                        className="chef-bg wow slideInLeft"
                        data-wow-duration="1s"
                        data-wow-delay="0s"
                        style={{
                          backgroundImage:
                            "url(" +
                            "assets/images/resources/chef-pattern.jpg" +
                            ")",
                        }}
                      ></div>
                      <div className="row align-items-center">
                        <div className="col-md-5">
                          <div className="chef-avatar">
                            <img
                              src="assets/images/restaurants/res3.png"
                              alt=""
                              width={300}
                            />
                          </div>
                        </div>
                        <div className="col-md-7">
                          <div className="recipe-chef">
                            <span className="text-theme theme-color font-weight-bold text-uppercase">
                              Hosting By
                            </span>
                            <h4 className="fs-26 text-uppercase">
                              <a href={"/RestaurantDetail/"+this.state.signedRestaurantId}>{this.state.postedRestaurantName}</a>
                            </h4>
                            <p>
                            {this.state.postedRestaurantDesc}
                            </p>
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
                                  <i className="fa fa-instagram"></i>
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
                          
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
               {this.reviewList()}
                    <div className="leave-review bg-gray">
                      <div className="review-title d-sm-flex justify-content-between mb-4 align-items-center">
                        <h4 className="mb-0">
                          Write review
                        </h4>
                     
                      </div>
                      <form id="testformid" onClick={this.onSubmitReview}>
                        <div className="row">
                          <div className="col-sm-3">
                          </div>
                     
                        </div>
                        <div className="row">
                      
                          <textarea 
                          form ="testformid"
                           name="taname"
                            id="taid" 
                            cols="100" 
                            rows="5" 
                            wrap="soft"
                            value={this.state.comment}
                            onChange={this.onChangeComment}                            
                            ></textarea>
                        </div>
                        <p id="postReview"></p>
                        <div className="row">
                          <div className="col-sm-3"></div>
                          <div className="col-sm-9">
                            <button
                              className="theme-btn-secondary mt-3"
                              type="submit"
                            >
                              Submit<span></span>
                            </button>
                          </div>
                        </div>
                      </form>
                     
                      <div className="signup-options d-flex justify-content-between align-items-center">
                        <a
                          href="/Register"
                          className="theme-btn-secondary"
                        >
                          Create an Account<span></span>
                        </a>
                        <div className="social-connect d-flex align-items-center">
                          <span className="mr-3 fs-18">Connect with Us:</span>
                          <ul className="contact-social list-unstyled d-flex mb-0">
                            <li>
                              <a
                                href="javascript:void(0)"
                                className="text-white d-inline-block text-center"
                                style={{ backgroundColor: "#365dce" }}
                              >
                                <i className="fa fa-facebook-f"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="javascript:void(0)"
                                className="text-white d-inline-block text-center"
                                style={{ backgroundColor: "#e62d31" }}
                              >
                                <i className="fa fa-google-plus"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="javascript:void(0)"
                                className="text-white d-inline-block text-center"
                                style={{ backgroundColor: "#36c9e4" }}
                              >
                                <i className="fa fa-twitter"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="javascript:void(0)"
                                className="text-white d-inline-block text-center"
                                style={{ backgroundColor: "#0f9cd6" }}
                              >
                                <i className="fa fa-linkedin"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}
export default EventDetail;
