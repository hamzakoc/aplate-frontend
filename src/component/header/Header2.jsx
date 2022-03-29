import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../svg/shopping-bag.svg";
import { FiX, FiMenu } from "react-icons/fi";

class Header2 extends Component {
  constructor(props) {
    super(props);
    this.menuTrigger = this.menuTrigger.bind(this);
    this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
    this.headerCart = this.headerCart.bind(this);
    this.headerCartClose = this.headerCartClose.bind(this);
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
      <header className="style1 style2 position-relative">
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <div className="logo">
              <a className="navbar-brand" href="#">
                <img src="assets/images/logo.png" alt="" />
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
                  <li className="home-drop option has-droupdown">
                    <a href="#">Home </a>
                    <ul className="submenu">
                      <li>
                        
                      </li>
                      <li>
                        <Link to="/Homepage2">Home2</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="home-drop option has-droupdown">
                    <a href="#" className="home-click">
                      Pages
                    </a>
                    <ul className="submenu">
                      <li>
                        <Link to="/HowToPage">"How To" Page</Link>
                      </li>
                      <li>
                        <Link to="/RestaurantDetail">Single Chef Page</Link>
                      </li>
                      <li>
                        <Link to="/Restaurants">Chef List Page</Link>
                      </li>
                      <li>
                        <Link to="/OurHistory">Our History</Link>
                      </li>

                      <li>
                        <Link title="" to="/Contact">
                          Contact Us
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="home-drop option has-droupdown">
                    <a href="#" className="home-click">
                      Recipe
                    </a>
                    <ul className="submenu">
                      <li>
                        <Link to="/RecipeListView"> Recipe List Page</Link>
                      </li>
                      <li>
                        <Link to="/Events"> Recipe Grid Page</Link>
                      </li>
                      <li>RestaurantDetail
                        <Link to="/Events"> Single Recipe Style 1</Link>
                      </li>
                      <li>
                        <Link to="/RecipeStyle2"> Single Recipe Style 2</Link>
                      </li>
                      <li>
                        <Link to="/RecipeStyle3"> Single Recipe Style 3</Link>
                      </li>
                      <li>
                        <Link to="/RecipeStyle4"> Single Recipe Style 4</Link>
                      </li>
                    </ul>
                  </li>
             
                  <li>
                    <Link title="" to="/About">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/Dashboard">Dashboard</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="site-menu-wrapper ml-auto collapse navbar-collapse">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown position-relative">
                  <a
                    className="nav-link"
                    href="javascript:void(0)"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Home
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-dark"
                    aria-labelledby="navbarDarkDropdownMenuLink"
                  >
                    <li>
                      <Link className="dropdown-item" to="/">
                        Home Page 1
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/Homepage2">
                        Home Page 2
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown position-relative">
                  <a
                    className="nav-link"
                    href="javascript:void(0)"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Pages
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-dark"
                    aria-labelledby="navbarDarkDropdownMenuLink"
                  >
                    <li>
                      <Link className="dropdown-item" to="/HowToPage">
                        "How To" Page
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/ChefDetail">
                        Single Chef Page
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/ChefList">
                        Chef List Page
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/OurHistory">
                        Our History
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" stitle="" to="/Contact">
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown position-relative">
                  <a
                    className="nav-link"
                    href="javascript:void(0)"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Recipe
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-dark"
                    aria-labelledby="navbarDarkDropdownMenuLink"
                  >
                    <li>
                      <Link className="dropdown-item" to="/RecipeListView">
                        {" "}
                        Recipe List Page
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/Events">
                        {" "}
                        Recipe Grid Page
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/RecipeStyle1">
                        {" "}
                        Single Recipe Style 1
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/RecipeStyle2">
                        {" "}
                        Single Recipe Style 2
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/RecipeStyle3">
                        {" "}
                        Single Recipe Style 3
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/RecipeStyle4">
                        {" "}
                        Single Recipe Style 4
                      </Link>
                    </li>
                  </ul>
                </li>
          
                <li className="nav-item">
                  <Link title="" to="/About">
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Dashboard">Dashboard</Link>
                </li>
              </ul>
              <div className="site-menu-btns d-flex">
                <div>
                  <a className="theme-btn-secondary" href="#" title="">
                    submit recipe<span></span>
                  </a>
                </div>
                <div>
                  <a
                    className="cart-btn-1"
                    href="#"
                    onClick={this.headerCart}
                    title=""
                  >
                    <Logo />
                    <span className="item-count">1</span>
                  </a>
                </div>
              </div>
            </div>
          </nav>
          <div className="popup-items">
            <div className="popup-main">
              <div className="cross-bar" onClick={this.headerCartClose}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
              </div>
              <h2>BASKET (3)</h2>
              <div className="cart-item justify-content-around d-flex align-items-center">
                <img alt="dish-1" src="assets/images/cart-1.png" />
                <div className="featured-area cart-1 position-relative">
                  <div>
                    <div className="recipe-rating-stars">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                  </div>
                  <h2>Stuffed Chicken Breast</h2>
                  <div className="featured-sub">
                    <span>
                      £<strong className="rating">5.00</strong>
                      <del>£ 5.00</del>
                    </span>
                  </div>
                </div>
              </div>
              <hr />
              <div className="cart-item justify-content-around d-flex align-items-center">
                <img alt="dish-2" src="assets/images/cart-2.png" />
                <div className="featured-area cart-1 position-relative">
                  <div>
                    <div className="recipe-rating-stars">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                  </div>
                  <h2>Haak- Kashmiri Spinach</h2>
                  <div className="featured-sub">
                    <span>
                      £<strong className="rating">5.00</strong>
                      <del>£ 5.00</del>
                    </span>
                  </div>
                </div>
              </div>
              <hr />
              <div className="cart-item justify-content-around d-flex align-items-center">
                <img alt="dish-3" src="assets/images/cart-3.png" />
                <div className="featured-area cart-1 position-relative">
                  <div>
                    <div className="recipe-rating-stars">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                  </div>
                  <h2>Gundruk and Sinki Soup</h2>
                  <div className="featured-sub">
                    <span>
                      £<strong className="rating">5.00</strong>
                      <del>£ 5.00</del>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="cart-price d-flex justify-content-between">
              <h2>TOTALE:</h2>
              <h2>$95.00</h2>
            </div>
            <div className="text-end mr-4">
              <a href="#" className="theme-btn-secondary">
                <span></span>CHECKOUT
              </a>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header2;
