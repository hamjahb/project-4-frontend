import React, { Component } from "react";
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
import "../../auth/components/SignUp.scss"
export class Prof extends Component {
    constructor(){
        super();

    this.state = {
      name: "",
      age: "",
      email: "",
      phone: "",
      healthConditions: ""
    };

    }
  onSubmit = event => {};
  static contextType = ThemeContext;
  handleChange = event =>
  this.setState({
    [event.target.name]: event.target.value
  });
  render() {
    
    return (
      <MDBContainer id={"main"}>
        <MDBRow>
          <MDBCol md="6">
            <MDBCard className="card-image">
              <MDBCardBody>
                <form className="auth-form" onSubmit={this.onSubmit}>
                  <h3 className="white-text text-center mb-5 mt-4 font-weight-bold">
                    <strong>Profile</strong>
                  </h3>
                  <label htmlFor="name">Name</label>
                  <MDBInput
                    required
                    icon="user"
                    name="name"
                    type="text"
                    placeholder={this.props.user.name}
                    onChange={this.handleChange}
                  />

                  <label htmlFor="age">Age</label>
                  <MDBInput
                    required
                    name="age"
                   
                    type="Number"
                    placeholder={this.props.user.age}
                    onChange={this.handleChange}
                  />

                  <label htmlFor="Phone Number">Phone Number</label>
                  <MDBInput
                    required
                    name="phone"
                 
                    type="tel"
                    placeholder={this.props.user.phone}
                    onChange={this.handleChange}
                  />

                  <label htmlFor="text">healthConditions</label>
                  <MDBInput
                    required
                    name="healthConditions"
                    placeholder={this.props.user.phone}
                    onChange={this.handleChange}
                  />
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default Prof;
