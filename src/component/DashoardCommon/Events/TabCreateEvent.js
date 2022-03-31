import React, { Component, } from "react";
import {  Tabs,  TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import axios from 'axios';

import DateFnsUtils from '@date-io/date-fns';

import {
  MuiPickersUtilsProvider,
  KeyboardDateTimePicker,

} from '@material-ui/pickers';



//local
const base_url = 'http://localhost:5000/api/';

//heroku

// const base_url = 'https://aplate-api.herokuapp.com/api/'

const Restaurant = props => (<>

  <option value={props.restaurants._id} >{props.restaurants.fullName}</option>




</>)


class TabTwo extends Component {

  state = {
    eventName: '',
    eventDate: new Date(),
    desciription: '',
    city: '',
    seat: '',
    foodOption: '',
    restaurant: '',
    restaurantId: '',
    eventPhoto: '',
    optionalImage: '',
    restaurants: [],
    restaurantReturn: []
  }






  componentDidMount() {

    axios.get(base_url + "restaurants/")
      .then(response => {
        console.log(response.data)
        const restaurants = response.data
        this.setState({ restaurants })

      })

      .catch((error) => {
        console.log(error);
      })

  }



  restaurantList() {
    return this.state.restaurants.map(el => {
      return <Restaurant className="card-deck card" restaurants={el} key={el._id} />;
    })
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
      restaurantId: e.target.value
    })

    console.log(e.target)
    console.log(e.target.value)
    const resl = this.state.restaurants.map(el => el).filter(ele => ele._id == e.target.value)

    axios.get(base_url + "restaurants/" + e.target.value)
      .then(response => {
        console.log(response.data)
        const restaurant = response.data.fullName
        this.setState({ restaurant })

      })

      .catch((error) => {
        console.log(error);
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

    // const events = {

    //   eventName: this.state.eventName,
    //   eventDate: this.state.eventDate,
    //   eventTime: this.state.eventTime,
    //   desciription: this.state.desciription,
    //   foodOption: this.state.foodOption,
    //   restaurant: this.state.restaurant,
    //   eventPhoto: this.state.eventPhoto,
    //   optionalImage: this.state.optionalImage
    // }


    const formData = new FormData()


    formData.append("eventPhoto", this.state.eventPhoto)
    formData.append("optionalImage", this.state.optionalImage)
    formData.append("eventName", this.state.eventName)
    formData.append("eventDate", this.state.eventDate)
    formData.append("eventTime", this.state.eventTime)
    formData.append("desciription", this.state.desciription)
    formData.append("foodOption", this.state.foodOption)
    formData.append("restaurant", this.state.restaurant)
    formData.append("restaurantId", this.state.restaurantId)
    formData.append("seat", this.state.seat)
    formData.append("city", this.state.city)

    axios.post(base_url + "events/", formData)
      .then(res => console.log(res.data));

    // for (var key of formData.entries()) {
    //   console.log(key[0] + ', ' + key[1])
    // }
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
                        <h4 itemprop="headline" >CREATE EVENT</h4>

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
                                          name="eventName"
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

                                        <select name="" id="" onChange={this.onChangeRestaurant}>
                                          <option value=""></option>
                                          {this.restaurantList()}
                                        </select>
                                      </div>
                                    </div>
                                    <br />   <br /> <br />
                                  </div>
                                </div>
                                <div className="col-md-12 col-sm-12 col-lg-12">
                                  <div className="loc-map2">
                                    <div
                                      className="loc-map brd-rd3"
                                      id="loc-map  form-control"
                                    ></div>
                                    <label className="">Event Photo </label>
                                    <div className="profile-img-upload-btn">


                                      <input
                                        id="profile-upload"
                                        type="file"
                                        onChange={this.onChangeEventPhoto}
                                        name="eventPhoto"
                                        required />

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
export default TabTwo;
