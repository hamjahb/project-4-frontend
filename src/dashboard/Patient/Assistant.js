import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Route, Redirect } from "react-router-dom";
import { MDBMedia, MDBIcon, MDBBtn } from "mdbreact";
import {ListGroup ,ListGroupItem} from 'react-bootstrap';
export class Assistant extends Component {
  constructor() {
    super();
    this.state = {
      redirect: false
    };
  }
  setRedirect = event => {
    event.preventDefault();
    this.setState({
      redirect: true
    });
  };
  renderRedirect = () => {
    if (this.state.redirect) {
      this.setState({
        redirect: false
      });
      this.props.setAssistantId(this.props.assistant._id);
      return (
        <Redirect
          to={`/${this.props.user.role}/newrequest`}
        />
      );
    }
  };

  render() {
    return (
      <MDBMedia tag="li">
        <MDBMedia left>
          <MDBMedia
            object
            src="https://mdbootstrap.com/img/Photos/Others/avatar-min2.jpg"
            alt="Generic placeholder image"
            onClick={this.setRedirect}
          />
        </MDBMedia>
        <MDBMedia body>
          {this.renderRedirect()}
          <MDBMedia heading>{this.props.assistant.name}</MDBMedia>
          <MDBIcon icon="star" className="blue-text" />
          <MDBIcon icon="star" className="blue-text" />
          <MDBIcon icon="star" className="blue-text" />
          <MDBIcon icon="star" className="grey-text" />
          <MDBIcon icon="star" className="grey-text" />

          <ListGroup className="list-group-flush">
            <ListGroupItem> Age:{this.props.assistant.age}</ListGroupItem>
            <ListGroupItem> Phone:{this.props.assistant.phone}</ListGroupItem>
            <ListGroupItem> {this.props.assistant._id}</ListGroupItem>
          </ListGroup>
        </MDBMedia>
      </MDBMedia>
    );
  }
}

export default Assistant;
