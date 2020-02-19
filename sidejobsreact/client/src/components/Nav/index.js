import React from "react";
import { Link } from "react-router-dom";
import { Flex, Text, Box, Button } from "rebass";
// import { Badge } from 'react-bootstrap'

const NavBarStyle = {
  padding: "8px",
  paddingTop: "1px",
  paddingBottom: "1px",
  // font: 'montserrat'
  // backgroundColor: '#EA0E96',
  backgroundColor: "#E8406D",
  fontSide: "50px"
};
// };
const SignInButtonStyle = {
  backgroundColor: "#1B1F3B"
};
const NavFontStyle = {
  fontSize: "40px"
};

function NavBar() {
  return (
    <Flex
      style={NavBarStyle}
      px={2}
      color="white"
      bg="black"
      alignItems="center"
    >
      <Text style={NavFontStyle} p={2} fontWeight="bold">
        SideJobs
      </Text>
      <Box mx="auto" />
      <Link to="/post">
        <Button style={SignInButtonStyle} variant="primary" mr={2}>
          New Post
        </Button>
      </Link>
      <Link to="/jobs">
        <Button style={SignInButtonStyle} variant="primary" mr={2}>
          Current Listings
        </Button>
      </Link>
    </Flex>
  );
}
export default NavBar;
