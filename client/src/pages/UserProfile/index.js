import React, { Component } from "react";
import UserProfileCard from '../../components/UserProfile'
import API from '../../utils/API';


class UserProfile extends Component{
  state = {
    users: []
  };

  componentDidMount() {
    console.log("inot api")
      API.getUserProfile(this.props.match.params.id)
      .then(res => {
        this.setState ({ users: res.data });
        console.log(res, "res data");
        console.log(this.state.users);
      }).catch (err => console.log(err));
  };

  render() {
    return (
      <div> 
        <UserProfileCard

        // key={this.state.users._id}
        firstName={this.state.users.firstName}
        lastName={this.state.users.lastName}
        // phoneNumber={this.state.users.phoneNumber}
        email={this.state.users.email}
        // zipCode={this.state.users.zipCode}
        // city={this.state.users.city}
        // state={this.state.users.state}
        password={this.state.users.password}

        ></UserProfileCard>
      </div>
    )
  }
  
}


export default UserProfile;
  
