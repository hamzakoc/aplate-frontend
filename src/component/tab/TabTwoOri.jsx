import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { ReactComponent as Motor } from "../../svg/motorbike.svg";

class TabTwo extends Component {
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
                          src="assets/images/user-avatar.jpg"
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
                             abc@email.com
                            </a>
                          </span>
                          <a
                            className="brd-rd3 sign-out-btn"
                            href="#"
                            title=""
                            itemprop="url"
                          >
                            <i className="fa fa-sign-out"></i> SIGN OUT
                          </a>
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
                          id="v-pills-order-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#v-pills-order"
                          type="button"
                          role="tab"
                          aria-controls="v-pills-order"
                          aria-selected="false"
                        >
                          <a href="#my-orders">
                            <i className="fa fa-shopping-basket"></i> MY ORDERS
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
                            <i className="fa fa-heart"></i> SHORTLISTS
                          </a>
                        </Tab>

                        <Tab
                          className="nav-link nav-style"
                          id="v-pills-statement-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#v-pills-statement"
                          type="button"
                          role="tab"
                          aria-controls="v-pills-statement"
                          aria-selected="false"
                        >
                          <a href="#statement">
                            <i className="fa fa-wpforms"></i> STATEMENT
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
                            <i className="fa fa-cog"></i> ACCOUNT SETTINGS
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
                        <p itemprop="description">
                          Things that get tricky are things like burgers and
                          fries, or things that are deep-fried. We do have a
                          couple of burger restaurants that are capable of doing
                          a good
                        </p>
                        <img
                          src="assets/images/resource/welcome-note-img.png"
                          alt="welcome-note-img.png"
                          itemprop="image"
                        />
                        <a
                          className="remove-noti"
                          href="#"
                          title=""
                          itemprop="url"
                        >
                          <img
                            src="assets/images/close-icon.png"
                            alt="close-icon.png"
                            itemprop="image"
                          />
                        </a>
                      </div>
                      <div className="dashboard-title">
                        <h4 itemprop="headline">SUGGESTED BRANCHES</h4>
                        <span>
                          Define{" "}
                          <a
                            className="red-clr"
                            href="#"
                            title=""
                            itemprop="url"
                          >
                            Search criteria
                          </a>{" "}
                          to search for specific
                        </span>
                      </div>
                      <div className="restaurants-list">
                        <div
                          className="featured-restaurant-box style3 brd-rd5 wow fadeInUp"
                          data-wow-delay="0.2s"
                        >
                          <div className="featured-restaurant-thumb">
                            <a href="#" title="" itemprop="url">
                              <img
                                src="assets/images/logo.png"
                                alt="restaurant-logo1-1.png"
                                itemprop="image"
                              />
                            </a>
                          </div>
                          <div className="featured-restaurant-info">
                            <span className="red-clr">
                              5th Avenue New York 68
                            </span>
                            <h4 itemprop="headline">
                              <a href="#" title="" itemprop="url">
                                New York Branch
                              </a>
                            </h4>
                            <ul className="post-meta">
                              <li>
                                <i className="fa fa-check-circle-o"></i> Min
                                order $50
                              </li>
                              <li>
                                <Motor /> 30 min
                              </li>
                            </ul>
                          </div>
                          <div className="view-menu-liks">
                            <span className="red-bg brd-rd4 post-likes">
                              <i className="fa fa-heart-o"></i> 12
                            </span>
                            <a
                              className="brd-rd3"
                              href="#"
                              title=""
                              itemprop="url"
                            >
                              View Menu
                            </a>
                          </div>
                        </div>
                        <div
                          className="featured-restaurant-box style3 brd-rd5 wow fadeInUp"
                          data-wow-delay="0.3s"
                        >
                          <div className="featured-restaurant-thumb">
                            <a href="#" title="" itemprop="url">
                              <img
                                src="assets/images/logo.png"
                                alt="restaurant-logo1-2.png"
                                itemprop="image"
                              />
                            </a>
                          </div>
                          <div className="featured-restaurant-info">
                            <span className="red-clr">
                              5th Avenue Washington DC
                            </span>
                            <h4 itemprop="headline">
                              <a href="#" title="" itemprop="url">
                                Washington Branch
                              </a>
                            </h4>
                            <ul className="post-meta">
                              <li>
                                <i className="fa fa-check-circle-o"></i> Min
                                order $40
                              </li>
                              <li>
                                <Motor /> 25 min
                              </li>
                            </ul>
                          </div>
                          <div className="view-menu-liks">
                            <span className="red-bg brd-rd4 post-likes">
                              <i className="fa fa-heart-o"></i> 20
                            </span>
                            <a
                              className="brd-rd3"
                              href="#"
                              title=""
                              itemprop="url"
                            >
                              View Menu
                            </a>
                          </div>
                        </div>
                        <div
                          className="featured-restaurant-box style3 brd-rd5 wow fadeInUp"
                          data-wow-delay="0.4s"
                        >
                          <div className="featured-restaurant-thumb">
                            <a href="#" title="" itemprop="url">
                              <img
                                src="assets/images/logo.png"
                                alt="restaurant-logo1-1.png"
                                itemprop="image"
                              />
                            </a>
                          </div>
                          <div className="featured-restaurant-info">
                            <span className="red-clr">
                              Araam Building New Jersey
                            </span>
                            <h4 itemprop="headline">
                              <a href="#" title="" itemprop="url">
                                New Jersey Branch
                              </a>
                            </h4>
                            <ul className="post-meta">
                              <li>
                                <i className="fa fa-check-circle-o"></i> Min
                                order $100
                              </li>
                              <li>
                                <Motor /> 20 min
                              </li>
                            </ul>
                          </div>
                          <div className="view-menu-liks">
                            <span className="red-bg brd-rd4 post-likes">
                              <i className="fa fa-heart-o"></i> 15
                            </span>
                            <a
                              className="brd-rd3"
                              href="#"
                              title=""
                              itemprop="url"
                            >
                              View Menu
                            </a>
                          </div>
                        </div>
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
                      <div className="select-wrap-inner">
                        <div className="select-wrp2">
                          <select>
                            <option>Select Booking Status</option>
                            <option>Select Booking Status</option>
                            <option>Select Booking Status</option>
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
                      <div className="booking-table">
                        <table>
                          <thead>
                            <tr>
                              <th>RESTAURANT NAME</th>
                              <th>DATE</th>
                              <th>STATUS</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <h5 itemprop="headline">
                                  <a href="#" title="" itemprop="url">
                                    Jet's Kitchen ( #8589 )
                                  </a>
                                </h5>
                              </td>
                              <td>Aug 17,2017</td>
                              <td>
                                <span className="brd-rd3 processing">
                                  PROCESSING
                                </span>{" "}
                                <a
                                  className="detail-link brd-rd50"
                                  href="#"
                                  title=""
                                  itemprop="url"
                                >
                                  <i className="fa fa-chain"></i>
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <h5 itemprop="headline">
                                  <a href="#" title="" itemprop="url">
                                    Jet's Kitchen ( #8589 )
                                  </a>
                                </h5>
                              </td>
                              <td>Aug 17,2017</td>
                              <td>
                                <span className="brd-rd3 processing">
                                  PROCESSING
                                </span>{" "}
                                <a
                                  className="detail-link brd-rd50"
                                  href="#"
                                  title=""
                                  itemprop="url"
                                >
                                  <i className="fa fa-chain"></i>
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <h5 itemprop="headline">
                                  <a href="#" title="" itemprop="url">
                                    Jet's Kitchen ( #8589 )
                                  </a>
                                </h5>
                              </td>
                              <td>Aug 17,2017</td>
                              <td>
                                <span className="brd-rd3 completed">
                                  COMPLETED
                                </span>{" "}
                                <a
                                  className="detail-link brd-rd50"
                                  href="#"
                                  title=""
                                  itemprop="url"
                                >
                                  <i className="fa fa-chain"></i>
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <h5 itemprop="headline">
                                  <a href="#" title="" itemprop="url">
                                    Jet's Kitchen ( #8589 )
                                  </a>
                                </h5>
                              </td>
                              <td>Aug 17,2017</td>
                              <td>
                                <span className="brd-rd3 processing">
                                  PROCESSING
                                </span>{" "}
                                <a
                                  className="detail-link brd-rd50"
                                  href="#"
                                  title=""
                                  itemprop="url"
                                >
                                  <i className="fa fa-chain"></i>
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <h5 itemprop="headline">
                                  <a href="#" title="" itemprop="url">
                                    Jet's Kitchen ( #8589 )
                                  </a>
                                </h5>
                              </td>
                              <td>Aug 17,2017</td>
                              <td>
                                <span className="brd-rd3 completed">
                                  COMPLETED
                                </span>{" "}
                                <a
                                  className="detail-link brd-rd50"
                                  href="#"
                                  title=""
                                  itemprop="url"
                                >
                                  <i className="fa fa-chain"></i>
                                </a>
                              </td>
                            </tr>
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
                        <div className="review-box brd-rd5">
                          <h4 itemprop="headline">
                            <a href="#" title="" itemprop="url">
                              RESTAURANT DEMO
                            </a>
                          </h4>
                          <div className="ratings">
                            <i className="fa fa-star on"></i>
                            <i className="fa fa-star on"></i>
                            <i className="fa fa-star on"></i>
                            <i className="fa fa-star off"></i>
                            <i className="fa fa-star off"></i>
                          </div>
                          <p itemprop="description">
                            FoodBakery order today. So great to be able to order
                            food and not have to talk to anyone.
                          </p>
                          <div className="review-info">
                            <img
                              className="brd-rd50"
                              src="assets/images/resources/reviewr-img1.jpg"
                              alt="reviewr-img1.jpg"
                              itemprop="image"
                            />
                            <div className="review-info-inner">
                              <h5 itemprop="headline">QLARK JAKSON</h5>
                              <i className="red-clr">2 months Ago</i>
                            </div>
                          </div>
                        </div>
                        <div className="review-box brd-rd5">
                          <h4 itemprop="headline">
                            <a href="#" title="" itemprop="url">
                              RESTAURANT DEMO
                            </a>
                          </h4>
                          <div className="ratings">
                            <i className="fa fa-star on"></i>
                            <i className="fa fa-star on"></i>
                            <i className="fa fa-star on"></i>
                            <i className="fa fa-star on"></i>
                            <i className="fa fa-star off"></i>
                          </div>
                          <p itemprop="description">
                            FoodBakery order today. So great to be able to order
                            food and not have to talk to anyone.
                          </p>
                          <div className="review-info">
                            <img
                              className="brd-rd50"
                              src="assets/images/resources/reviewr-img2.jpg"
                              alt="reviewr-img2.jpg"
                              itemprop="image"
                            />
                            <div className="review-info-inner">
                              <h5 itemprop="headline">QLARK JAKSON</h5>
                              <i className="red-clr">2 months Ago</i>
                            </div>
                          </div>
                        </div>
                        <div className="review-box brd-rd5">
                          <h4 itemprop="headline">
                            <a href="#" title="" itemprop="url">
                              RESTAURANT DEMO
                            </a>
                          </h4>
                          <div className="ratings">
                            <i className="fa fa-star on"></i>
                            <i className="fa fa-star on"></i>
                            <i className="fa fa-star on"></i>
                            <i className="fa fa-star on"></i>
                            <i className="fa fa-star on"></i>
                          </div>
                          <p itemprop="description">
                            FoodBakery order today. So great to be able to order
                            food and not have to talk to anyone.
                          </p>
                          <div className="review-info">
                            <img
                              className="brd-rd50"
                              src="assets/images/resources/reviewr-img2.jpg"
                              alt="reviewr-img3.jpg"
                              itemprop="image"
                            />
                            <div className="review-info-inner">
                              <h5 itemprop="headline">QLARK JAKSON</h5>
                              <i className="red-clr">2 months Ago</i>
                            </div>
                          </div>
                        </div>
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
                      <h4 itemprop="headline">MY ORDERS</h4>
                      <div className="select-wrap-inner">
                        <div className="select-wrp2">
                          <select>
                            <option>Select Orders Status</option>
                            <option>Select Orders Status</option>
                            <option>Select Orders Status</option>
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
                      <div className="order-list">
                        <div className="order-item brd-rd5">
                          <div className="order-thumb brd-rd5">
                            <a href="#" title="" itemprop="url">
                              <img
                                src="assets/images/resources/order-img1.jpg"
                                alt="order-img1.jpg"
                                itemprop="image"
                              />
                            </a>
                            <span className="post-rate yellow-bg brd-rd2">
                              <i className="fa fa-star-o"></i> 4.25
                            </span>
                          </div>
                          <div className="order-info">
                            <span className="red-clr">
                              5th Avenue New York 68
                            </span>
                            <h4 itemprop="headline">
                              <a href="#" title="" itemprop="url">
                                Maenaam Thai Restaurant
                              </a>
                            </h4>

