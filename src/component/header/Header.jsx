import React, { Component } from "react";
import { Link } from "react-router-dom";

import { FiX, FiMenu } from "react-icons/fi";


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { events: [],userDash:'',adminDash:'',moderatorDash:'',restaurantDash:''};
    this.menuTrigger = this.menuTrigger.bind(this);
    this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
    this.headerCart = this.headerCart.bind(this);
    this.headerCartClose = this.headerCartClose.bind(this);
    // this.subMetuTrigger = this.subMenuTrigger.bind(this);
    window.addEventListener("load", function () {
      console.log("All assets are loaded");
    });
  }

  componentDidMount() {


    var elements = document.querySelectorAll(".has-droupdown > a");
    for (var i in elements) {
      if (elements.hasOwnProperty(i)) {
        elements[i].onclick = function (e) {
          e.preventDefault();
          this.parentElement
            .querySelector(".submenu")
            .classList.toggle("active");
          this.parentElement.classList.toggle("active");
        };
      }
    }

    
    if ("userD" in localStorage) {
      const userSesion = JSON.parse(localStorage.getItem("userD"))
      const userDetail = userSesion.role


      switch (userDetail) {
        case 'user':
          this.setState({userDash:userDetail})
          break;
        case 'admin':
          this.setState({adminDash:userDetail})
          break;
        case 'moderator':
          this.setState({moderatorDash:userDetail})
          break;
        case 'restaurant':
          this.setState({restaurantDash:userDetail})
          break;
        default:
          this.setState({userDash:''})
          this.setState({adminDash:''})
          this.setState({moderatorDash:''})
          this.setState({restaurantDash:''})
      }
  
    
    }
  }

  menuTrigger() {
    document.querySelector(".nav-menu").classList.toggle("active");
  }
  CLoseMenuTrigger() {
    document.querySelector(".nav-menu").classList.remove("active");
  }
  headerCart(e) {
    e.preventDefault();
    document.querySelector(".popup-items").classList.add("active");
  }
  headerCartClose(e) {
    e.preventDefault();
    document.querySelector(".popup-items").classList.remove("active");
  }



  render() {
    return (
      <header className="style1">
        <div className="container">

    <nav class="navbar navbar-expand-lg navbar-dark  rounded">
      <a class="navbar-brand" href="#"></a>
      <ul class="navbar-nav mr-auto">
   
      </ul>
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
                 
        <Link  to="/Login"><i class="fa fa-user"></i> Login</Link>
        </li>


        <li class="nav-item">                 
                 <Link to="/Register"><i class="fa fa-user"></i> Register</Link>
                 </li>


        
            {this.state.userDash&&   <li>
              <Link title="" to="/DashboardUser" className="dropdown-item">
               My Account
              </Link>
                </li>
             }

             {this.state.adminDash&&   <li>
              <Link title="" to="/Admin" className="dropdown-item">
               My Account
              </Link>
                </li>
             }
             {this.state.moderatorDash&&   <li>
              <Link title="" to="/Moderator" className="dropdown-item">
               My Account
              </Link>
                </li>
             }
             {this.state.restaurantDash&&   <li>
              <Link title="" to="/DashboardRestaurant" className="dropdown-item">
               My Account
              </Link>
                </li>
             }

        {/* <li class="nav-item">
                 
                 <Link className="dropdown-item" to="/DashboardUser">User</Link>
        </li>

        <li class="nav-item">
                 
                 <Link className="dropdown-item" to="/DashboardRestaurant">Restaurant</Link>
        </li>

        <li class="nav-item">
                 
                 <Link className="dropdown-item" to="/Moderator">Moderator</Link>
        </li>
      
        <li class="nav-item">
                 
                 <Link className="dropdown-item" to="/Admin">Admin</Link>
        </li>
         */}
   
      </ul>
    </nav>

          
          <nav className="navbar navbar-expand-lg">
            <div className="logo ">
              <a className="navbar-brand photo" href="#">
              <Link to="/"> <img src="/assets/images/logo.png" className="logo1" alt="" /></Link>
              </a>
            </div>
            {/* Start Humberger Menu  */}



            <div className="humberger-menu d-block d-lg-none pl--20 pl_sm--10">
              <span onClick={this.menuTrigger} className="menutrigger">
                <FiMenu />
              </span>
            </div>

            <div className="nav-menu">
              {/* End Humberger Menu  */}
              <div className="close-menu d-block d-lg-none">
                <span onClick={this.CLoseMenuTrigger} className="closeTrigger">
                  <FiX />
                </span>
              </div>
              {/* <!-- main menu --> */}
              <div className="header-wrapper" id="header-wrapper">
                <ul className="main-menu ">
                <li className="nav-item dropdown position-relative">
                             
                      <Link className="dropdown-item" to="/">
                        Home
                      </Link>
                                                   
                </li>
                    
                <li className="nav-item dropdown position-relative">
                  <Link title="" to="/Events" className="dropdown-item">
                  Events
                  </Link>
                </li>

                <li className="nav-item dropdown position-relative">
                             
                  <Link className="dropdown-item" to="/Restaurants">
                      Restaurants
                    </Link>                                                          
                </li>
           
             

                <li>
                  <Link title="" to="/Contact" className="dropdown-item">
                  Contact
                  </Link>
                </li>
                <li>
                  <Link title="" to="/Login" className="dropdown-item fa fa-user">
                  Login
                  </Link>
                </li>
                <li>
                  <Link title="" to="/Register" className="dropdown-item fa fa-user">
                  Register
                  </Link>
                </li>

                </ul>
            
              </div>
            </div>




            <div className="site-menu-wrapper ml-auto collapse navbar-collapse">
              
              <ul className="navbar-nav ml-auto">


                <li className="nav-item dropdown position-relative">
                             
                      <Link className="dropdown-item" to="/">
                        Home
                      </Link>
                                                   
                </li>

                <li className="nav-item dropdown position-relative">
                  <Link title="" to="/Events" className="dropdown-item">
                  Events
                  </Link>
                </li>

                <li className="nav-item dropdown position-relative">
                             
                  <Link className="dropdown-item" to="/Restaurants">
                      Restaurants
                    </Link>                                                          
                </li>
           
               <li>
                  <Link title="" to="/Contact" className="dropdown-item">
                  Contact
                  </Link>
                </li>

             
               
              </ul>
              <div className="site-menu-btns d-flex">
            
            
              </div>
            
            </div>
          </nav>
         
        </div>
       
      </header>
      
    );
  }
}

export default Header;
