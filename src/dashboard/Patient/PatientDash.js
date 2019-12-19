import React, { Component } from "react";
import { MDBMedia, MDBIcon, MDBBtn } from "mdbreact";
import { allAvailableAssistant } from "../../auth/api";
import { Assistant } from "./Assistant";
import { ThemeContext } from "../../ThemeContext/ThemeContext";
export class PatientDash extends Component {
  constructor() {
    super();
    this.state = {
      assistant: []
    };
  }
  static contextType = ThemeContext;

  componentDidMount() {
    allAvailableAssistant(this.props.user).then(res => {
      console.log(res.data, "data");
      const temp = res.data.requests.map(assistant => {
        return {
          name: assistant.name,
          age: assistant.age,
          phone: assistant.phone,
          _id: assistant._id
        };
      });
      this.setState({ assistant: temp });
    });
  }
  render() {
    const Assistants = this.state.assistant.map(val => {
      return (
        <Assistant
          assistant={val}
          user={this.props.user}
          setAssistantId={this.props.setAssistantId}
        />
      );
    });

    return (
      <MDBMedia list className="mt-3">
        {Assistants}
      </MDBMedia>
    );
  }
}

export default PatientDash;
