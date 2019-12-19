import React, { Component } from 'react'
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardTitle,
    MDBCardText,
    MDBCol
  } from "mdbreact";
export class ReqHis extends Component {
    render() {
       if (!this.props.req.completed)
        return ""
        else
        return (
            <MDBCol>
            <MDBCard style={{ width: "22rem" }}>
              <MDBCardImage
                className="img-fluid"
                src="https://cdn3.iconfinder.com/data/icons/point-of-interest-1/96/taxi-512.png"
                waves
              />
              <MDBCardBody>
                <MDBCardTitle>Request from </MDBCardTitle>
                <MDBCardText>
                  <ul>
                    <li> patientId:{this.props.req.patientId} </li>
                    <li> Pickup:{this.props.req.pickup} </li>
                    <li> drop off:{this.props.req.dropoff} </li>
                    <li> date:{this.props.req.data} </li>
                    <li> specialNeeds:{this.props.req.specialNeeds} </li>
                    <li> requestStatus:{this.props.req.requestStatus} </li>
                    
                 
                  </ul>
                </MDBCardText>

           
          
                
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        )
    }
}

export default ReqHis
