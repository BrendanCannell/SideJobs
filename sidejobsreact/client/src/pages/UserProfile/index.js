import React, { Component } from "react";
import UserProfileCard from '../../components/UserProfile'
import API from '../../utils/API';


class UserProfile extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    console.log("inot api")
    API.getUserProfile(this.props.match.params.id)
      .then(res => {
        this.setState({ users: res.data });
        console.log(res, "res data");
        console.log(this.state.users);
        console.log(this.state.users.post.service, 'service')
        console.log(this.state.users.post.description, 'description')

      }).catch(err => console.log(err));
  };

  render() {
// if(this.state.users.post) {
//   console.log(this.state.users.post.firstName, 'render')
// }
    return (

      <div>
       {/* {   this.state.users.post ? */}

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
          // service={this.state.users.post.service}
          // description={this.state.users.post.description}
          // firstPost={this.state.users.post.firstName}
          // lastPost={this.state.users.post.lastName}

          // city={this.state.users.post.city}
          // zipCode={this.state.users.post.zipCode}
          // costPerHour={this.state.users.post.costPerHour}
          // phonePost={this.state.users.post.phoneNumber}
          />



{/* 
          // /> : null
        // } */}
        </div>

    )

  }

}


export default UserProfile;

