import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.css';


import RestaurantDetail from "./component/RestaurantsHome/RestaurantDetail";
import Restaurants from "./component/RestaurantsHome/Restaurants";


import Admin from "./component/DashAdmin/Admin";
import Moderator from "./component/DashModerator/Moderator";
import DashboardUser from "./component/DashUser/DashboardUser";
import DashboardRestaurant from "./component/DashRestaurant/DashboardRestaurant";


import ResCreateEvent from "./component/DashRestaurant/ResCreateEvent";
import CreateEvent from "./component/DashoardCommon/Events/CreateEvent";
import EditEvent from "./component/DashoardCommon/Events/EditEvent";
import EventDetail from "./component/DashoardCommon/Events/EventDetail";
import Events from "./component/DashoardCommon/Events/Events";
import EventsByRestaurant from "./component/DashoardCommon/Events/EventsByRestaurant";

import CreateUser from "./component/DashoardCommon/Users/CreateUser";
import EditUser from "./component/DashoardCommon/Users/EditUser";
import ModEditUser from "./component/DashoardCommon/Users/ModEditUser";

import ViewUser from "./component/DashoardCommon/Users/ViewUser";


import CreateRestaurant from "./component/DashoardCommon/Restaurants/CreateRestaurant";
import EditRestaurant from "./component/DashoardCommon/Restaurants/EditRestaurant";
import ViewRestaurant from "./component/DashoardCommon/Restaurants/ViewRestaurant";


import "../node_modules/font-awesome/css/font-awesome.min.css";
import Contact from "./component/Contact/Contact";
import Homepage from "./component/home/Homepage";
import Login from "./component/login/Login";
import Register from "./component/login/Register";


import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";


