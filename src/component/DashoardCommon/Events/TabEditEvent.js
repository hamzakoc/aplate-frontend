import React, { Component, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import axios from 'axios';
import { withRouter } from "react-router";

import DateFnsUtils from '@date-io/date-fns';

import {
  MuiPickersUtilsProvider,
  KeyboardDateTimePicker,

} from '@material-ui/pickers';





//local
const base_url = 'http://localhost:5000/api/events/';

//heroku

// const base_url = 'https://gbc-crud-backend.herokuapp.com/api/v1/employees/'



class EditEvent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      eventName: '',
      eventDate: '',
      desciription: '',
      city: '',
      seat: '',
      foodOption: '',
      restaurant: '',
      eventPhoto: '',
      optionalImage: '',
      createdAt: '',
      event: []
    }
  }


  componentDidMount = () => {


    axios.get(base_url + this.props.match.params.id)
      .then(response => {
        this.setState({
          eventName: response.data.eventName,
          eventDate: response.data.eventDate,
          desciription: response.data.desciription,
          city: response.data.city,
          seat: response.data.seat,
          foodOption: response.data.foodOption,
          restaurant: response.data.restaurant,
          eventPhoto: response.data.eventPhoto.data,
          optionalImage: response.data.optionalImage.data,
          createdAt: response.data.createdAt
        })
      })
      .catch(function (error) {
        console.log(error);
      })

    axios.get(base_url)
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            event: response.data.map(event => event.eventName),
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })



    console.log("****************************")
    console.log(this.props.match.params.id)

  }



  onChangeEventName = (e) => {
    this.setState({
      eventName: e.target.value
    })
  }
  onChangeEventDate = (e) => {
    this.setState({
      eventDate: e
    })
  }

  onChangeDesciription = (e) => {
    this.setState({
      desciription: e.target.value
    })
  }
  onChangeCity = (e) => {
    this.setState({
      city: e.target.value
    })
  }
  onChangeSeat = (e) => {
    this.setState({
      seat: e.target.value
    })
  }
  onChangeFoodOption = (e) => {
    this.setState({
      foodOption: e.target.value
    })
  }
  onChangeRestaurant = (e) => {
    this.setState({
      restaurant: e.target.value
    })
  }
  onChangeEventPhoto = (e) => {
    this.setState({
      eventPhoto: e.target.files[0]

    })
    console.log(e.target.files[0])

  }
  onChangeOptionalImage = (e) => {
    this.setState({
      optionalImage: e.target.files[0]
    })
  }



  onSubmit = (e) => {

    const formData = new FormData()


    formData.append("eventPhoto", this.state.eventPhoto)
    formData.append("optionalImage", this.state.optionalImage)
    formData.append("eventName", this.state.eventName)
    formData.append("eventDate", this.state.eventDate)
    formData.append("eventTime", this.state.eventTime)
    formData.append("desciription", this.state.desciription)
    formData.append("foodOption", this.state.foodOption)
    formData.append("restaurant", this.state.restaurant)
    formData.append("seat", this.state.seat)
    formData.append("city", this.state.city)

    axios.put(base_url + this.props.match.params.id, formData)
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
                        <h4 itemprop="headline" >UPDATE EVENT</h4>

                      </div>

                      <div

                      >
                        <form onSubmit={this.onSubmit} encType="multipart/form-data" >
                          <div className="tabs-wr p a ccount-settings ">
                            <div className="">
                              <div className="row">
                                <div className="col-md-8 col-sm-8 col-lg-8">
                                  <div className="profile-info-form-wrp">

                                    <div className="row">
                                      <label>
                                        Event Name <sup>*</sup>
                                      </label>
                                      <div className="col-md-12 col-sm-12 col-lg-12">
                                        <input
                                          className="brd-rd3 form-control"
                                          type="text"
                                          value={this.state.eventName}
                                          onChange={this.onChangeEventName}
                                          required

                                        />
                                      </div>
                                      <br />   <br /> <br />
                                      <label>
                                        Event Date <sup>*</sup>
                                      </label>

                                      <div className="col-md-12 col-sm-12 col-lg-12">

                                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                          <KeyboardDateTimePicker
                                            disableToolbar
                                            autoOk={true}
                                            showTodayButton={true}
                                            variant="inline"
                                            format="MMMM-dd-yyyy hh:mm"
                                            margin="normal"
                                            id="date-picker-inline"
                                            value={this.state.eventDate}
                                            onChange={this.onChangeEventDate}

                                            KeyboardButtonProps={{
                                              'aria-label': 'change date',
                                            }}
                                            required

                                          />

                                        </MuiPickersUtilsProvider>
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
                                        Seat Limit <sup>*</sup>
                                      </label>
                                      <div className="col-md-12 col-sm-12 col-lg-12">

                                        <input
                                          className="brd-rd3 form-control"
                                          type="text"
                                          value={this.state.seat}
                                          onChange={this.onChangeSeat}
                                          required

                                        />
                                      </div>
                                      <br />   <br /> <br />
                                      <label>
                                        Desciription <sup>*</sup>
                                      </label>
                                      <div className="col-md-12 col-sm-12 col-lg-12">

                                        <textarea
                                          className="brd-rd3 form-control"
                                          type="text"
                                          value={this.state.desciription}
                                          onChange={this.onChangeDesciription}
                                          required
                                          rows={8}

                                        />
                                      </div>
                                      <br />   <br /> <br />
                                      <label>
                                        Food Option <sup>*</sup>
                                      </label>
                                      <div className="col-md-12 col-sm-12 col-lg-12">
                                        <input
                                          className="brd-rd3 form-control"
                                          type="text"
                                          value={this.state.foodOption}
                                          onChange={this.onChangeFoodOption}
                                          required

                                        />
                                      </div>
                                      <br />   <br /> <br />
                                      <label>
                                        Restaurant <sup>*</sup>
                                      </label>
                                      <div className="col-md-12 col-sm-12 col-lg-12">

                                        <input
                                          className="brd-rd3 form-control"
                                          type="text"
                                          value={this.state.restaurant}
                                          onChange={this.onChangeRestaurant}
                                          required
                                          readOnly


                                        />
                                      </div>


                                    </div>

                                  </div>
                                </div>
                                <div className="col-md-12 col-sm-12 col-lg-12">
                                  <div className="loc-map2">
                                    <div
                                      className="loc-map brd-rd3 "
                                      id="loc-map"
                                    ></div>
                                    <br />
                                    <br />
                                    <label className="">Event Photo </label>
                                    <div className="profile-img-upload-btn">


                                      <input
                                        id="profile-upload"
                                        type="file"
                                        onChange={this.onChangeEventPhoto}
                                        name="eventPhoto"
                                        required
                                      />

                                    </div>

                                    <label className="">Additional Event Photos </label>
                                    <div className="profile-img-upload-btn">

                                      <input
                                        type="file"
                                        className="form-control-file"
                                        onChange={this.onChangeOptionalImage}
                                        required

                                      />
                                    </div>

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
export default withRouter(EditEvent);
