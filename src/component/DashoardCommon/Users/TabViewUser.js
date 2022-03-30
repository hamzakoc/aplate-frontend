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
// const base_url = 'http://localhost:5000/api/';

//heroku

const base_url = 'https://aplate-api.herokuapp.com/api/'



class TabCreateUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      emailId: '',
      role: '',
    }
  }


  componentDidMount = () => {


    axios.get(base_url + "admins/" + this.props.match.params.id)
      .then(response => {
        this.setState({
          id: response.data._id,
          username: response.data.username,
          firstName: response.data.firstName,
          lastName: response.data.lastName,
          emailId: response.data.emailId,
          password: '',
          role: response.data.role,
          users: []
        })
      })
      .catch(function (error) {
        console.log(error);
      })

    axios.get(base_url + "admins/")
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map(user => user.username),
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })


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
                        <h4 itemprop="headline" >{this.state.username.toLocaleUpperCase()} DETAILS</h4>

                      </div>

                      <div

                      >

                        <div className="tabs-wr p a ccount-settings ">
                          <div className="">
                            <div className="row">
                              <div className="col-md-8 col-sm-8 col-lg-8">
                                <div className="profile-info-form-wrp">

                                  <div className="row">

                                    <p className="col-md-12 col-sm-12 col-lg-12">
                                      <label>
                                        User Name :
                                      </label>
                                      {this.state.username}
                                    </p>

                                    <p className="col-md-12 col-sm-12 col-lg-12">
                                      <label>
                                        First Name :
                                      </label>
                                      {this.state.firstName}
                                    </p>

                                    <p className="col-md-12 col-sm-12 col-lg-12">
                                      <label>
                                        Last Name :
                                      </label>
                                      {this.state.lastName}
                                    </p>


                                    <p className="col-md-12 col-sm-12 col-lg-12">
                                      <label>
                                        E-mail :
                                      </label>
                                      {this.state.emailId}
                                    </p>
                                    <p className="col-md-12 col-sm-12 col-lg-12">
                                      <label>
                                        Status :
                                      </label>
                                      {this.state.role}
                                    </p>

                                  </div>
                                </div>

                              </div>
                            </div>
                            <div className="col-md-12 col-sm-12 col-lg-12">
                              <div className="loc-map2">

                                <div className="loc-srch">

                                  <div className="form-group">
                                    <a href={"/EditUser/" + this.state.id} ><button className="btn btn-success" >Edit</button> </a>
                                    <a onClick={() => { window.history.back() }}><button className="btn btn-danger" >Cancel</button> </a>

                                  </div>


                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>

                    </div>
                  </div>
                </TabPanel>


              </div>
            </div >
          </div >
        </Tabs >
      </div >
    );
  }
}
export default withRouter(TabCreateUser);
