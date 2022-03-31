import React, { Component, useState } from "react";
import {Link} from 'react-router-dom';
import "react-tabs/style/react-tabs.css";
import {
  UserRegistration,
  UsernameValidation,
} from './services/RegistrationService';
import Message from './elements/Message';
import Error from './elements/Error';
import {
  REGISTRATION_FIELDS,
  REGISTRATION_MESSAGE,
  ERROR_IN_REGISTRATION,
} from './MessageBundle';
import { withRouter } from "react-router";


//local
const base_url = 'http://localhost:5000/api/';

//heroku

// const base_url = 'https://aplate-api.herokuapp.com/api/'



class Register extends Component {
  constructor (props) {
    super (props);
  this.state = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    emailId: '',
    register: false,
    error: false,
  }
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



  
  handleOnBlur = async e => {
    this.setState ({
      username: e.target.value,
    });
    const data = {
      username: this.state.username,
    };
    const isUsernameTaken = await UsernameValidation (data);

    console.log(isUsernameTaken)

    isUsernameTaken === 204
      ? this.setState ({user_name_taken: true})
      : this.setState ({user_name_taken: false});
  };



  onSubmit = async(e) => {

    e.preventDefault ();
  
    const data = {

      username: this.state.username,
      password: this.state.password,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      emailId: this.state.emailId,
      role: this.state.role
    }


    const registerStatus = await UserRegistration (data);
    console.log(registerStatus)


    if (registerStatus === 200) {
      this.setState ({
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        emailId: '',
        register: true,
        error: false,
      });
    } else
      this.setState ({
        error: true,
        register: false,
      });

      setTimeout(() => {
        window.location.href="/Login"
        }, 1000);

  }

  render() {
    const {register, error, user_name_taken} = this.state;
    return (
     
      <div className="Register">
      <div className="base-container" >

       <form onSubmit={this.onSubmit}>
        <div className="content">    
    
            <div className="form">
              <div className="form-group">
              <div className="fields">   
              <label> User Name&emsp; </label>
              <input
                  className="brd-rd3"
                  type="text"
                  value={this.state.username}
                    onChange={this.onChangeUserName}
                    onBlur={this.handleOnBlur}
                    required
                  />
                  {user_name_taken&&<Error message={"Username taken"}/>}

              </div>

              <div className="fields">   
              <label> First Name&emsp; </label>
              <input
                  className="brd-rd3"
                  type="text"
                  value={this.state.firstName}
                    onChange={this.onChangeFirstName}
                    required
                  />
              </div>

              <div className="fields">   
              <label> Last Name&emsp; </label>
              <input
                  className="brd-rd3"
                  type="text"
                  value={this.state.lastName}
                    onChange={this.onChangeLastName}
                    required
                  />
              </div>

              <div className="fields">   
              <label> &emsp;&emsp;Email&emsp; </label>
              <input
                  className="brd-rd3"
                  type="email"
                  value={this.state.emailId}
                    onChange={this.onChangeEmailId}
                    required
                  />
              </div>

              <div className="fields">   
              <label> Password&emsp; </label>
              <input
                  className="brd-rd3"
                  type="password"
                  value={this.state.password}
                    onChange={this.onChangePassword}
                    required
                    
                  />
              </div>


              </div>

              </div>   
              <div className="buttons">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={user_name_taken}
              >
                {' '}{REGISTRATION_FIELDS.REGISTER}{' '}
              </button>
              {' '}
              <Link to="/Login"> Already have account ? </Link>
              {' '}
            </div>{' '}
            </div>
        </form>  
        <br /><br />
        {' '}
        {error && <Error message={ERROR_IN_REGISTRATION} />}
        {' '}
        {register && <Message message={REGISTRATION_MESSAGE} />}
        {' '}
        </div>  
        <br /><br /><br />
       </div>
               
    );
  }
}
export default withRouter(Register);