                            <span className="price">$85.00</span>
                            <span className="processing brd-rd3">
                              PROCESSING
                            </span>
                            <a
                              className="brd-rd2"
                              href="#"
                              title=""
                              itemprop="url"
                            >
                              Order Detail
                            </a>
                          </div>
                        </div>
                        <div className="order-item brd-rd5">
                          <div className="order-thumb brd-rd5">
                            <a href="#" title="" itemprop="url">
                              <img
                                src="assets/images/resources/order-img2.jpg"
                                alt="order-img2.jpg"
                                itemprop="image"
                              />
                            </a>
                            <span className="post-rate yellow-bg brd-rd2">
                              <i className="fa fa-star-o"></i> 3.0
                            </span>
                          </div>
                          <div className="order-info">
                            <span className="red-clr">
                              5th Avenue New York 68
                            </span>
                            <h4 itemprop="headline">
                              <a href="#" title="" itemprop="url">
                                Maenaam Thai Restaurant
                              </a>
                            </h4>

                            <span className="price">$85.00</span>
                            <span className="completed brd-rd3">COMPLETED</span>
                            <a
                              className="brd-rd2"
                              href="#"
                              title=""
                              itemprop="url"
                            >
                              Order Detail
                            </a>
                          </div>
                        </div>
                        <div className="order-item brd-rd5">
                          <div className="order-thumb brd-rd5">
                            <a href="#" title="" itemprop="url">
                              <img
                                src="assets/images/resources/order-img3.jpg"
                                alt="order-img3.jpg"
                                itemprop="image"
                              />
                            </a>
                            <span className="post-rate yellow-bg brd-rd2">
                              <i className="fa fa-star-o"></i> 5.00
                            </span>
                          </div>
                          <div className="order-info">
                            <span className="red-clr">
                              5th Avenue New York 68
                            </span>
                            <h4 itemprop="headline">
                              <a href="#" title="" itemprop="url">
                                Maenaam Thai Restaurant
                              </a>
                            </h4>

