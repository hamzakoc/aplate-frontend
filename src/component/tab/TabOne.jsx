import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link } from "react-router-dom";
import "react-tabs/style/react-tabs.css";
class TabOne extends Component {
  render() {
    return (
      <Tabs>
        <TabList>
          <Tab>
            <div className="recipe-tabs">
              <span className=" text-capitalize fs-18  text-black">
             
                <i class="fa fa-fw fa-users fa-4x"></i>
                <br />
                New  Friends
              </span>
            </div>
          </Tab>
          <Tab> 
            <i class="fa fa-fw fa-cutlery fa-4x text-black" ></i>
            <br />
            <span className=" text-capitalize fs-18  text-black">Great food</span>
            
          </Tab>
          <Tab>
          <i class="fa fa-fw fa-coffee fa-4x"></i>
          <br />
            <span className=" text-capitalize fs-18  text-black">Delicious  Drink</span>
          </Tab>
          <Tab>
          <i class="fa fa-fw fa-globe fa-4x"></i>
          <br />
            <span className=" text-capitalize fs-18  text-black">Unique places</span>
          </Tab>
          <Tab>
          <i class="fa fa-fw fa-retweet fa-4x"></i>
          <br />
            <span className=" text-capitalize fs-18  text-black">Expand  network</span>
          </Tab>
        </TabList>
        <TabPanel>
          <div>
            <div
              className="tab-box-content parallax"
              style={{
                backgroundImage:
                  "url(" + "assets/images/resources/tab-pattern.jpg" + ")",
              }}
            >
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="tab-recipe-desc">
                    <h2 className="fs-30"> Make new friends</h2>
                 
                    <div className="recipe-ingre mt-30">
                      <h4 className="mb-20">Let's spend some best time together in a very beautiful environment...
                     </h4>
                       <h4 className="mb-20">
                       How about making new friends in a beautiful environment? Lets get connected, start making new friends and chatting.</h4>
                
                    </div>
                    <a
                      className="theme-btn-secondary mt-35"
                      href="/Events"
                    >
                      <i className="flaticon-chef-2"></i>Book A Table
                      <span></span>
                    </a>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="tab-recipe-img">
                    <figure className="mb-0">
                      <img src="assets/images/tab-img.jpg" alt="" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
       
          </div>
        </TabPanel>
        <TabPanel>
          <div>
            <div
              className="tab-box-content parallax"
              style={{
                backgroundImage:
                  "url(" + "assets/images/resources/tab-pattern.jpg" + ")",
              }}
            >
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="tab-recipe-desc">
                    <h2 className="fs-30 mb-2">
                    Few things are as important or enjoyable as a good meal.
                    </h2>
                    <div className="recipe-meta d-flex align-items-center">
                      <ul className="m-0 p-0 list-unstyled d-flex">
                    
                      </ul>
                      <span className="text-gray fs-16">
                        
                      </span>
                    </div>
                    <div className="recipe-ingre mt-30">
                      <h4 className="fs-22 mb-20">Food brings us together, gives us strength throughout the day, and is one of our most common bonds...
                      <br /><br /> Book a table now to make new friends and eat delicious food..</h4>
                  
                    </div>
                    <a
                      className="theme-btn-secondary mt-35"
                      href="/Events"
                    >
                      <i className="flaticon-chef-2"></i>Book A Table
                      <span></span>
                    </a>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="tab-recipe-img">
                    <figure>
                      <img src="assets/images/tab-img2.jpg" alt="" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
           
          </div>
        </TabPanel>
        <TabPanel>
          <div className="show active">
            <div
              className="tab-box-content parallax"
              style={{
                backgroundImage:
                  "url(" + "assets/images/resources/tab-pattern.jpg" + ")",
              }}
            >
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="tab-recipe-desc">
                    <h2 className="fs-30 mb-2">How about tasting the national drink of a country you have never visited?</h2>
                    <div className="recipe-meta d-flex align-items-center">
                      <ul className="m-0 p-0 list-unstyled d-flex">
                      
                      </ul>
                      <span className="text-gray fs-16">
                       
                      </span>
                    </div>
                    <div className="recipe-ingre mt-30">
                      <h4 className="fs-22 mb-2">It's hard to imagine a winter without a hot cup of coffee or a summer without a cold drink. 
                      <br /><br />
              </h4>
                 
                        <h4 className="fs-18 mb-2">
                          Whatever your drink of choice, how about the perfect excuse to indulge in lots of drinks throughout the day?
                        </h4>
       
                    </div>
                    <a
                      className="theme-btn-secondary mt-35"
                      href="/Events"
                    >
                      <i className="flaticon-chef-2"></i>Book A Table
                      <span></span>
                    </a>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="tab-recipe-img">
                    <figure>
                      <img src="assets/images/tab-img3.jpg" alt="" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-lower-content">
              <div className="row">
               
              
               
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div>
            <div
              className="tab-box-content parallax"
              style={{
                backgroundImage:
                  "url(" + "assets/images/resources/tab-pattern.jpg" + ")",
              }}
            >
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="tab-recipe-desc">
                    <h2 className="fs-30 mb-2">How about going to a unique place?</h2>
                    <div className="recipe-meta d-flex align-items-center">
                     
                      
                    </div>
                    <div className="recipe-ingre mt-30">
                      <h4 className="fs-22 mb-20">How about discovering restaurants that not only meet our nutritional needs, 
                      but also meet our needs such as having a good time, relaxing and socializing?</h4>
                     
                    </div>
                    <a
                      className="theme-btn-secondary mt-35"
                      href="/Events"
                    >
                      <i className="flaticon-chef-2"></i>Book A Table
                      <span></span>
                    </a>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="tab-recipe-img">
                    <figure>
                      <img src="assets/images/tab-img4.jpg" alt="" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
      
          </div>
        </TabPanel>
        <TabPanel>
          <div>
            <div
              className="tab-box-content parallax"
              style={{
                backgroundImage:
                  "url(" + "assets/images/resources/tab-pattern.jpg" + ")",
              }}
            >
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="tab-recipe-desc">
                    <h2 className="fs-30 mb-2">Opportunity to gain new networks.</h2>
                    <div className="recipe-meta d-flex align-items-center">
                     
                   
                    </div>
                    <div className="recipe-ingre mt-30">
                      <h4 className="fs-22 mb-20">It will be good way  to physically participate in events, 
                      interact with new people and create bilateral value.</h4>
                   
                    </div>
                    <a
                      className="theme-btn-secondary mt-35"
                      href="/Events"
                    >
                      <i className="flaticon-chef-2"></i>Book a table
                      <span></span>
                    </a>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="tab-recipe-img">
                    <figure>
                      <img src="assets/images/tab-img5.jpg" alt="" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
      
          </div>
        </TabPanel>
      </Tabs>
    );
  }
}
export default TabOne;
