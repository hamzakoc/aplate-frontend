
import "./style.scss";

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LoginService from './services/LoginService';
import Message from './elements/Message';
import Error from './elements/Error';
import {
  COMMON_FIELDS,
  REGISTRATION_FIELDS,
  LOGIN_FIELDS,
  LOGIN_MESSAGE,
  ERROR_IN_LOGIN,
} from './MessageBundle';
import axios from 'axios';
import { loginValidation } from "./Helper";

// local

// const base_url = 'http://localhost:5000/api/';

//Heroku

const base_url = 'https://aplate-api.herokuapp.com/';


export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      error: false,
      loginSuccess: false,
      logedUser:[],
      logedRestaurant:[]

    };
  }
  

  handleOnChangeUserName = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  handleOnChangePassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  };




  onSubmit = async (e) => {
    const data = {
      username: this.state.username,
      password: this.state.password,
    };

    const loginResult = await LoginService(data);

    const loginResultRes = await axios.post(base_url+'loginRestaurant', data)
    .then(res => res.status);

    console.log(loginResult)
    console.log(loginResultRes)

    
    if (loginResult !== 200) {
      this.setState({
        error: true,
        loginSuccess: false,
      });
    } else{
      this.setState({
        loginSuccess: true,
        error: false,
      });

      axios.get(base_url+"api/admins/")
      .then(response => {
  
         const usersFiltered = response.data
          .map(user=>user)
          .filter(user =>
             user.username==this.state.username)
  
          const logedUser = usersFiltered
          console.log(logedUser[0].role)
          this.setState({ logedUser })
                      

          localStorage.setItem('userD', JSON.stringify({role:this.state.logedUser[0].role, username:this.state.logedUser[0].username, id:this.state.logedUser[0]._id}));

          switch(logedUser[0].role) {
            case 'user':
              window.location.href=`DashboardUser`
              
              break;
            case 'moderator':
              window.location.href=`Moderator`
              break;
            case 'admin':
              window.location.href=`Admin`
                break;
            case 'deactive':
              alert("Your acccount is not active anymore. Please contact support")
              window.location.href=`/`
              localStorage.clear()
                  break;
            default:
              window.location.href=`/`
          }
                   
      })
    }

 

    if (loginResultRes !== 200) {
      this.setState({
     
      });
    } else{
      this.setState({
        loginSuccess: true,
        error: false,
      });

      axios.get(base_url+"api/restaurants/")
      .then(response => {
  
         const usersFiltered = response.data
          .map(user=>user)
          .filter(user =>
             user.username==this.state.username)
  
          const logedUser = usersFiltered
          this.setState({ logedUser })
                      

          localStorage.setItem('userD', JSON.stringify({role:this.state.logedUser[0].role, username:this.state.logedUser[0].username, id:this.state.logedUser[0]._id}));

          switch(logedUser[0].role) {
            case 'restaurant':
              window.location.href=`DashboardRestaurant`
              break;
           
            default:
              window.location.href=`/`
          }
                   
      })
    }

 
   
  };
  
  render() {
    const { loginSuccess, error } = this.state;
    return (
      <div className="Login">
      <div className="base-container" >
       <form onSubmit={this.onSubmit}>
        <div className="content">
       
          <div className="form">
            <div className="form-group">
            <div className="fields">
              <p> {COMMON_FIELDS.USER_NAME} </p>    {' '}
              <input
                type="text"
                name="Username"
                onChange={this.handleOnChangeUserName}
                autoComplete="Username"
                required
              />
            </div>{' '} {' '}
            </div>
            <div className="form-group">
            <div className="fields">
              {' '}
              <p> {COMMON_FIELDS.PASSWORD} </p>    {' '}
              <input
                type="password"
                name="Password"
                onChange={this.handleOnChangePassword}
                autoComplete="Password"
                required
              />{' '}
                  {' '}
            </div>{' '}
            {' '}
            </div>
          </div>
        </div>
        <div className="footer">
        <div className="buttons">
              {' '}
              <button
                type="button"
                onClick={this.onSubmit}
                className="btn btn-primary"
              >
                {' '}
                  {LOGIN_FIELDS.LOGIN}    {' '}
              </button>{' '}
                  <Link to="/register">
                     {REGISTRATION_FIELDS.REGISTER} </Link>  {' '}
               {' '}
            </div>{' '}
               {' '}
          
        </div>
        </form>
        <br /><br /><br />
        {loginSuccess && <Message message={LOGIN_MESSAGE} />}    {' '}
        {error && <Error  message={ERROR_IN_LOGIN} />}    {' '}
            <br /><br /><br /><br />
      </div>
      </div>
    );
  }
}
