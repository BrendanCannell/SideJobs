import React from 'react';
import {
    Flex, Text, Box, Link, Button
} from 'rebass';
import SignUpButton from './';


const NavBarStyle = {
    padding: '8px',
    paddingTop: '1px', 
    paddingBottom: '1px',
    // font: 'montserrat'
    // backgroundColor: '#EA0E96',
    backgroundColor: '#E8406D',
    fontSide: '50px'
};
const SignUpButtnStyle = {
    color: '#1B1F3B',
    borderColor: '#1B1F3B',
    border: '20px',
};
const SignInButtonStyle = {
    backgroundColor: '#1B1F3B'
};
const NavFontStyle = {
    fontSize: '40px',
    
}
function NavBar() {
    return (
        <Flex style= {NavBarStyle}
            px={2}
            color='white'
            bg='black'
            alignItems='center'>
           
            <Text style={NavFontStyle} p={2} fontWeight='bold'>SideJobs</Text>
            <Box mx='auto' />
            <Button style= {SignInButtonStyle} variant='primary' mr={2}>SignIn</Button>

            <Button style= {SignUpButtnStyle} variant='outline' mr={2}>SignUp</Button>

            {/* <Link variant='nav' href='#!'>
                Profile
            </Link> */}
        </Flex>
    );
};
export default NavBar;