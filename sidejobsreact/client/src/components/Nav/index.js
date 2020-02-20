import React from 'react';
import {Link} from 'react-router-dom';
import {
    Flex, Text, Box, Button
} from 'rebass';
import './style.css'
// import SignUpButton from './';



const SignInButtonStyle = {
   padding: '8px'
};


// const SignOutButtonStyle = {
//     backgroundColor: '#1B1F3B'
// };

function NavBar() {
    return (
        <Flex className='NavBarStyle'
            // px={2}
            color='white'
            alignItems='center'>
            <Link to='/' style={{ textDecoration: 'none'}}>
            <Text className='NavFontStyle' p={2} fontWeight='bold'>SideJobs</Text>
            </Link>
            <Box mx='auto' />
            <div className={['buttonDiv','p-8']}>
            <Link to='/signup'>
            <Button px={2} className='SignInButtonStyle' variant="primary" mr={2}> 
                Sign Up 
            </Button>
            </Link>
            <Link to='/post'>
            <Button px={2}className='SignInButtonStyle' variant="primary" mr={2}> 
                New Post 
            </Button>
            </Link>
            <Link to='/jobs'>
            <Button px={2}className='SignInButtonStyle' variant="primary" mr={2}> 
                Listings
            </Button>
            </Link>
            </div>
           
           
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


