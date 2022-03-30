import React, { Component } from "react";
import Slider from "react-slick";
import axios from 'axios';
import Moment from 'moment';




//local
// const base_url = 'http://localhost:5000/api/';

//heroku
const base_url = 'https://aplate-api.herokuapp.com/api/'


const Events = props => (

  <div className="recipe-carousel-item" key={props.key}>
  <div className="testy">
    <figure className="mb-4">{props.events.key}</figure>

      <img src={`data:${props.events.eventPhoto};base64, ${Buffer.from(props.events.eventPhoto.data).toString('base64')}`} alt="" width={300} height={300}/>
 <br /><br /><br />
    <div className="recipe-info position-relative">
      <h2 className="fs-22">
        <a href="">{props.events.eventName}</a>
      </h2>
      <span className="fs-14 text-theme text-uppercase">
        Restaurant: {props.events.restaurant}
      </span>
      <p className="fs-14 text-theme text-uppercase">
        Id: {props.events._id}
      </p>

      <ul className="">
      <li className="fs-16 text-gray">
        
        Date: <strong> {Moment(props.events.eventDate).format('d MMM yy')}</strong>
      </li>
      <li className="fs-16 text-gray">
        Time: <strong> {props.events.eventTime} {Moment(props.events.eventTime).format('H:mma')}</strong>
      </li>
     
    </ul>
      <a
        className="fs-14 font-weight-bold text-uppercase"
        href={"/EventDetail/" + props.events._id}
        title=""
      >
        Details<i className="fa fa-angle-right"></i>
      </a>
      
    </div>
 
  </div>
</div>

)



class EventSlider extends Component {
  constructor(props) {
    super(props);
    this.state = { events: [], };
    this.slidesToShow = 3;
  
  }



  componentDidMount() {
    let index = 0;
    let elements = document.querySelectorAll(".recipe-carousel .slick-slide");
    if (elements.length) {
      elements.forEach((element) => {
        element.classList.remove("next-slick-item");
      });
      document
        .querySelectorAll(".recipe-carousel .slick-slide")
        [index + this.slidesToShow].nextSibling.classList.add(
          "next-slick-item"
        );
    }


        axios.get(base_url+"events/")
        .then(response => {
            console.log(response.data)
            const events = response.data
            this.setState({ events })
          
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

getDate = (date) => {
          return date.split(':')[0]
         }



  render() {
   

    const {img} = this.state;

    const settings = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: this.slidesToShow,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
      afterChange: (index) => {
        let elements = document.querySelectorAll(
          ".recipe-carousel .slick-slide"
        );
        if (elements.length) {
          elements.forEach((element) => {
            element.classList.remove("next-slick-item");
          });
          document
            .querySelectorAll(".recipe-carousel .slick-slide")
            [index + this.slidesToShow].nextSibling.classList.add(
              "next-slick-item"
            );
        }
      },
    };
    return (
      <Slider className="recipe-carousel" {...settings}>
      
         {this.eventsList()}
                  
      </Slider>
    );
  }
}
export default EventSlider;
