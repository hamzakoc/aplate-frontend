import React, { Component, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import axios from 'axios';

import DateFnsUtils from '@date-io/date-fns';

import {
  MuiPickersUtilsProvider,
  KeyboardDateTimePicker,

} from '@material-ui/pickers';
import { withRouter } from "react-router";


//local
const base_url = 'http://localhost:5000/api/restaurants/';

//heroku

// const base_url = 'https://gbc-crud-backend.herokuapp.com/api/v1/employees/'



class TabCreateRestaurant extends Component {

  state = {
    username: '',
    password: '',
    fullName: '',
    emailId: '',
    address: '',
    city: '',
    phone: '',
    about: '',
    logo: '',
    photos: '',
    photo2: '',
    photo3: ''


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

  onChangeFullName = (e) => {
    this.setState({
      fullName: e.target.value
    })
  }
  onChangeEmailId = (e) => {
    this.setState({
      emailId: e.target.value
    })
  }
  onChangeAddress = (e) => {
    this.setState({
      address: e.target.value
    })
  }
  onChangeCity = (e) => {
    this.setState({
      city: e.target.value
    })
  }
  onChangePhone = (e) => {
    this.setState({
      phone: e.target.value
    })
  }
  onChangeAbout = (e) => {
    this.setState({
      about: e.target.value
    })
  }

  onChangeLogo = (e) => {
    this.setState({
      logo: e.target.files[0]
    })
  }
  onChangePhotos = (e) => {
    this.setState({
      photos: e.target.files[0]
    })
  }
  onChangePhoto2 = (e) => {
    this.setState({
      photo2: e.target.files[0]
    })
  }
  onChangePhoto3 = (e) => {
    this.setState({
      photo3: e.target.files[0]
    })
  }




  onSubmit = (e) => {

    e.preventDefault();

    const formData = new FormData()

    formData.append("username", this.state.username)
    formData.append("password", this.state.password)
    formData.append("fullName", this.state.fullName)
    formData.append("address", this.state.address)
    formData.append("emailId", this.state.emailId)
    formData.append("city", this.state.city)
    formData.append("phone", this.state.phone)
    formData.append("about", this.state.about)
    formData.append("logo", this.state.logo)
    formData.append("photos", this.state.photos)
    formData.append("photo2", this.state.photo2)
    formData.append("photo3", this.state.photo3)



    axios.post(base_url, formData)
      .then(res => console.log(res.data));


  }

  render() {

    return (
      <div className="sec-box">
        <Tabs>
          <div className="container">
            <div className="row">
              <div className="col-md-2">

              </div>
              <div className="col-md-10">
                <TabPanel>
                  <div
                    className="tab-box-conten fad show activ tab-box-contet"
                    role="tabpanel"
                    aria-labelledby="v-pills-home-ta"
                  >
                    <div className="dashboard-wrapper brd-rd">
                      <div className="welcome-note yellow-bg brd-rd5 green-bg" >
                        <h4 itemprop="headline" >CREATE RESTAURANT</h4>

                      </div>

                      <div

                      >
                        <form onSubmit={this.onSubmit} encType="multipart/form-data">
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
                                        Full Name <sup>*</sup>
                                      </label>
                                      <div className="col-md-12 col-sm-12 col-lg-12">

                                        <input
                                          className="brd-rd3 form-control"
                                          type="text"
                                          value={this.state.fullName}
                                          onChange={this.onChangeFullName}
                                          required
                                        />
                                      </div>
                                      <br />   <br /> <br />
                                      <label>
                                        Address <sup>*</sup>
                                      </label>
                                      <div className="col-md-12 col-sm-12 col-lg-12">

                                        <input
                                          className="brd-rd3 form-control"
                                          type="text"
                                          value={this.state.address}
                                          onChange={this.onChangeAddress}
                                          required
                                        />
                                      </div>
                                      <br />   <br /> <br />
                                      <label>
                                        City <sup>*</sup>
                                      </label>
                                      <div className="col-md-12 col-sm-12 col-lg-12">

                                        <input
                                          className="brd-rd3 form-control"
                                          type="text"
                                          value={this.state.city}
                                          onChange={this.onChangeCity}
                                          required
                                        />
                                      </div>
                                      <br />   <br /> <br />
                                      <label>
                                        Phone <sup>*</sup>
                                      </label>
                                      <div className="col-md-12 col-sm-12 col-lg-12">

                                        <input
                                          className="brd-rd3 form-control"
                                          type="text"
                                          value={this.state.phone}
                                          onChange={this.onChangePhone}
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
                                      <label>
                                        About <sup>*</sup>
                                      </label>
                                      <div className="col-md-12 col-sm-12 col-lg-12">
                                        <textarea
                                          className="brd-rd3 form-control" rows={5}
                                          type="text"
                                          value={this.state.about}
                                          onChange={this.onChangeAbout}
                                          required
                                        />
                                      </div>
                                      <br />   <br /> <br />
                                      <br />   <br /> <br />

                                      <label className="">Restaurant Logo *</label>
                                      <div className="profile-img-upload-btn">

                                        <input
                                          required
                                          type="file"
                                          className="form-control-file"
                                          onChange={this.onChangeLogo}
                                         

                                        />
                                      </div>
                                      <br />   <br /> <br />

                                      <label className="">Restaurant Photos </label>
                                      <div className="profile-img-upload-btn">

                                        <input
                                          type="file"
                                          className="form-control-file"
                                          onChange={this.onChangePhotos}
                                        />

                                        <input
                                          type="file"
                                          className="form-control-file"
                                          onChange={this.onChangePhoto2}
                                        />


                                        <input
                                          type="file"
                                          className="form-control-file"
                                          onChange={this.onChangePhoto3}
                                        />
                                      </div>


                                    </div>

                                  </div>
                                </div>
                                <div className="col-md-12 col-sm-12 col-lg-12">
                                  <div className="loc-map2">

                                    <div className="loc-srch">

                                      <div className="form-group">
                                        <input type="submit" value="Submit" className="btn btn-success" />
                                        <a onClick={() => { window.history.back() }}><button className="btn btn-danger" >Cancel</button> </a>
                                      </div>


                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
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
export default withRouter(TabCreateRestaurant);
