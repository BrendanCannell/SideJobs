import React from "react";
import {Card, Image, Heading, Text} from "rebass";
import NavBar from "../components/NavBar/index";
import { ThemeProvider } from 'emotion-theming'



const ResultCardStyle = {
    margin: '10px',
    borderRadius: '4px',
    border: '10px',
    borderColor: 'black',
    boxShadow: '4px',
    shadows: {
        small: '0 0 4px rgba(0, 0, 0, .125)'}

}
function Results(props) {
    return (
        <div>

            <NavBar />

            <Card style={ResultCardStyle} width={500}>
                <Image src={'https://via.placeholder.com/140x100'} />
                <Heading>Title</Heading>
                <Text> Pricing/hr</Text>
                <Text> ZipCode </Text>
                <Text> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
            </Card>
            <Card style={ResultCardStyle} width={500}>
                <Image src={'https://via.placeholder.com/140x100'} />
                <Heading>Title</Heading>
                <Text> Pricing/hr</Text>
                <Text> ZipCode </Text>
                <Text> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
            </Card>
            <Card style={ResultCardStyle} width={500}>
                <Image src={'https://via.placeholder.com/140x100'} />
                <Heading>Title</Heading>
                <Text> Pricing/hr</Text>
                <Text> ZipCode </Text>
                <Text> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
            </Card>

        </div>
    )
}

export default Results;