import React from "react";
import {Box, Text} from 'rebass';
import { Label, Input } from '@rebass/forms'
import NavBar from '../components/NavBar/index'
import Footer from '..//components/Footer/index'

// import { ThemeProvider } from 'emotion-theming'
const InputContainerStyle = {
    marginRight: '25px',
    marginLeft: '25px',
    marginTop: '100px',
}
const InputFormStyle = {
   
}
const inputBarStyle = {
    borderRadius: '7px',

}


function Landing(props) {
    return (
        <div>
            <NavBar />
            <div style={InputContainerStyle}>
                <Box style={InputFormStyle}
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

                    <Input style={inputBarStyle}
                        sx={{
                            p: 2,

                            }}

                        id='search'
                        name='search'
                        type='text'
                        placeholder=''
                    />
                </Box>
            </div>
        </div>
    )
}
export default Landing;