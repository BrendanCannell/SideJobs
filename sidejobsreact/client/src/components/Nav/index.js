import React from 'react';
import {Link} from 'react-router-dom';
import {
    Flex, Text, Box, Button
} from 'rebass';
// import SignUpButton from './';


const NavBarStyle = {
    padding: '8px',
    paddingTop: '1px',
    paddingBottom: '1px',
    // font: 'montserrat'
    // backgroundColor: '#EA0E96',
    backgroundColor: '#E8406D',
    fontSide: '50px'
};
// const SignUpButtonStyle = {
//     color: '#1B1F3B',
//     borderColor: '#1B1F3B',
//     border: '20px',
// };
const SignInButtonStyle = {
    backgroundColor: '#1B1F3B'
};
const NavFontStyle = {
    fontSize: '40px',
};
// const SignOutButtonStyle = {
//     backgroundColor: '#1B1F3B'
// };

function NavBar() {
    return (
        <Flex style={NavBarStyle}
            px={2}
            color='white'
            bg='black'
            alignItems='center'>

            <Text style={NavFontStyle} p={2} fontWeight='bold'>SideJobs</Text>
            <Box mx='auto' />
            <Link to='/post'>
            <Button style={SignInButtonStyle} variant="primary" mr={2}> 
                New Post 
            </Button>
            </Link>
           
            {/* <Link to="/signin">
                <Button style={SignInButtonStyle} variant="primary" mr={2}>
                    SignIn
                </Button>
            </Link>
            <Link to="/signup">
                <Button style={SignUpButtonStyle} variant="outline" mr={2}>
                    SignUp
                </Button>
            </Link>
            <Link to='/signout'>
                <Button style={SignOutButtonStyle} variant="outline" mr={2}>
                    SignOut
                </Button>
            </Link> */}
        </Flex>
    );
};
export default NavBar;


