import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { signUp, signIn } from "../api";
import messages from "../messages";
import { ThemeContext } from "../../ThemeContext/ThemeContext";
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

class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      age: "",
      email: "",
      phone: "",
      type: "Patient",
      password: "",
      passwordConfirmation: ""
    };
  }
  static contextType = ThemeContext;
  handleChange = event =>
    this.setState({
      [event.target.name]: event.target.value
    });

  onSignUp = event => {
    event.preventDefault();

    const { history, setUser } = this.props;
    const { setUserG } = this.context;
    signUp(this.state)
      .then(() => signIn(this.state))
      .then(res => {
        setUser(res.data.user.name)
    
      
      })

      .then(() => history.push("/"))
      .catch(error => {
        console.error(error);
        this.setState({ email: "", password: "", passwordConfirmation: "" });
      });
  };

  render() {
    const {
      email,
      password,
      passwordConfirmation,
      age,
      name,
      phone,
      type
    } = this.state;

    return (
      <MDBContainer id={"main"}>
        <MDBRow>
          <MDBCol md="6">
            <MDBCard className="card-image">
              <MDBCardBody>
                <form className="auth-form" onSubmit={this.onSignUp}>
                  <h3 className="white-text text-center mb-5 mt-4 font-weight-bold">
                    <strong>Sign Up</strong>
                  </h3>
                  <label htmlFor="name">Name</label>
                  <MDBInput
                    required
                    icon="user"
                    name="name"
                    value={name}
                    type="text"
                    placeholder="Name"
                    onChange={this.handleChange}
                  />

                  <label htmlFor="age">Age</label>
                  <MDBInput
                    required
                    name="age"
                    value={age}
                    type="Number"
                    placeholder="age"
                    onChange={this.handleChange}
                  />

                  <label htmlFor="Phone Number">Phone Number</label>
                  <MDBInput
                    required
                    name="phone"
                    value={phone}
                    type="tel"
                    placeholder="phone number"
                    onChange={this.handleChange}
                  />

                  <label htmlFor="email">Email</label>
                  <MDBInput
                    required
                    icon="envelope"
                    name="email"
                    value={email}
                    type="email"
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
                  <label htmlFor="passwordConfirmation">Confirm Password</label>
                  <MDBInput
                    required
                    icon="exclamation-triangle"
                    name="passwordConfirmation"
                    value={passwordConfirmation}
                    type="password"
                    placeholder="Confirm Password"
                    onChange={this.handleChange}
                  />

                  <Form.Label>I am ?</Form.Label>
                  <Form.Control
                    as="select"
                    required
                    name="type"
                    value={type}
                    onChange={this.handleChange}
                  >
                    <option> Patient</option>
                    <option>Assistant</option>
                  </Form.Control>

                  <div className="text-center py-4 mt-3">
                    <MDBBtn color="deep-orange" type="submit">
                      Register
                    </MDBBtn>

                    <MDBCol md="12">
                      <br />
                      <p className="font-small white-text d-flex justify-content-end">
                        Have an account?
                        <Link
                          to="/Sign-In"
                          className="text-info ml-1 font-weight-bold"
                        >
                          Log in
                        </Link>
                      </p>
                    </MDBCol>
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default withRouter(SignUp);