function App() {

  const [user, setUser] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [moderator, setModerator] = useState(false);
  const [restaurant, setRestaurant] = useState(false);




  useEffect(() => {


    if ("userD" in localStorage) {
      const userSesion = JSON.parse(localStorage.getItem("userD"))
      const userDetail = userSesion.role

      switch (userDetail) {
        case 'user':
          setUser(userDetail);
          break;
        case 'admin':
          setAdmin(userDetail);
          break;
        case 'moderator':
          setModerator(userDetail);
          break;
        case 'restaurant':
          setRestaurant(userDetail);
          break;
        default:
          window.location.href = `/`
      }

    } else {
      setUser(false);
    }


  }, []);

  return (
    <Router basename={"/"}>
      <Switch>
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/`}
          component={Homepage}
        />

        {/* <Route exact path={`${process.env.PUBLIC_URL}/`}>
          {
            user && user._id ? <Homepage /> : <Login />
          }<Homepage /></Route> */}


        <Route
          exact
          path={`${process.env.PUBLIC_URL}/Contact`}
          component={Contact}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/RestaurantDetail/:id`}
          render={(props) => <RestaurantDetail {...props} />}
          component={(props) => <RestaurantDetail {...props} />}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/Restaurants`}
          component={Restaurants}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/EventDetail/:id`}
          render={(props) => <EventDetail {...props} />}
        // component={(props) => <EventDetail {...props} />}
        />


        {admin && <Route
          exact
          path={`${process.env.PUBLIC_URL}/EditEvent/:id`}
          render={(props) => <EditEvent {...props} />}
          component={(props) => <EditEvent {...props} />}
        />}
        {moderator && <Route
          exact
          path={`${process.env.PUBLIC_URL}/EditEvent/:id`}
          render={(props) => <EditEvent {...props} />}
          component={(props) => <EditEvent {...props} />}
        />}
        {restaurant && <Route
          exact
          path={`${process.env.PUBLIC_URL}/EditEvent/:id`}
          render={(props) => <EditEvent {...props} />}
          component={(props) => <EditEvent {...props} />}
        />}


        <Route
          exact
          path={`${process.env.PUBLIC_URL}/Events`}
          component={Events}
        />

        <Route
          exact
          path={`${process.env.PUBLIC_URL}/EventsByRestaurant/:id`}
          render={(props) => <EventsByRestaurant {...props} />}
          component={(props) => <EventsByRestaurant {...props} />}
        />




        {admin && <Route
          exact
          path={`${process.env.PUBLIC_URL}/CreateUser/:role`}
          render={(props) => <CreateUser {...props} />}
          component={(props) => <CreateUser {...props} />}
        />
        }

        {admin &&
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/EditUser/:id`}
            render={(props) => <EditUser {...props} />}
            component={(props) => <EditUser {...props} />}
          />}

        {admin && <Route
          exact
          path={`${process.env.PUBLIC_URL}/ViewUser/:id`}
          render={(props) => <ViewUser {...props} />}
          component={(props) => <ViewUser {...props} />}
        />}


        {moderator && <Route
          exact
          path={`${process.env.PUBLIC_URL}/ModEditUser/:id`}
          render={(props) => <ModEditUser {...props} />}
          component={(props) => <ModEditUser {...props} />}
        />}

        {moderator && <Route
          exact
          path={`${process.env.PUBLIC_URL}/ViewUser/:id`}
          render={(props) => <ViewUser {...props} />}
          component={(props) => <ViewUser {...props} />}
        />}



        {admin && <Route
          exact
          path={`${process.env.PUBLIC_URL}/CreateRestaurant`}
          render={(props) => <CreateRestaurant {...props} />}
          component={(props) => <CreateRestaurant {...props} />}
        />}

        {moderator && <Route
          exact
          path={`${process.env.PUBLIC_URL}/CreateRestaurant`}
          render={(props) => <CreateRestaurant {...props} />}
          component={(props) => <CreateRestaurant {...props} />}
        />}


        {admin && <Route
          exact
          path={`${process.env.PUBLIC_URL}/EditRestaurant/:id`}
          render={(props) => <EditRestaurant {...props} />}
          component={(props) => <EditRestaurant {...props} />}
        />}


        {moderator && <Route
          exact
          path={`${process.env.PUBLIC_URL}/EditRestaurant/:id`}
          render={(props) => <EditRestaurant {...props} />}
          component={(props) => <EditRestaurant {...props} />}
        />}






        <Route
          exact
          path={`${process.env.PUBLIC_URL}/ViewRestaurant/:id`}
          render={(props) => <ViewRestaurant {...props} />}
          component={(props) => <ViewRestaurant {...props} />}
        />



        {restaurant && <Route
          exact
          path={`${process.env.PUBLIC_URL}/CreateEvent`}
          component={CreateEvent}
        />
        }

        {moderator && <Route
          exact
          path={`${process.env.PUBLIC_URL}/CreateEvent`}
          component={CreateEvent}
        />
        }

        {admin && <Route
          exact
          path={`${process.env.PUBLIC_URL}/CreateEvent`}
          component={CreateEvent}
        />
        }

        {restaurant && <Route
          exact
          path={`${process.env.PUBLIC_URL}/ResCreateEvent`}
          component={ResCreateEvent}
        />
        }


        {user && <Route
          exact
          path={`${process.env.PUBLIC_URL}/DashboardUser`}
          component={DashboardUser}
        />
        }


        {restaurant && <Route
          exact
          path={`${process.env.PUBLIC_URL}/DashboardRestaurant`}
          component={DashboardRestaurant}
        />
        }


        {admin && <Route
          exact
          path={`${process.env.PUBLIC_URL}/Admin`}
          component={Admin}
        />
        }

        {moderator &&
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/Moderator`}
            component={Moderator}
          />

        }

        <Route path={`${process.env.PUBLIC_URL}/Login`}><Login /></Route>


        <Route
          exact
          path={`${process.env.PUBLIC_URL}/Register`}
          component={Register}
        />
      </Switch>
    </Router>



  );
}


ReactDOM.render(<App />, document.getElementById("root"));

// reportWebVitals();
