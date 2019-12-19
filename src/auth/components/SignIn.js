import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody
} from "mdbreact";
import "./SignUp.scss";
import { signIn } from "../api";
import messages from "../messages";

import { patient, assistant } from "../helpMethods.js";

class SignIn extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: ""
    };
  }
 
  handleChange = event =>
    this.setState({
      [event.target.name]: event.target.value
    });

  onSignIn = event => {
    event.preventDefault();

    const { history, setUser } = this.props;

    let url = "";
    
    signIn(this.state)
      .then(res => {
        const temp = res.data.user.role.localeCompare("Assistant");
        if (temp === 0) {
          console.log("sign in as assistant");
          url = "/assistant";

          
          return setUser(res.data.user.name, assistant(res));
        } else {
          console.log("sign in as patient");
          url = `/patient`;
         
          return setUser(res.data.user.name, patient(res));
        }
      })

      .then(res => history.push(url))
      .catch(error => {
        console.error(error);
        this.setState({ email: "", password: "" });
      });
  };

  render() {
    const { email, password } = this.state;

    return (
      <MDBContainer id={"main"}>
        <br />
        <MDBRow>
          <MDBCol md="6">
            <MDBCard className="card-image">
              <MDBCardBody>
                <form className="auth-form" onSubmit={this.onSignIn}>
                  <h3 className="white-text text-center mb-5 mt-4 font-weight-bold">
                    <strong>Sign In</strong>
                  </h3>

                  <label htmlFor="email">Email</label>
                  <MDBInput
                    required
                    icon="envelope"
                    type="email"
                    name="email"
                    value={email}
                    placeholder="Email"
                    onChange={this.handleChange}
                  />
                  <label htmlFor="password">Password</label>
                  <MDBInput
                    required
                    icon="lock"
                    name="password"
                    value={password}
                    type="password"
                    placeholder="Password"
                    onChange={this.handleChange}
                  />
                  <div className="text-center">
                    <MDBBtn color="deep-orange" type="submit">
                      Sign In
                    </MDBBtn>
                  </div>
                </form>
                <br />
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default withRouter(SignIn);
