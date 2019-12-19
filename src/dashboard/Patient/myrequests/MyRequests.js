import React, { Component } from 'react'
import {myrequests} from "../../../auth/api"
import Request from "./Request"
import { MDBCardGroup } from 'mdbreact';

export class MyRequests extends Component {
constructor(){
    super();
    this.state = {
        myrequests:[],
      };
}    


 apicall =()=>{

    myrequests(this.props.user).then(res=>{
     
        const temp = res.data.requests.map((myrequests)=>{
            return { 
                carDescription:myrequests.carDescription,
                healthConditions:myrequests.healthConditions,
                specialNeeds:myrequests.specialNeeds,
                package:myrequests.package,
                pickup:myrequests.trip.start ,
                dropoff:myrequests.trip.destination,
                completed:myrequests.completed,
                requestStatus:myrequests.requestStatus,
                date:myrequests.date,
                assistantId:myrequests.assistantId,
                _id:myrequests._id,
                token:this.props.user.token
            }
        })
        this.setState({myrequests:temp})
    })

}

componentDidMount(){

        this.apicall()

  
}
    
    render() {


        const myrequests= this.state.myrequests.map((val,key)=>{
            return (
                <Request request={val} apicall={this.apicall} /> )}
                )
                return (
                   

            <MDBCardGroup>                
                {myrequests}
            </MDBCardGroup>
        )
    }
}

export default MyRequests
