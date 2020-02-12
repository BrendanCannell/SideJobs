import React, { Component } from "react";

import API from '../../utils/API';


class UserProfile extends Component{
  state = {
    users: []
  };
  // componentDidMount() {
  //   console.log("inot api")
  //     API.getUserProfile(this.props.match.params.id)
  //     .then(res => {
  //       this.setState ({ users: res.data });
  //       console.log(res, "res data");
  //     }).catch (err => console.log(err));
  // };
  render() {
    return (
      <div> you made it </div>
    )
  }
  
}


export default UserProfile;
  
