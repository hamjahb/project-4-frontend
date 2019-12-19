import React, { Component } from "react";
import { ThemeContext } from "../../../ThemeContext/ThemeContext";
import { Form, Col, Button } from "react-bootstrap";
import DateTimePicker from "react-datetime-picker";
import { updateRequest } from "../../../auth/api";
import { withRouter } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';


export class UpdateRequest extends Component {
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
      token: "",
      redirect: false
    };
  }

  static contextType = ThemeContext;
  componentDidMount() {
    const temp = this.context.reqid;
    this.setState({
      assistantId: temp.assistantId,
      date: temp.date,
      pickup: temp.pickup,
      dropoff: temp.dropoff,
      carDescription: temp.carDescription,
      healthConditions: temp.healthConditions,
      specialNeeds: temp.specialNeeds,
      package: temp.package,
      token: temp.token,
      _id: temp._id
    });
  }

  handleChange = event =>
    this.setState({
      [event.target.name]: event.target.value
    });

  onChange = date => this.setState({ date });

  updatereq = event => {
    event.preventDefault();
    const self = this
    updateRequest(this.state)
      .then(res => {return self.props.history.push(`/Patient`)})
      .catch(e => console.log(e));
  };
  render() {
    return (
      <MDBContainer id={'main'}>
      <MDBRow>
      <MDBCol md="6">
        <MDBCard  className='card-image'>
          <MDBCardBody>

      <Form onSubmit={this.updatereq}>
        <Form.Row>
          <Form.Group as={Col} controlId="formGrid1">
            <Form.Label>Pick up</Form.Label>
            <Form.Control
              type="text"
              name="pickup"
              placeholder={this.state.pickup}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Drop off</Form.Label>
            <Form.Control
              type="text"
              name="dropoff"
              placeholder={this.state.dropoff}
              onChange={this.handleChange}
            />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="formGridAddress1">
          <Form.Label>Health Conditions</Form.Label>
          <Form.Control
            name="healthConditions"
            placeholder={this.state.healthConditions}
            onChange={this.handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formGridAddress2">
          <Form.Label> needs</Form.Label>
          <Form.Control
            name="specialNeeds"
            placeholder={this.state.specialNeeds}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formGridAddress2">
          <Form.Label> car type</Form.Label>
          <Form.Control
            name="carDescription"
            placeholder={this.state.carDescription}
            onChange={this.handleChange}
          />
        </Form.Group>

        <Form.Group as={Col}>
          <DateTimePicker onChange={this.onChange} value={this.state.date} />
        </Form.Group>

        <MDBBtn  color="deep-orange" type="submit">
          Update
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

export default withRouter(UpdateRequest);
