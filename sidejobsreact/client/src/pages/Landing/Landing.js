import React from "react";
import {Box, Text, Button} from 'rebass';
import { Label, Input } from '@rebass/forms'
import NavBar from '../../components/NavBar/index'
import Footer from '../../components/Footer/index'
import './style.css'

function Landing(props) {
    return (
        <div>
            <div className='InputContainerStyle'>
                <Box
                    sx={{
                        alignContent: 'center'
                    }}>

                    <Text
                    sx= {{
                        fontSize:'40px',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        color: '#1B1F3B',
                        p: 4

                    }}>Search</Text>

                    <Input className='inputBarStyle'
                        sx={{
                            p: 2,
                            }}
                        id='search'
                        name='search'
                        type='text'
                        placeholder=''
                    />
                    <Button className='SearchButtonStyle'  mr={2}>Search</Button>

                </Box>

            </div>
        </div>
    );
};
export default Landing;