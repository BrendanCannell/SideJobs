import React from "react";
import { Card, Image, Heading, Text } from "rebass";
import NavBar from "../../components/NavBar/index";
import './style.css'
// import { ThemeProvider } from 'emotion-theming'



// const ResultCardStyle = {
//     border: '30px, solid, black',
//     margin: '20px',
//     borderRadius: '4px',
//     boxShadow: '4px',
//     // shadows: {
//     //     small: '0 0 4px rgba(0, 0, 0, .125)'}

// };

function Results(props) {
    return (
        <div>
            <Card>

                <div className='ResultCardStyle'>
                    <div className='ResultsHeaderInfoFloat'>
                        <div>
                            <Image className='CardImageStyle' src={'https://via.placeholder.com/150x150'} />
                        </div>
                        <div className='CardHearderInfoFloat'>
                            <Heading className='CardTitleStyle'>Title Title Title Title Title Title </Heading>
                            <div className='ZipAndPriceStyle'>
                                <Text className='CardPriceStyle'> Pricing/hr</Text>
                                <Text className='CardZipcodeStyle'> ZipCode </Text>
                            </div>
                        </div>
                    </div>
                    <Text className='CardTextStyle'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                </div>
            </Card>
        </div>


        // R 208 G78 B106 
    )
}

export default Results;