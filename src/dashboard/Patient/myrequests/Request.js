import React, { Component } from 'react'
import {deleteRequest} from "../../../auth/api"
import {Redirect} from "react-router-dom"
import { ThemeContext }  from "../../../ThemeContext/ThemeContext"
import{ Card ,Button,CardDeck,CardGroup}from 'react-bootstrap'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

export class Request extends Component {
  constructor() {
    super();
    this.state = {
      redirect: false
    };
  }

  static contextType = ThemeContext;
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

      const { req } = this.context;
      req(this.props.request);
      return (
        <Redirect
          to={{
            pathname: `/Patient/myrequests/update/${this.props.request._id}`,
            state: { id: this.props.request._id }
          }}
        />
      );
    }
  };
  handlDelete = e => {
    e.preventDefault();

    deleteRequest(this.props.request);
    this.props.apicall();
  };
  
    render() {
       
        return (

    
      <MDBCard className="my-5 mx-3">
        <MDBCardImage className="img-fluid" src="https://www.tufitech.com/wp-content/uploads/2016/12/Gear-S3-find-my-car-app.jpg" waves />
        <MDBCardBody>
          <MDBCardTitle className="deep-orange-text text-center">My Ride</MDBCardTitle>
          <MDBCardText>
                   
           
                  {this.renderRedirect()}
                <lu>
                  <li>pickup:{this.props.request.pickup}</li>
                  <li>dropoff:{this.props.request.dropoff}</li>
                  <li>data:{this.props.request.date}</li>
                  <li>completed:{this.props.request.completed}</li>
                  <li>assistantId:{this.props.request.assistantId}</li>
                  
            </lu>
            <br/>
        
            <MDBBtn  color="deep-orange"  onClick={this.handlDelete}>Delete</MDBBtn>
            <MDBBtn color="deep-orange" onClick={this.setRedirect}>edit</MDBBtn>

           </MDBCardText>
        </MDBCardBody>
      </MDBCard>
     
        )
    }

}

export default Request;
