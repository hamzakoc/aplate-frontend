import React, { Component } from "react";
import Slider from "react-slick";
import axios from 'axios';
import { Link } from 'react-router-dom';
import {format} from 'date-fns'
import Moment from 'moment';
import { withRouter } from "react-router";



//local
const base_url = 'http://localhost:5000/api/events/';

//heroku
// const base_url = 'https://gbc-crud-backend.herokuapp.com/api/v1/employees/'


const Events = props=>(
  <div className="col-lg-4 col-md-6" >
                  <div className="recipe-carousel-item">
                  <img src={`data:${props.events.eventPhoto};base64, ${Buffer.from(props.events.eventPhoto.data).toString('base64')}`} alt="" width={300} height={300}/>
                    <div className="recipe-info position-relative">
                      <br /><br />
                      <h2 className="fs-26">
                        <Link to={"/EventDetail/" + props.events._id}>{props.events.eventName}</Link>
                      </h2>
                      <span className="fs-14 text-theme text-uppercase">
                  Restaurant: {props.events.restaurant}
                </span>


               
                <ul className="">
                <li className="fs-16 text-gray">
                  Date: <strong> {Moment(props.events.eventDate).format('d MMM yy')}</strong>
                </li>
                <li className="fs-16 text-gray">
                  Time: <strong> {props.events.eventTime} {Moment(props.events.eventTime).format('H:mma')}</strong>
                </li>
               
              </ul>
                      <Link
                        className="fs-16 text-uppercase"
                        to={"/EventDetail/" + props.events._id}
                        title=""
                      >
                        Details<i className="fa fa-angle-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
)




class EventsGrid extends Component {
  constructor(props) {
    super(props);
    this.state = { events: [], eventName:''};
    this.slidesToShow = 3;
  
  }

  


  componentDidMount() {

        axios.get(base_url)
        .then(response => {
            console.log(response.data)

            const eventsFiltered = response.data
            .map(event=>event)
            .filter(event =>
              event.restaurantId==this.props.match.params.id)
    
            const events = eventsFiltered
            console.log(events)
            this.setState({ events })
            this.setState({ eventName:events.eventName })

          
        })

        .catch((error) => {
            console.log(error);
        })
             
  }



  eventsList() {
    return this.state.events.map(event => {
        return <Events className="card-deck card" events={event}  key={event._id} />;
    })
}

  render(){
    return(
      <section className="pt-80 pb-110">
        <div className="container">
          <div className="recipes-wrapper">
            <div className="row">
                {this.eventsList()}
            
            </div>
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
      </section>
    );
  }
}
export default withRouter(EventsGrid);
