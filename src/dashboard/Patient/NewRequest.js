import React, { Component } from "react";
import { Form, Col, Button } from "react-bootstrap";
import DateTimePicker from "react-datetime-picker";
import { newRequest } from "../../auth/api";
import { withRouter } from "react-router-dom";
import { Route, Redirect } from "react-router-dom";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody
} from "mdbreact";
// import './SignUp.scss';

export class NewRequest extends Component {
  constructor() {
    super();

    this.state = {
      assistantId: "",
      date: new Date(),
      pickup: "",
      dropoff: "",
      carDescription: "",
      healthConditions: "",
      specialNeeds: "",
      package: Boolean,
      token: ""
    };
  }
  componentDidMount() {
    this.setState({
      token: this.props.user.token,
      assistantId: this.props.assistantId
    });
  }

  handleChange = event =>
    this.setState({
      [event.target.name]: event.target.value
    });

  newReq = event => {
    const self = this;

    event.preventDefault();
    newRequest(this.state)
      .then(res => {
        return self.props.history.push(`/Patient`);
      })
      .catch(e => console.log(e));
  };
  onChange = date => this.setState({ date });

  render() {
    return (
      <MDBContainer id={"main"}>
        <MDBRow>
          <MDBCol md="6">
            <MDBCard className="card-image">
              <MDBCardBody>
                <Form onSubmit={this.newReq}>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGrid1">
                      <Form.Label>Pick up</Form.Label>
                      <Form.Control
                        type="text"
                        name="pickup"
                        placeholder="from"
                        onChange={this.handleChange}
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>Drop off</Form.Label>
                      <Form.Control
                        type="text"
                        name="dropoff"
                        placeholder="destination"
                        onChange={this.handleChange}
                      />
                    </Form.Group>
                  </Form.Row>

                  <Form.Group controlId="formGridAddress1">
                    <Form.Label>Health Conditions</Form.Label>
                    <Form.Control
                      placeholder="disabilities diseases"
                      name="healthConditions"
                      onChange={this.handleChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="formGridAddress2">
                    <Form.Label> Special Needs</Form.Label>
                    <Form.Control
                      name="specialNeeds"
                      placeholder=" Strollers,Wheelchairs"
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                  <Form.Group controlId="formGridAddress2">
                    <Form.Label> Car Type</Form.Label>
                    <Form.Control
                      placeholder="Wheelchair Van , handicapped van "
                      name="carDescription"
                      onChange={this.handleChange}
                    />
                  </Form.Group>

                  <Form.Group as={Col}>
                    <DateTimePicker
                      onChange={this.onChange}
                      value={this.state.date}
                    />
                  </Form.Group>

                  <MDBBtn color="deep-orange" type="submit">
                    Submit
                  </MDBBtn>
                </Form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default withRouter(NewRequest);
