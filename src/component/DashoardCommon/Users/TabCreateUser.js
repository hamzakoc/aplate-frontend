import React, { Component} from "react";
import {  Tabs,  TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import axios from 'axios';


import { withRouter } from "react-router";


//local
const base_url = 'http://localhost:5000/api/';

//heroku

// const base_url = 'https://aplate-api.herokuapp.com/api/'



class TabCreateUser extends Component {

  state = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    emailId: '',
    role: this.props.match.params.role,
  }

  onChangeUserName = (e) => {
    this.setState({
      username: e.target.value
    })
  }
  onChangePassword = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  onChangeFirstName = (e) => {
    this.setState({
      firstName: e.target.value
    })
  }
  onChangeLastName = (e) => {
    this.setState({
      lastName: e.target.value
    })
  }
  onChangeEmailId = (e) => {
    this.setState({
      emailId: e.target.value
    })
  }




  onSubmit = (e) => {

    const users = {

      username: this.state.username,
      password: this.state.password,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      emailId: this.state.emailId,
      role: this.state.role
    }



    axios.post(base_url + "admins/", users)
      .then(res => console.log(res.data));

  }

  render() {

    return (
      <div className="sec-box">
        <Tabs>
          <div className="container">
            <div className="row">
              <div className="col-md-1">

              </div>
              <div className="col-md-8">
                <TabPanel>
                  <div
                    className="tab-box-content fade show active tab-box-content"
                    role="tabpanel"
                    aria-labelledby="v-pills-home-tab"
                  >
                    <div className="dashboard-wrapper brd-rd5">
                      <div className="welcome-note yellow-bg brd-rd5 green-bg" >
                        <h4 itemprop="headline" >CREATE {this.props.match.params.role.toUpperCase()}</h4>

                      </div>

                      <div

                      >
                        <form onSubmit={this.onSubmit}  >
                          <div className="tabs-wr p a ccount-settings ">
                            <div className="">
                              <div className="row">
                                <div className="col-md-8 col-sm-8 col-lg-8">
                                  <div className="profile-info-form-wrp">

                                    <div className="row">
                                      <label>
                                        User Name <sup>*</sup>
                                      </label>
                                      <div className="col-md-12 col-sm-12 col-lg-12">
                                        <input
                                          className="brd-rd3 form-control"
                                          type="text"
                                          value={this.state.username}
                                          onChange={this.onChangeUserName}
                                          required
                                        />
                                      </div>
                                      <br />   <br /> <br />
                                      <label>
                                        Password <sup>*</sup>
                                      </label>
                                      <div className="col-md-12 col-sm-12 col-lg-12">

                                        <input
                                          className="brd-rd3 form-control"
                                          type="text"
                                          value={this.state.password}
                                          onChange={this.onChangePassword}
                                          required

                                        />
                                      </div>
                                      <br />   <br /> <br />
                                      <label>
                                        First Name <sup>*</sup>
                                      </label>
                                      <div className="col-md-12 col-sm-12 col-lg-12">

                                        <input
                                          className="brd-rd3 form-control"
                                          type="text"
                                          value={this.state.firstName}
                                          onChange={this.onChangeFirstName}
                                          required

                                        />
                                      </div>
                                      <br />   <br /> <br />
                                      <label>
                                        Last Name <sup>*</sup>
                                      </label>
                                      <div className="col-md-12 col-sm-12 col-lg-12">

                                        <input
                                          className="brd-rd3 form-control"
                                          type="text"
                                          value={this.state.lastName}
                                          onChange={this.onChangeLastName}
                                          required

                                        />
                                      </div>
                                      <br />   <br /> <br />
                                      <label>
                                        E-mail <sup>*</sup>
                                      </label>
                                      <div className="col-md-12 col-sm-12 col-lg-12">
                                        <input
                                          className="brd-rd3 form-control"
                                          type="email"
                                          value={this.state.emailId}
                                          onChange={this.onChangeEmailId}
                                          required

                                        />
                                      </div>
                                      <br />   <br /> <br />



                                    </div>

                                  </div>
                                </div>
                                <div className="col-md-12 col-sm-12 col-lg-12">
                                  <div className="loc-map2">

                                    <div className="loc-srch">

                                      <div className="form-group">
                                        <input type="submit" value="Submit" className="btn btn-success" />

                                      </div>


                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
                        <a onClick={() => { window.history.back() }}><button className="btn btn-danger" >Cancel</button> </a>
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
export default withRouter(TabCreateUser);
