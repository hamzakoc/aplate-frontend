import React, { Component, } from "react";
import { Tabs, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import axios from 'axios';
import bcrypt from 'bcryptjs';

import { withRouter } from "react-router";


//local
const base_url = 'http://localhost:5000/api/';

//heroku

// const base_url = 'https://aplate-api.herokuapp.com/api/'



class TabCreateUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
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

    axios.get(base_url + "")
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
  onChangeRole = (e) => {
    this.setState({
      role: e.target.value
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

    const password = users.password;
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    users["password"] = hash;

    axios.put(base_url + "admins/" + this.props.match.params.id, users)
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
                        <h4 itemprop="headline" >UPDATE {this.state.username.toLocaleUpperCase()}</h4>

                      </div>

                      <div

                      >
                        <form onSubmit={this.onSubmit} >
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
                                        />
                                      </div>
                                      <br />   <br /> <br />
                                      <label>
                                        E-mail <sup>*</sup>
                                      </label>
                                      <div className="col-md-12 col-sm-12 col-lg-12">
                                        <input
                                          className="brd-rd3 form-control"
                                          type="text"
                                          value={this.state.emailId}
                                          onChange={this.onChangeEmailId}
                                        />
                                      </div>
                                      <br />   <br /> <br />

                                      <div className="col-md-12 col-sm-12 col-lg-12">
                                        <label>
                                          Current Role <sup>*</sup>
                                        </label>
                                        <i
                                          className="brd-rd3 form-control"
                                          type="text"
                                        // value={this.state.role}
                                        >{this.state.role}
                                        </i>
                                        <br></br>
                                        Change Role <sup>*</sup>
                                        <select id="cars" className="brd-rd3" value={this.state.role} onChange={this.onChangeRole}>

                                          <option value="moderator">Moderator</option>
                                          <option value="user"  >User</option>
                                          <option value="admin" >Admin</option>
                                          <option value="deactive">Deactivate User</option>
                                        </select>
                                      </div>


                                    </div>
                                    <br />   <br /> <br />
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
