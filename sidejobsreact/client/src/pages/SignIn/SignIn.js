import React from "react";
import { Card, Text, Button } from 'rebass';
import { Input } from '@rebass/forms'
// import Footer from '../../components/Footer/index'
import './style.css'




function SignIn(props) {
    return (
        <div>
            <div className='SignInContainer'>
                <div className='SignInCard'>
                    <Card>
                        <Text className='SignInText'>
                            Sign In
                        </Text>
                        <div>
                            <Input className='SignInInput'
                                style={{margin: '5px'}}
                                type='text'
                                placeholder='username or email'>
                            </Input>

                            <Input
                            className='SignInInput'
                             style={{margin: '5px'}}
                                type='text'
                                placeholder='password'>
                            </Input>
                            <Button className='SignInButton'>
                                Sign In
                            </Button>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default SignIn;

