import React, { Component, createContext } from "react";

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  constructor() {
    super();
    this.state = {
      reqid: "",
      patientReqGlobule: [],
      user: null,
      assistantId: null,
      userObj: {},
      assistant:[],
      
    };
  }
// **********************//
setOb = (user, userObj ,assistantId) => this.setState({ user, userObj,assistantId });
  setAssistantId = assistantId => this.setState({ assistantId });
  clearUser = () => this.setState({ user: null });



  ///////////////////////
  req = e => {
    this.setState({ reqid: e });
  };

  patientReqSet = e => {
    this.setState({ patientReqGlobule: e });
  };
  render() {
   
    return (
      <ThemeContext.Provider
        value={{
          ...this.state,
          req: this.req,
          patientReqSet: this.patientReqSet,
          setOb:this.setOb
        }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
