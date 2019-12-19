import React, { Component } from "react";
import { myrequestsAssistants, user } from "../../auth/api";
import Patient from "./Patient";
import { ThemeContext } from "../../ThemeContext/ThemeContext";

export class AssistantDash extends Component {
  constructor() {
    super();
    this.state = {
      patientReq: []
    };
  }

  static contextType = ThemeContext;
  setPatient = patient=> this.setState({patient});
  apiCallReq = () => {
    myrequestsAssistants(this.props.user)
      .then(res => {
      
        const temp = res.data.requests.map(patient => {
          return {
            assistantId: patient.assistantId,
            patientId: patient.patient,
            completed: patient.completed,
            requestStatus: patient.requestStatus,
            date: patient.date,
            pickup: patient.trip.start,
            dropoff: patient.trip.destination,
            carDescription: patient.carDescription,    
            specialNeeds: patient.specialNeeds,
            package: patient.package,
            token: this.props.user.token,
            _id: patient._id,
            patient: ""
          };
        });
        this.setState({ patientReq: temp });
      }).then((e)=>{

        const { patientReqSet } = this.context;
        patientReqSet(this.state.patientReq)

      })

      .catch(e => console.log(e, "errer"));
  };

  componentDidMount() {
    // const { setOb } = this.context;
    // setOb(this.props.user)
    this.apiCallReq();
  }
  
  render() {
    const arr = this.state.patientReq.map(x => {
      return <Patient patient={x} user={this.props.user} setPatient={this.setPatient} apiCallReq={this.apiCallReq}/>;
    });
    return <div>{arr}</div>;
  }
}

export default AssistantDash;