                            <span className="price">$85.00</span>
                            <span className="completed brd-rd3">COMPLETED</span>
                            <a
                              className="brd-rd2"
                              href="#"
                              title=""
                              itemprop="url"
                            >
                              Order Detail
                            </a>
                          </div>
                        </div>
                        <div className="order-item brd-rd5">
                          <div className="order-thumb brd-rd5">
                            <a href="#" title="" itemprop="url">
                              <img
                                src="assets/images/resources/order-img4.jpg"
                                alt="order-img4.jpg"
                                itemprop="image"
                              />
                            </a>
                            <span className="post-rate yellow-bg brd-rd2">
                              <i className="fa fa-star-o"></i> 5.30
                            </span>
                          </div>
                          <div className="order-info">
                            <span className="red-clr">
                              5th Avenue New York 68
                            </span>
                            <h4 itemprop="headline">
                              <a href="#" title="" itemprop="url">
                                Maenaam Thai Restaurant
                              </a>
                            </h4>

                            <span className="price">$85.00</span>
                            <span className="completed brd-rd3">COMPLETED</span>
                            <a
                              className="brd-rd2"
                              href="#"
                              title=""
                              itemprop="url"
                            >
                              Order Detail
                            </a>
                          </div>
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
                  </div>
                </TabPanel>
                <TabPanel>
                  <div
                    className="tab-pane"
                    id="v-pills-shortlist"
                    role="tabpanel"
                    aria-labelledby="v-pills-settings-tab"
                  >
                    {" "}
                    <div className="tabs-wrp brd-rd5">
                      <h4 itemprop="headline">SHORTLISTS</h4>
                      <div className="restaurants-list">
                        <div className="featured-restaurant-box style3 brd-rd5">
                          <div className="featured-restaurant-thumb">
                            <a href="#" title="" itemprop="url">
                              <img
                                src="assets/images/logo.png"
                                alt="restaurant-logo1-1.png"
                                itemprop="image"
                              />
                            </a>
                          </div>
                          <div className="featured-restaurant-info">
                            <span className="red-clr">
                              5th Avenue New York 68
                            </span>
                            <h4 itemprop="headline">
                              <a href="#" title="" itemprop="url">
                                Domino's Pizza
                              </a>
                            </h4>
                            <ul className="post-meta">
                              <li>
                                <i className="fa fa-check-circle-o"></i> Min
                                order $50
                              </li>
                              <li>
                                <Motor /> 30min
                              </li>
                            </ul>
                          </div>
                          <div className="view-menu-liks">
                            <a
                              className="brd-rd3"
                              href="#"
                              title=""
                              itemprop="url"
                            >
                              View Menu
                            </a>
                          </div>
                        </div>
                        <div className="featured-restaurant-box style3 brd-rd5">
                          <div className="featured-restaurant-thumb">
                            <a href="#" title="" itemprop="url">
                              <img
                                src="assets/images/logo.png"
                                alt="restaurant-logo1-2.png"
                                itemprop="image"
                              />
                            </a>
                          </div>
                          <div className="featured-restaurant-info">
                            <span className="red-clr">
                              5th Avenue New York 68
                            </span>
                            <h4 itemprop="headline">
                              <a href="#" title="" itemprop="url">
                                Pizza Hut
                              </a>
                            </h4>
                            <ul className="post-meta">
                              <li>
                                <i className="fa fa-check-circle-o"></i> Min
                                order $40
                              </li>
                              <li>
                                <Motor /> 30min
                              </li>
                            </ul>
                          </div>
                          <div className="view-menu-liks">
                            <a
                              className="brd-rd3"
                              href="#"
                              title=""
                              itemprop="url"
                            >
                              View Menu
                            </a>
                          </div>
                        </div>
                        <div className="featured-restaurant-box style3 brd-rd5">
                          <div className="featured-restaurant-thumb">
                            <a href="#" title="" itemprop="url">
                              <img
                                src="assets/images/logo.png"
                                alt="restaurant-logo1-3.png"
                                itemprop="image"
                              />
                            </a>
                          </div>
                          <div className="featured-restaurant-info">
                            <span className="red-clr">
                              5th Avenue New York 68
                            </span>
                            <h4 itemprop="headline">
                              <a href="#" title="" itemprop="url">
                                Burger King
                              </a>
                            </h4>
                            <ul className="post-meta">
                              <li>
                                <i className="fa fa-check-circle-o"></i> Min
                                order $100
                              </li>
                              <li>
                                <Motor /> 30min
                              </li>
                            </ul>
                          </div>
                          <div className="view-menu-liks">
                            <a
                              className="brd-rd3"
                              href="#"
                              title=""
                              itemprop="url"
                            >
                              View Menu
                            </a>
                          </div>
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
                  </div>
                </TabPanel>
                <TabPanel>
                  <div
                    className="tab-pane"
                    id="v-pills-statement"
                    role="tabpanel"
                    aria-labelledby="v-pills-settings-tab"
                  >
                    <div className="tabs-wrp brd-rd5">
                      <h4 itemprop="headline">STATEMENTS</h4>
                      <div className="select-wrap-inner">
                        <div className="select-wrp2"></div>
                        <div className="select-wrp2">
                          <select>
                            <option>Select Date Range</option>
                            <option>Select Date Range</option>
                            <option>Select Date Range</option>
                          </select>
                        </div>
                      </div>
                      <div className="statement-table">
                        <table>
                          <thead>
                            <tr>
                              <th>TRANSACTION ID</th>
                              <th>ORDER ID</th>
                              <th>DATE</th>
                              <th>DETAIL</th>
                              <th>AMOUNT</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>#30737723</td>
                              <td>8720</td>
                              <td>Aug 17,2017</td>
                              <td>Order - Misumisu Thai</td>
                              <td>
                                <span className="red-clr">$35.97</span>
                              </td>
                            </tr>
                            <tr>
                              <td>#30737723</td>
                              <td>8720</td>
                              <td>Aug 17,2017</td>
                              <td>Order - Jet's Kitchen</td>
                              <td>
                                <span className="red-clr">$35.97</span>
                              </td>
                            </tr>
                            <tr>
                              <td>#30737723</td>
                              <td>8720</td>
                              <td>Aug 17,2017</td>
                              <td>Order - Misumisu Thai</td>
                              <td>
                                <span className="red-clr">$35.97</span>
                              </td>
                            </tr>
                            <tr>
                              <td>#30737723</td>
                              <td>8720</td>
                              <td>Aug 17,2017</td>
                              <td>Order - Misumisu Thai</td>
                              <td>
                                <span className="red-clr">$35.97</span>
                              </td>
                            </tr>
                            <tr>
                              <td>#30737723</td>
                              <td>8720</td>
                              <td>Aug 17,2017</td>
                              <td>Order - Misumisu Thai</td>
                              <td>
                                <span className="red-clr">$35.97</span>
                              </td>
                            </tr>
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
                    id="v-pills-account"
                    role="tabpanel"
                    aria-labelledby="v-pills-settings-tab"
                  >
                    <div className="tabs-wrp account-settings brd-rd5">
                      <h4 itemprop="headline">ACCOUNT SETTINGS</h4>
                      <div className="account-settings-inner">
                        <div className="row">
                          <div className="col-md-4 col-sm-4 col-lg-4">
                            <div className="profile-info text-center">
                              <div className="profile-thumb brd-rd50">
                                <img
                                  id="profile-display"
                                  src="assets/images/resources/profile-img1.jpg"
                                  alt="profile-img1.jpg"
                                  itemprop="image"
                                />
                              </div>
                              <a
                                className="red-clr change-password"
                                href="#"
                                title=""
                                itemprop="url"
                              >
                                Change Password
                              </a>
                              <div className="profile-img-upload-btn">
                                <label className="fileContainer brd-rd5 yellow-bg">
                                  UPLOAD PICTURE
                                  <input id="profile-upload" type="file" />
                                </label>
                              </div>
                              <p itemprop="description">
                                Upload a profile picture or choose one of the
                                following
                              </p>
                              <div className="default-img-lst">
                                <img
                                  className="brd-rd50"
                                  src="assets/images/resources/profile-thumb1.jpg"
                                  alt="profile-thumb1.jpg"
                                  itemprop="image"
                                />
                                <img
                                  className="brd-rd50"
                                  src="assets/images/resources/profile-thumb2.jpg"
                                  alt="profile-thumb2.jpg"
                                  itemprop="image"
                                />
                                <img
                                  className="brd-rd50"
                                  src="assets/images/resources/profile-thumb3.jpg"
                                  alt="profile-thumb3.jpg"
                                  itemprop="image"
                                />
                                <img
                                  className="brd-rd50"
                                  src="assets/images/resources/profile-thumb4.jpg"
                                  alt="profile-thumb4.jpg"
                                  itemprop="image"
                                />
                                <img
                                  className="brd-rd50"
                                  src="assets/images/resources/profile-thumb5.jpg"
                                  alt="profile-thumb5.jpg"
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
                                      Complete Name <sup>*</sup>
                                    </label>
                                    <input
                                      className="brd-rd3"
                                      type="text"
                                      placeholder="Enter Your Name"
                                    />
                                  </div>
                                  <div className="col-md-12 col-sm-12 col-lg-12">
                                    <label>
                                      Email Address <sup>*</sup>
                                    </label>
                                    <input
                                      className="brd-rd3"
                                      type="email"
                                      placeholder="Enter Your Email Address"
                                    />
                                  </div>
                                  <div className="col-md-12 col-sm-12 col-lg-12">
                                    <label>
                                      Phone No <sup>*</sup>
                                    </label>
                                    <input
                                      className="brd-rd3"
                                      type="text"
                                      placeholder="Enter Your Phone No"
                                    />
                                  </div>
                                  <div className="col-md-12 col-sm-12 col-lg-12">
                                    <label>
                                      Country <sup>*</sup>
                                    </label>
                                    <div className="select-wrp">
                                      <select>
                                        <option>USA</option>
                                        <option>Spain</option>
                                        <option>Dubai</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-sm-12 col-lg-6">
                                    <label>
                                      State <sup>*</sup>
                                    </label>
                                    <input className="brd-rd3" type="text" />
                                  </div>
                                  <div className="col-md-6 col-sm-12 col-lg-6">
                                    <label>
                                      City <sup>*</sup>
                                    </label>
                                    <div className="select-wrp">
                                      <select>
                                        <option>New York</option>
                                        <option>Washington</option>
                                        <option>New Jersey</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-sm-12 col-lg-6">
                                    <label>
                                      Latitude <sup>*</sup>
                                    </label>
                                    <input className="brd-rd3" type="text" />
                                  </div>
                                  <div className="col-md-6 col-sm-12 col-lg-6">
                                    <label>
                                      Longitude <sup>*</sup>
                                    </label>
                                    <input className="brd-rd3" type="text" />
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
                                <input
                                  className="brd-rd3"
                                  type="text"
                                  placeholder="Type Your Address"
                                />
                                <button
                                  className="brd-rd3 red-bg"
                                  type="submit"
                                >
                                  Search Now
                                </button>
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
